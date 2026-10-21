# ADWEH Website — Comprehensive Content and Service Alignment Audit

Act as a senior website content auditor, SEO specialist, AIEO/GEO strategist, cybersecurity-focused web development reviewer, and quality assurance engineer.

Your task is to thoroughly inspect the entire existing ADWEH website and verify that all website content, messaging, headings, descriptions, service sections, navigation items, calls to action, metadata, and supporting content accurately align with ADWEH's approved services.

**IMPORTANT: This is an audit and correction task, not a redesign or redevelopment task. Preserve the existing website design and functionality.**

## 1. Official Brand and Approved Service Scope

The correct brand name is **ADWEH**.

The website must focus exclusively on these four approved service categories:

1. **AIEO**
2. **GEO**
3. **SEO**
4. **Website Development**

Website Development must communicate the following capabilities:
- Cybersecurity-focused website development.
- Secure website development and security testing to identify and address vulnerabilities.
- Websites built with SEO, AIEO, and GEO optimization in mind.

Do not introduce any additional standalone services, unrelated offerings, or unsupported business capabilities.

Use the existing website and project files as the primary source of truth. Do not invent company credentials, certifications, client results, statistics, guarantees, partnerships, or technical capabilities.

## 2. Audit the Entire Website

Inspect all relevant source files and user-facing content, including:

- Homepage and hero section.
- Main headings, subheadings, and descriptions.
- All service cards and detailed service sections.
- Navigation menus, dropdowns, and footer links.
- About, company, and brand messaging.
- Features, benefits, process descriptions, and deliverables.
- Calls to action, buttons, contact sections, and forms.
- FAQs, testimonials, case studies, and portfolio content.
- Page titles, meta descriptions, canonical URLs, Open Graph metadata, and structured data.
- Image alt text and accessible labels.
- Mobile-specific content and responsive components.
- Internal links and service-related routes.
- Reusable components containing duplicated or outdated content.

Inspect the actual implementation rather than relying only on the homepage or a visual preview.

## 3. Service Alignment Verification

For every page and content section, determine:

- Which approved service does this content support?
- Is the description relevant to that service?
- Is the wording technically accurate and understandable?
- Does the content communicate a clear business benefit?
- Does it contradict another section of the website?
- Does it introduce an unapproved service?
- Does it contain outdated MedScale branding?
- Does it make unsupported promises or guarantees?
- Does the CTA match the service being described?

Use the following service definitions as a guide.

### A. AIEO

Review whether AIEO content clearly explains optimization for AI-driven search and answer experiences. Verify that the terminology is used consistently and that the stated deliverables are supported by the actual offering.

### B. GEO

Review whether GEO content appropriately describes improving content discoverability, contextual relevance, and visibility in generative AI search experiences.

Avoid promising guaranteed AI citations, rankings, or recommendations.

### C. SEO

Review whether SEO content accurately describes relevant search optimization practices, such as technical SEO, crawlability, indexing, on-page optimization, content structure, and search performance measurement where applicable.

Do not claim specific ranking improvements without evidence.

### D. Website Development

Verify that website development messaging covers:
- Security-conscious development practices.
- Website security testing and vulnerability remediation workflows.
- Technical foundations that support SEO, AIEO, and GEO.
- Website functionality, usability, accessibility, and responsive behavior where applicable.

Distinguish between building security-conscious websites and providing separate cybersecurity services. Do not present penetration testing, managed security, security certifications, or other specialist services as offerings unless the existing business scope explicitly supports them.

## 4. Brand Consistency and Terminology

Check every user-facing occurrence of MedScale and ensure the correct ADWEH branding is used.

Check:
- Brand spelling and capitalization.
- Consistent service names and terminology.
- Duplicate, contradictory, irrelevant, or placeholder content.
- Incorrect service-to-description mappings.
- Broken links and incorrect CTA destinations.
- Inconsistent page titles and metadata.
- Unsupported claims and exaggerated marketing language.

