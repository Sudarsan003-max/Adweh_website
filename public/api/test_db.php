<?php
/**
 * =========================================================================
 * ADWEH - HOSTINGER DATABASE CONNECTION TEST UTILITY
 * =========================================================================
 * 
 * Open this file in your browser: https://yourdomain.com/api/test_db.php
 * It performs a real-time check of your Hostinger MySQL connection and table.
 */

header('Content-Type: text/html; charset=UTF-8');

$configFile = __DIR__ . '/db_config.php';
$hasConfig = file_exists($configFile);

$connectionStatus = 'not_checked';
$errorMessage = '';
$tableFound = false;
$leadCount = 0;
$phpVersion = phpversion();

if ($hasConfig) {
    require_once $configFile;
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $pdo = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
        $connectionStatus = 'success';

        // Check for adweh_leads table
        $check = $pdo->query("SHOW TABLES LIKE 'adweh_leads'")->fetch();
        if ($check) {
            $tableFound = true;
            $countStmt = $pdo->query("SELECT COUNT(*) as total FROM `adweh_leads`");
            $leadCount = (int)$countStmt->fetch()['total'];
        }
    } catch (PDOException $e) {
        $connectionStatus = 'error';
        $errorMessage = $e->getMessage();
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ADWEH — Hostinger Database Diagnostic</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      background: #0a0a0a;
      color: #f5f1ea;
      margin: 0;
      padding: 40px 20px;
      line-height: 1.6;
    }
    .container {
      max-width: 680px;
      margin: 0 auto;
      background: #11141c;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    }
    .badge {
      display: inline-block;
      font-family: monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      padding: 4px 10px;
      border-radius: 20px;
      margin-bottom: 16px;
    }
    .badge-ok { background: rgba(30, 190, 100, 0.2); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.4); }
    .badge-fail { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(248, 113, 113, 0.4); }
    h1 { font-size: 24px; margin: 0 0 8px 0; color: #ffffff; }
    p.lead { color: rgba(245, 241, 234, 0.7); margin-bottom: 24px; font-size: 14px; }
    .status-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13.5px; }
    .item:last-child { border-bottom: none; }
    .label { color: rgba(245, 241, 234, 0.6); font-family: monospace; }
    .value { font-weight: 600; color: #fff; }
    .code-box {
      background: #000;
      color: #38bdf8;
      font-family: monospace;
      font-size: 12px;
      padding: 14px;
      border-radius: 8px;
      overflow-x: auto;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .btn {
      display: inline-block;
      background: #1e2bc8;
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 13px;
      margin-top: 15px;
      border: none;
      cursor: pointer;
    }
    .btn:hover { background: #3b82f6; }
    .alert-error {
      background: rgba(239, 68, 68, 0.1);
      border-left: 4px solid #ef4444;
      padding: 14px;
      color: #fca5a5;
      font-size: 13px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <?php if ($connectionStatus === 'success'): ?>
      <span class="badge badge-ok">● Hostinger MySQL Connected</span>
      <h1>Database Connection: Verified</h1>
      <p class="lead">Your Hostinger MySQL database credentials in <code>db_config.php</code> are active and responsive.</p>

      <div class="status-card">
        <div class="item">
          <span class="label">Hostinger PHP:</span>
          <span class="value"><?php echo htmlspecialchars($phpVersion); ?></span>
        </div>
        <div class="item">
          <span class="label">Database Host:</span>
          <span class="value"><?php echo htmlspecialchars(DB_HOST); ?></span>
        </div>
        <div class="item">
          <span class="label">Database Name:</span>
          <span class="value"><?php echo htmlspecialchars(DB_NAME); ?></span>
        </div>
        <div class="item">
          <span class="label">Database User:</span>
          <span class="value"><?php echo htmlspecialchars(DB_USER); ?></span>
        </div>
        <div class="item">
          <span class="label">Table `adweh_leads`:</span>
          <span class="value" style="color: <?php echo $tableFound ? '#34d399' : '#fbbf24'; ?>">
            <?php echo $tableFound ? '✅ Table Exists' : '⚠️ Not Created Yet (Auto-generates on first lead)'; ?>
          </span>
        </div>
        <?php if ($tableFound): ?>
        <div class="item">
          <span class="label">Total Recorded Leads:</span>
          <span class="value" style="color: #60a5fa;"><?php echo $leadCount; ?> Leads</span>
        </div>
        <?php endif; ?>
      </div>

      <a href="view_leads.php?key=<?php echo htmlspecialchars(defined('ADMIN_ACCESS_KEY') ? ADMIN_ACCESS_KEY : ''); ?>" class="btn">
        View All Recorded Leads in CRM Dashboard →
      </a>

    <?php else: ?>
      <span class="badge badge-fail">✕ Connection Failed</span>
      <h1>Database Connection Issue</h1>
      <p class="lead">Unable to connect to MySQL with the credentials configured in <code>public/api/db_config.php</code>.</p>

      <div class="alert-error">
        <strong>Error Details:</strong><br>
        <?php echo htmlspecialchars($errorMessage ?: 'Config file missing or credentials rejected.'); ?>
      </div>

      <div class="status-card">
        <div style="font-weight: 600; margin-bottom: 8px;">How to resolve on Hostinger:</div>
        <ol style="font-size: 13px; color: rgba(245,241,234,0.8); margin: 0; padding-left: 20px;">
          <li>Log in to your <strong>Hostinger hPanel</strong>.</li>
          <li>Navigate to <strong>Databases → MySQL Databases</strong>.</li>
          <li>Confirm your <strong>Database Name</strong>, <strong>Username</strong>, and <strong>Password</strong>.</li>
          <li>Open <code>public/api/db_config.php</code> in Hostinger File Manager and update the values.</li>
          <li>Refresh this test page.</li>
        </ol>
      </div>
    <?php endif; ?>
  </div>
</body>
</html>

