<?php
/**
 * =========================================================================
 * ADWEH - LEADS DASHBOARD & CSV EXPORT
 * =========================================================================
 * 
 * Secure mini-dashboard to inspect, filter, and export leads.
 * Protected by secret key: ?key=adweh_lead_access_2026 (configured in db_config.php)
 */

$configFile = __DIR__ . '/db_config.php';
if (!file_exists($configFile)) {
    die("Configuration file not found.");
}
require_once $configFile;

// Auth check
$providedKey = $_GET['key'] ?? '';
$expectedKey = defined('ADMIN_ACCESS_KEY') ? ADMIN_ACCESS_KEY : 'adweh_lead_access_2026';

if (empty($providedKey) || $providedKey !== $expectedKey) {
    http_response_code(403);
    die("<!DOCTYPE html><html><body style='background:#0a0a0a;color:#fff;font-family:sans-serif;padding:40px;text-align:center;'>
    <h2>🔒 Access Denied</h2>
    <p>Please provide the valid administrative access key via query parameter: <code>?key=YOUR_KEY</code></p>
    </body></html>");
}

try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    // Handle CSV Export
    if (isset($_GET['action']) && $_GET['action'] === 'export_csv') {
        header('Content-Type: text/csv; charset=UTF-8');
        header('Content-Disposition: attachment; filename=adweh_leads_' . date('Y-m-d') . '.csv');
        $output = fopen('php://output', 'w');
        fputcsv($output, ['ID', 'Name', 'Email', 'Company', 'Website', 'Industry', 'Priority', 'Phone', 'Notes', 'IP Address', 'Created At']);
        
        $leadsStmt = $pdo->query("SELECT * FROM `adweh_leads` ORDER BY id DESC");
        while ($row = $leadsStmt->fetch()) {
            fputcsv($output, [
                $row['id'],
                $row['name'],
                $row['email'],
                $row['company'],
                $row['website'],
                $row['industry'],
                $row['priority'],
                $row['phone'],
                $row['notes'],
                $row['ip_address'],
                $row['created_at'],
            ]);
        }
        fclose($output);
        exit;
    }

    $leads = $pdo->query("SELECT * FROM `adweh_leads` ORDER BY id DESC LIMIT 200")->fetchAll();

} catch (PDOException $e) {
    die("Database Error: " . htmlspecialchars($e->getMessage()));
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ADWEH — Lead Management Console</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #06080d;
      color: #f5f1ea;
      margin: 0;
      padding: 24px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      margin-bottom: 24px;
    }
    .title-row { display: flex; align-items: center; gap: 12px; }
    .badge {
      background: rgba(30, 43, 200, 0.3);
      color: #93c5fd;
      border: 1px solid rgba(96, 165, 250, 0.4);
      padding: 3px 10px;
      font-size: 11px;
      font-family: monospace;
      border-radius: 999px;
    }
    .btn {
      background: #1e2bc8;
      color: #fff;
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .btn:hover { background: #3b82f6; }
    .table-container {
      background: #0d111b;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
      text-align: left;
    }
    th {
      background: rgba(255,255,255,0.03);
      padding: 12px 16px;
      font-family: monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: rgba(245,241,234,0.6);
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    td {
      padding: 14px 16px;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      vertical-align: top;
    }
    tr:hover td { background: rgba(255,255,255,0.02); }
    .pill {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-family: monospace;
      background: rgba(255,255,255,0.08);
      color: #cbd5e1;
    }
    .pill-blue { background: rgba(30,43,200,0.25); color: #60a5fa; }
    .muted { color: rgba(245,241,234,0.5); font-size: 12px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="title-row">
      <h2 style="margin:0; font-size:20px;">ADWEH Inbound Leads</h2>
      <span class="badge"><?php echo count($leads); ?> Submissions</span>
    </div>
    <div style="display:flex; gap:10px;">
      <a href="?key=<?php echo urlencode($providedKey); ?>&action=export_csv" class="btn">
        📥 Export All to CSV (Excel)
      </a>
      <a href="test_db.php" class="btn" style="background:#222; border:1px solid #444;">
        ⚙️ Database Test
      </a>
    </div>
  </div>

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Contact &amp; Company</th>
          <th>Industry &amp; Priority</th>
          <th>Phone / WhatsApp</th>
          <th>Notes / Project Scope</th>
          <th>Submitted</th>
        </tr>
      </thead>
      <tbody>
        <?php if (empty($leads)): ?>
          <tr><td colspan="6" style="text-align:center; padding:40px; color:#888;">No leads submitted yet.</td></tr>
        <?php else: ?>
          <?php foreach ($leads as $lead): ?>
            <tr>
              <td style="font-family:monospace; color:#60a5fa;">#<?php echo $lead['id']; ?></td>
              <td>
                <strong style="color:#fff;"><?php echo htmlspecialchars($lead['name']); ?></strong><br>
                <a href="mailto:<?php echo htmlspecialchars($lead['email']); ?>" style="color:#93c5fd; text-decoration:none;">
                  <?php echo htmlspecialchars($lead['email']); ?>
                </a><br>
                <span class="muted"><?php echo htmlspecialchars($lead['company']); ?></span>
                <?php if (!empty($lead['website'])): ?>
                  · <a href="<?php echo htmlspecialchars($lead['website']); ?>" target="_blank" style="color:#60a5fa; font-size:11px;">Site ↗</a>
                <?php endif; ?>
              </td>
              <td>
                <span class="pill"><?php echo htmlspecialchars($lead['industry']); ?></span><br>
                <span class="pill pill-blue" style="margin-top:4px;"><?php echo htmlspecialchars($lead['priority']); ?></span>
              </td>
              <td style="font-family:monospace;">
                <?php if (!empty($lead['phone'])): ?>
                  <a href="tel:<?php echo htmlspecialchars($lead['phone']); ?>" style="color:#34d399; text-decoration:none;">
                    <?php echo htmlspecialchars($lead['phone']); ?>
                  </a>
                <?php else: ?>
                  <span class="muted">—</span>
                <?php endif; ?>
              </td>
              <td style="max-width:300px;">
                <div style="font-size:12.5px; line-height:1.4; color:rgba(245,241,234,0.85);">
                  <?php echo nl2br(htmlspecialchars($lead['notes'] ?: 'No notes provided')); ?>
                </div>
              </td>
              <td class="muted" style="white-space:nowrap;">
                <?php echo date('M j, Y g:ia', strtotime($lead['created_at'])); ?>
              </td>
            </tr>
          <?php endforeach; ?>
        <?php endif; ?>
      </tbody>
    </table>
  </div>
</body>
</html>