Do not blindly replace internal identifiers or technical configuration values that could affect functionality. Report any remaining references and explain whether they are intentional.

## 5. Content Corrections

For each issue, classify it as:
- **Critical:** Incorrect branding, broken navigation, unsupported claims, or content that misrepresents the business.
- **High:** Content describing an unapproved service or materially misrepresenting an approved service.
- **Medium:** Inconsistent terminology, duplicated copy, weak descriptions, or mismatched CTAs.
- **Low:** Minor grammar, punctuation, or readability issues.

Correct confirmed issues that fall within the approved scope. Keep the existing design, layout, components, styling, animations, and behavior unchanged.

If a claim or capability cannot be verified from the project or available business information, flag it for confirmation instead of inventing a replacement.

## 6. SEO, AIEO, and GEO Quality Checks

Verify that:
- Each relevant page has a clear, accurate title and description.
- Headings follow a logical hierarchy.
- Content accurately answers the intended visitor's questions.
- Internal links point to relevant existing pages.
- Image alt text describes the actual image meaningfully.
- Structured data, if present, matches the visible content and real business information.
- No keyword stuffing, misleading metadata, or repetitive near-duplicate content is introduced.
- AI-search and generative-search claims are accurate and not presented as guaranteed outcomes.

Do not create new pages, keywords, schema types, or content sections unless explicitly authorized.

## 7. Technical and Visual Regression Checks

After permitted content corrections:
- Run the available build and relevant tests.
- Check for broken routes, links, missing assets, and console errors where tooling permits.
- Verify that existing components still render correctly.
- Check desktop, tablet, and mobile layouts.
- Confirm that text changes have not caused clipping, overflow, broken alignment, or unexpected spacing changes.
- Confirm that existing interactions and responsive behavior remain intact.

Do not modify unrelated code to resolve unrelated issues. Report them separately.

## 8. Required Final Audit Report

Provide a clear report with these sections:

### A. Executive Summary
Overall status of the ADWEH website and the most important findings.

### B. Page-by-Page Audit
For every relevant page or route, list:
- Page name and route.
- Content reviewed.
- Approved service supported.
- Issues identified.
- Corrections performed or recommended.

### C. Service Alignment Matrix
Create a table with these columns:

| Service | Content present | Accuracy | Issues | Status |
| AIEO | | | | |
| GEO | | | | |
| SEO | | | | |
| Website Development | | | | |

Use evidence from the actual website to justify each status.

### D. Branding Audit
Report the locations of remaining MedScale references, confirmed ADWEH references, and any intentional exceptions.

### E. Unsupported Claims and Out-of-Scope Services
List any unsupported promises, inaccurate technical statements, unrelated offerings, or content requiring business-owner confirmation.

### F. Changes Made
List every modified file and summarize the exact changes. Clearly distinguish completed corrections from recommendations that were not implemented.

### G. Testing Results
Report build results, test results, broken links, responsive checks, and any checks that could not be performed.

### H. Final Verdict
Choose one:
- **PASS:** All verified content aligns with the approved scope, and required checks pass.
- **PASS WITH ISSUES:** The main requirements are satisfied, but documented issues remain.
- **FAIL:** Significant service misalignment, branding problems, or technical regressions remain.

Do not claim a complete audit if any pages, routes, or relevant files were not inspected.

## NON-NEGOTIABLE RULES

1. ADWEH is the correct brand name.
2. Only AIEO, GEO, SEO, and Website Development are approved service categories.
3. Website Development must include the specified security and optimization positioning.
4. Do not invent business facts or guarantee security, rankings, or AI-search visibility.
5. Do not redesign, restructure, or modernize the website.
6. Do not change unrelated functionality, dependencies, routes, or configurations.
7. Make the smallest necessary corrections and document every modification.
8. If an issue requires a decision beyond the approved scope, report it instead of making assumptions.

Begin with a comprehensive audit, then implement only the confirmed, in-scope content corrections, run the available checks, and deliver the final report.