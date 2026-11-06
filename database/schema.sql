-- ============================================================
-- ADWEH Search & AI Visibility Architecture
-- Hostinger MySQL Database Schema for Contact & Assessment Leads
-- ============================================================

-- Create table if it doesn't already exist
CREATE TABLE IF NOT EXISTS `adweh_leads` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL COMMENT 'Full name of contact',
  `email` VARCHAR(191) NOT NULL COMMENT 'Work or business email',
  `company` VARCHAR(191) NOT NULL COMMENT 'Company or clinic name',
  `website` VARCHAR(255) DEFAULT NULL COMMENT 'Existing website URL',
  `industry` VARCHAR(100) DEFAULT 'Healthcare & Clinics' COMMENT 'Business vertical',
  `priority` VARCHAR(100) DEFAULT 'Not Sure' COMMENT 'Primary objective: SEO, AIEO, GEO, Web, or Not Sure',
  `phone` VARCHAR(50) DEFAULT NULL COMMENT 'Phone or WhatsApp contact number',
  `notes` TEXT DEFAULT NULL COMMENT 'Challenges, goals, and enquiry notes',
  `ip_address` VARCHAR(45) DEFAULT NULL COMMENT 'IPv4 or IPv6 of visitor',
  `user_agent` VARCHAR(255) DEFAULT NULL COMMENT 'Browser user-agent string',
  `status` ENUM('new', 'in_review', 'contacted', 'qualified', 'archived') NOT NULL DEFAULT 'new' COMMENT 'Lead status',
  `admin_notes` TEXT DEFAULT NULL COMMENT 'Internal notes by ADWEH team',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Submission timestamp',
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update timestamp',
  INDEX `idx_leads_email` (`email`),
  INDEX `idx_leads_created_at` (`created_at`),
  INDEX `idx_leads_status` (`status`),
  INDEX `idx_leads_industry` (`industry`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional test record to verify table installation
INSERT INTO `adweh_leads` 
  (`name`, `email`, `company`, `website`, `industry`, `priority`, `phone`, `notes`, `status`) 
VALUES 
  ('System Verification', 'admin@adweh.com', 'ADWEH Systems', 'https://adweh.com', 'Healthcare & Clinics', 'AIEO', '+91 86670 31931', 'Initial verification seed lead generated on schema import.', 'new');

