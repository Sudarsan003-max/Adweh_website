ADWEH — Complete Website URL and Hash Fragment Audit

Act as a senior technical SEO engineer and frontend routing specialist.

Audit the entire ADWEH website to identify all URLs, navigation links, routing patterns, and browser interactions that use hash fragments (#).

The goal is to establish a clean, SEO-friendly URL structure across the website without breaking navigation or changing the existing design.

1. Inspect the Entire Project

Inspect:

All navigation menus and dropdowns.

Header and footer links.

Homepage sections and calls to action.

About, Services, Contact, Portfolio, and any other existing pages.

React Router or other routing configuration.

All href="#..." and href="/#..." references.

All window.location.hash, location.hash, scrollIntoView, and hash-based scrolling logic.

Canonical tags, page titles, metadata, sitemap, and internal links.

Mobile navigation and responsive interactions.

Search the entire relevant codebase rather than correcting only the Services link.

2. Classify Every Hash Reference

For every hash reference, determine whether it is:

A. A link to a section on the same page.

B. A link to a section on another page.

C. A route or navigation pattern being used instead of a dedicated page.

D. An unrelated fragment, such as a tab, accordion, or other intentional interaction.

Create an inventory showing the current URL, where it appears, its purpose, and the recommended action.

3. Implement Clean URLs Where Appropriate

Use dedicated paths such as /services, /about, /contact, or /portfolio only where the existing website structure and content justify separate pages.

Reuse existing content and components wherever possible.

Update navigation links to use the correct routes when dedicated pages exist.

Use / for homepage navigation instead of /#home when appropriate.

Preserve intentional section links when they are the correct navigation method.

Preserve meaningful fragments used for in-page navigation and existing functionality.

Do not create unnecessary pages solely to remove hash fragments.

Do not manipulate the URL to hide a fragment while leaving navigation or page state broken.

4. Technical SEO Requirements

Ensure each real page has an appropriate, unique title and meta description where applicable.

Ensure canonical URLs point to the correct production-domain URLs.

Update internal links to use the intended canonical routes.

Update the sitemap to include actual indexable pages, if a sitemap exists.

Avoid duplicate or conflicting page URLs.

Ensure direct route access, refresh, browser back/forward, and page loading work correctly.

Configure production hosting fallback rules if required for client-side routing.

Do not assume that removing hash fragments alone improves search rankings.

5. Preserve the Existing Website

Do not change:

ADWEH branding or approved services.

Colors, typography, layout, spacing, images, or animations.

Existing visual design or responsive behavior.

Unrelated components, dependencies, or business logic.

Make only changes required for correct routing, navigation, and technical SEO.