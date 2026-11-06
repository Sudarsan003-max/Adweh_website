# 🚀 ADWEH — Complete Hostinger Deployment & Database Setup Guide

This guide walks you through deploying your ADWEH website and connecting the MySQL database for contact and visibility assessment leads on Hostinger in under 5 minutes.

---

## 📦 What is Included in Your Package

1. **Production Web Application** (`dist/` / root of zip):
   - `index.html` — Built, high-performance single-bundle website.
   - `.htaccess` — LiteSpeed/Apache routing configuration (prevents 404s on subpages like `/contact`, `/results`, `/seo`).
   - `case-studies/` & static assets (logos, images, favicon).
2. **Hostinger Database Backend** (`api/`):
   - `api/contact.php` — Secure endpoint that receives form submissions and inserts them into MySQL.
   - `api/db_config.php` — Database configuration file where you enter your Hostinger credentials.
   - `api/test_db.php` — Diagnostic page to test your database connection in your browser.
   - `api/view_leads.php` — Built-in lead viewer and CSV export dashboard.
3. **Database Schema** (`database/schema.sql`):
   - Clean SQL table structure (`adweh_leads`) with indexes and timestamps.

---

## 🛠️ Step 1: Create Your MySQL Database in Hostinger hPanel

1. Log in to your **[Hostinger Control Panel (hPanel)](https://hpanel.hostinger.com)**.
2. Select your hosting plan / domain, then click **Databases** → **MySQL Databases**.
3. Under **Create a New MySQL Database And Database User**:
   - **MySQL Database name**: e.g., `adweh` (Hostinger will prefix it, e.g. `u123456789_adweh`).
   - **MySQL Username**: e.g., `adweh_user` (Hostinger will prefix it, e.g. `u123456789_adweh_user`).
   - **Password**: Create a strong password (copy and save this password!).
4. Click **Create**.
5. Note down:
   - **Database Name**
   - **Database Username**
   - **Password**
   - **Host** (on Hostinger, this is almost always `localhost`).

---

## 🗄️ Step 2: Import the Database Table (`schema.sql`)

1. In Hostinger hPanel, scroll down to the **List of Current MySQL Databases And Users**.
2. Next to your newly created database, click the **Enter phpMyAdmin** button.
3. Inside phpMyAdmin:
   - Click on your database name on the left sidebar.
   - Click the **Import** tab at the top.
   - Click **Choose File** and select `database/schema.sql`.
   - Click the **Import** / **Go** button at the bottom.
4. You will see a green success banner confirming that table `adweh_leads` has been created.

> **Note:** The backend script `contact.php` also includes self-healing auto-creation: if you ever forget to import the schema, the script will automatically create the table on the first incoming lead!

---

## ⚙️ Step 3: Configure Database Credentials in `api/db_config.php`

Open `api/db_config.php` (either before uploading or inside Hostinger File Manager) and update lines 24–27 with your Hostinger database details:

```php
define('DB_HOST', 'localhost');                    // Leave as 'localhost'
define('DB_NAME', 'u123456789_adweh');             // Your Hostinger DB Name
define('DB_USER', 'u123456789_adweh_user');        // Your Hostinger DB User
define('DB_PASS', 'YOUR_DATABASE_PASSWORD_HERE');  // Your Hostinger DB Password
```

You can also change `NOTIFY_EMAIL` to your desired inbox (e.g. `yourname@adweh.com`) to get instant email alerts whenever a new inquiry arrives.

---

## 📤 Step 4: Upload Your Website Files to Hostinger

1. In Hostinger hPanel, navigate to **Files** → **File Manager** (or connect via FTP / FileZilla).
2. Open the **`public_html`** folder of your domain.
3. Upload the contents of the `adweh-hostinger-ready` folder (or unzip `adweh-hostinger-production.zip` directly inside `public_html`).
4. Ensure the file structure looks like this inside `public_html`:
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── robots.txt
   ├── sitemap.xml
   ├── api/
   │   ├── contact.php
   │   ├── db_config.php
   │   ├── test_db.php
   │   └── view_leads.php
   ├── case-studies/
   └── (images and icons...)
   ```

---

## 🔍 Step 5: Test the Connection & Leads Dashboard

1. **Verify MySQL Connection:**
   Open in your browser:
   `https://yourdomain.com/api/test_db.php`
   - You should see a green badge: **● Hostinger MySQL Connected**.
2. **Submit a Test Lead:**
   - Go to your website: `https://yourdomain.com/contact`
   - Fill in the form and click **Request My Visibility Assessment →**.
   - It will save directly into your Hostinger MySQL database.
3. **View & Export Leads:**
   Open the included CRM dashboard in your browser:
   `https://yourdomain.com/api/view_leads.php?key=adweh_lead_access_2026`
   - You can see all submitted leads, filter them, or click **"📥 Export All to CSV (Excel)"** anytime!

---

## 🔒 Security Best Practices Already Implemented

- ✅ **SQL Injection Protection:** All database inserts utilize PDO prepared statements with parameter binding.
- ✅ **Config Protection:** The `.htaccess` file prevents visitors from directly reading `api/db_config.php`.
- ✅ **SPA Routing:** LiteSpeed rewrite rules ensure direct links like `/contact` or refreshing pages never throw 404 errors.
- ✅ **CORS & Input Sanitization:** Clean email validation, string escaping, and request origin controls.

