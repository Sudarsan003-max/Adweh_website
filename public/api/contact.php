<?php
/**
 * =========================================================================
 * ADWEH - HOSTINGER CONTACT & ASSESSMENT SUBMISSION ENDPOINT
 * =========================================================================
 * 
 * Handles incoming POST requests from the website contact forms.
 * Stores validated leads in Hostinger MySQL database.
 * Dispatches optional email notification to the administration team.
 */

// Enable CORS for frontend API calls
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=UTF-8');

// Respond immediately to CORS preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method Not Allowed. Only POST requests are supported.'
    ]);
    exit;
}

// Load database configuration
$configFile = __DIR__ . '/db_config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Configuration file db_config.php not found.'
    ]);
    exit;
}
require_once $configFile;

// Parse incoming payload (supports both JSON body and standard form-data)
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Extract and sanitize input fields
$name     = isset($data['name'])     ? trim((string)$data['name']) : '';
$email    = isset($data['email'])    ? trim((string)$data['email']) : '';
$company  = isset($data['company'])  ? trim((string)$data['company']) : '';
$website  = isset($data['website'])  ? trim((string)$data['website']) : '';
$industry = isset($data['industry']) ? trim((string)$data['industry']) : 'Healthcare & Clinics';
$priority = isset($data['priority']) ? trim((string)$data['priority']) : 'Not Sure';
$phone    = isset($data['phone'])    ? trim((string)$data['phone']) : '';
$notes    = isset($data['notes'])    ? trim((string)$data['notes']) : '';

// Validation
$errors = [];

if (empty($name) || mb_strlen($name) < 2) {
    $errors[] = 'Full name is required (minimum 2 characters).';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid work email address is required.';
}

if (empty($company) || mb_strlen($company) < 2) {
    $errors[] = 'Company or clinic name is required.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'errors' => $errors,
        'message' => implode(' ', $errors)
    ]);
    exit;
}

// Capture client metadata
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $forwarded = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
    $ipAddress = trim($forwarded[0]);
}
$userAgent = isset($_SERVER['HTTP_USER_AGENT']) ? substr((string)$_SERVER['HTTP_USER_AGENT'], 0, 255) : '';

// Attempt Database Connection & Record Insertion
try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);

    // Self-healing: Ensure table exists automatically
    $tableCheck = $pdo->query("SHOW TABLES LIKE 'adweh_leads'")->fetch();
    if (!$tableCheck) {
        $createTableSql = "CREATE TABLE IF NOT EXISTS `adweh_leads` (
            `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            `name` VARCHAR(150) NOT NULL,
            `email` VARCHAR(191) NOT NULL,
            `company` VARCHAR(191) NOT NULL,
            `website` VARCHAR(255) DEFAULT NULL,
            `industry` VARCHAR(100) DEFAULT 'Healthcare & Clinics',
            `priority` VARCHAR(100) DEFAULT 'Not Sure',
            `phone` VARCHAR(50) DEFAULT NULL,
            `notes` TEXT DEFAULT NULL,
            `ip_address` VARCHAR(45) DEFAULT NULL,
            `user_agent` VARCHAR(255) DEFAULT NULL,
            `status` ENUM('new', 'in_review', 'contacted', 'qualified', 'archived') NOT NULL DEFAULT 'new',
            `admin_notes` TEXT DEFAULT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX `idx_leads_email` (`email`),
            INDEX `idx_leads_created_at` (`created_at`),
            INDEX `idx_leads_status` (`status`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";
        $pdo->exec($createTableSql);
    }

    // Insert lead into MySQL
    $stmt = $pdo->prepare("
        INSERT INTO `adweh_leads` 
            (`name`, `email`, `company`, `website`, `industry`, `priority`, `phone`, `notes`, `ip_address`, `user_agent`, `status`)
        VALUES 
            (:name, :email, :company, :website, :industry, :priority, :phone, :notes, :ip_address, :user_agent, 'new')
    ");

    $stmt->execute([
        ':name'       => $name,
        ':email'      => $email,
        ':company'    => $company,
        ':website'    => $website,
        ':industry'   => $industry,
        ':priority'   => $priority,
        ':phone'      => $phone,
        ':notes'      => $notes,
        ':ip_address' => $ipAddress,
        ':user_agent' => $userAgent,
    ]);

    $insertedId = $pdo->lastInsertId();

    // Optional email notification dispatch
    if (defined('ENABLE_EMAIL_NOTIFICATION') && ENABLE_EMAIL_NOTIFICATION && defined('NOTIFY_EMAIL')) {
        $subject = "✦ New Visibility Assessment Request #{$insertedId} — {$company}";
        $message = "You have received a new visibility assessment lead from your ADWEH website:\n\n";
        $message .= "ID: #{$insertedId}\n";
        $message .= "Name: {$name}\n";
        $message .= "Email: {$email}\n";
        $message .= "Company: {$company}\n";
        $message .= "Website: " . ($website ?: 'None specified') . "\n";
        $message .= "Industry: {$industry}\n";
        $message .= "Main Priority: {$priority}\n";
        $message .= "Phone/WhatsApp: " . ($phone ?: 'None specified') . "\n";
        $message .= "Client Notes:\n" . ($notes ?: 'No additional notes') . "\n\n";
        $message .= "Submission IP: {$ipAddress}\n";
        $message .= "Submitted At: " . date('Y-m-d H:i:s T') . "\n";

        $from = defined('MAIL_FROM_HEADER') ? MAIL_FROM_HEADER : 'no-reply@adweh.com';
        $headers = "From: ADWEH Leads <{$from}>\r\n" .
                   "Reply-To: {$name} <{$email}>\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        @mail(NOTIFY_EMAIL, $subject, $message, $headers);
    }

    // Success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your assessment request has been successfully recorded.',
        'lead_id' => (int)$insertedId,
        'submitted_at' => date('Y-m-d H:i:s')
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Database connection or query failed.',
        'detail' => $e->getMessage()
    ]);
}

