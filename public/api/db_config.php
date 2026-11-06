<?php
/**
 * =========================================================================
 * ADWEH - HOSTINGER DATABASE CONFIGURATION
 * =========================================================================
 * 
 * Instructions for Hostinger:
 * 1. Log into Hostinger hPanel -> "Databases" -> "MySQL Databases".
 * 2. Create a new MySQL Database (e.g. u123456789_adweh).
 * 3. Create/Assign a MySQL User & Password.
 * 4. Replace the 4 placeholder values below with your Hostinger database values.
 * 
 * Note: On Hostinger shared/cloud hosting, DB_HOST is virtually always 'localhost'.
 */

// Deny direct script viewing in browser unless included
if (basename($_SERVER['SCRIPT_FILENAME']) === 'db_config.php') {
    header('HTTP/1.1 403 Forbidden');
    echo json_encode(['error' => 'Direct access to db_config.php forbidden.']);
    exit;
}

// Hostinger Database Credentials
define('DB_HOST', 'localhost');                    // Usually 'localhost' in Hostinger
define('DB_NAME', 'u123456789_adweh');             // Your Hostinger DB Name
define('DB_USER', 'u123456789_adweh_user');        // Your Hostinger DB User
define('DB_PASS', 'YOUR_DATABASE_PASSWORD_HERE');  // Your Hostinger DB Password
define('DB_CHARSET', 'utf8mb4');

// Email Notification Settings
// Whenever a client submits the contact form, an instant notification is sent here.
define('NOTIFY_EMAIL', 'info@adweh.com');
define('ENABLE_EMAIL_NOTIFICATION', true);
define('MAIL_FROM_HEADER', 'info@adweh.com');

// Admin Viewer Security Key
// Used to access the web-based leads reader at /api/view_leads.php?key=YOUR_KEY
define('ADMIN_ACCESS_KEY', 'adweh_lead_access_2026');

