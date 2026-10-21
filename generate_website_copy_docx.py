import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

def create_document():
    doc = docx.Document()

    # Configure Margins (1 inch all around)
    for section in doc.sections:
        section.top_margin = Inches(1.0)
        section.bottom_margin = Inches(1.0)
        section.left_margin = Inches(1.0)
        section.right_margin = Inches(1.0)
        section.header_distance = Inches(0.5)
        section.footer_distance = Inches(0.5)

        # Header
        header = section.header
        hp = header.paragraphs[0]
        hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        hrun = hp.add_run("ADWEH — Enterprise Growth Partner  |  End-to-End Website Copy")
        hrun.font.name = "Calibri"
        hrun.font.size = Pt(8.5)
        hrun.font.color.rgb = RGBColor(128, 128, 128)

        # Footer
        footer = section.footer
        fp = footer.paragraphs[0]
        fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        frun = fp.add_run("CONFIDENTIAL & PROPRIETARY  •  OFFICIAL WEBSITE COPY SPECIFICATION  •  ADWEH.COM")
        frun.font.name = "Calibri"
        frun.font.size = Pt(8.5)
        frun.font.color.rgb = RGBColor(140, 140, 140)

    # Color definitions
    COLOR_INK = RGBColor(10, 10, 10)         # #0A0A0A
    COLOR_COBALT = RGBColor(27, 59, 245)      # #1B3BF5
    COLOR_CORAL = RGBColor(255, 93, 59)       # #FF5D3B
    COLOR_MUTED = RGBColor(100, 116, 139)     # Slate #64748B
    COLOR_BODY = RGBColor(38, 38, 38)         # #262626

    # XML Helper Functions for Tables & Boxes
    def set_cell_background(cell, hex_color):
        shading = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
        cell._tc.get_or_add_tcPr().append(shading)

    def set_cell_padding(cell, top=140, bottom=140, left=200, right=200):
        tcPr = cell._tc.get_or_add_tcPr()
        tcMar = parse_xml(
            f'<w:tcMar {nsdecls("w")}>'
            f'<w:top w:w="{top}" w:type="dxa"/>'
            f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
            f'<w:left w:w="{left}" w:type="dxa"/>'
            f'<w:right w:w="{right}" w:type="dxa"/>'
            f'</w:tcMar>'
        )
        tcPr.append(tcMar)

    def set_cell_border(cell, **kwargs):
        tcPr = cell._tc.get_or_add_tcPr()
        tcBorders = parse_xml(f'<w:tcBorders {nsdecls("w")}/>')
        for edge in ('top', 'left', 'bottom', 'right'):
            edge_data = kwargs.get(edge)
            if edge_data:
                tag = f'<w:{edge} {nsdecls("w")} w:val="{edge_data.get("val", "single")}" w:sz="{edge_data.get("sz", 4)}" w:space="0" w:color="{edge_data.get("color", "auto")}"/>'
                tcBorders.append(parse_xml(tag))
            else:
                tag = f'<w:{edge} {nsdecls("w")} w:val="none"/>'
                tcBorders.append(parse_xml(tag))
        tcPr.append(tcBorders)

    # Document Section Helpers
    def add_section_header(tag_code, title_text):
        p_tag = doc.add_paragraph()
        p_tag.paragraph_format.space_before = Pt(24)
        p_tag.paragraph_format.space_after = Pt(2)
        r_tag = p_tag.add_run(f"[{tag_code.upper()}]")
        r_tag.font.name = "Calibri"
        r_tag.font.size = Pt(9.5)
        r_tag.font.bold = True
        r_tag.font.color.rgb = COLOR_CORAL

        p_title = doc.add_paragraph()
        p_title.paragraph_format.space_before = Pt(0)
        p_title.paragraph_format.space_after = Pt(10)
        p_title.paragraph_format.keep_with_next = True
        r_title = p_title.add_run(title_text)
        r_title.font.name = "Calibri"
        r_title.font.size = Pt(20)
        r_title.font.bold = True
        r_title.font.color.rgb = COLOR_INK

    def add_sub_header(text):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(14)
        p.paragraph_format.space_after = Pt(4)
        p.paragraph_format.keep_with_next = True
        r = p.add_run(text)
        r.font.name = "Calibri"
        r.font.size = Pt(13.5)
        r.font.bold = True
        r.font.color.rgb = COLOR_COBALT

    def add_field(label, value, bold_value=False):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(2)
        p.paragraph_format.space_after = Pt(3)
        r_lbl = p.add_run(f"{label}: ")
        r_lbl.font.name = "Calibri"
        r_lbl.font.size = Pt(10.5)
        r_lbl.font.bold = True
        r_lbl.font.color.rgb = COLOR_MUTED

        r_val = p.add_run(str(value))
        r_val.font.name = "Calibri"
        r_val.font.size = Pt(10.5)
        r_val.font.bold = bold_value
        r_val.font.color.rgb = COLOR_BODY

    def add_body(text, italic=False):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(2)
        p.paragraph_format.space_after = Pt(6)
        p.paragraph_format.line_spacing = 1.15
        r = p.add_run(text)
        r.font.name = "Calibri"
        r.font.size = Pt(10.5)
        r.font.italic = italic
        r.font.color.rgb = COLOR_BODY

    def add_bullet(prefix, text):
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.space_before = Pt(1)
        p.paragraph_format.space_after = Pt(2)
        p.paragraph_format.line_spacing = 1.15
        if prefix:
            r_pre = p.add_run(prefix + " ")
            r_pre.font.name = "Calibri"
            r_pre.font.size = Pt(10.5)
            r_pre.font.bold = True
            r_pre.font.color.rgb = COLOR_INK
        r_txt = p.add_run(text)
        r_txt.font.name = "Calibri"
        r_txt.font.size = Pt(10.5)
        r_txt.font.color.rgb = COLOR_BODY

    def add_callout(quote_text, attribution=""):
        table = doc.add_table(rows=1, cols=1)
        table.alignment = WD_TABLE_ALIGNMENT.CENTER
        cell = table.cell(0, 0)
        set_cell_background(cell, "F9F8F5")
        set_cell_padding(cell, top=160, bottom=160, left=240, right=200)
        set_cell_border(cell, left=dict(val="single", sz=24, color="FF5D3B"))
        
        cp = cell.paragraphs[0]
        cp.paragraph_format.space_before = Pt(2)
        cp.paragraph_format.space_after = Pt(4)
        cpr = cp.add_run(f'“{quote_text}”')
        cpr.font.name = "Georgia"
        cpr.font.size = Pt(11)
        cpr.font.italic = True
        cpr.font.color.rgb = COLOR_INK

        if attribution:
            ap = cell.add_paragraph()
            ap.paragraph_format.space_before = Pt(4)
            ap.paragraph_format.space_after = Pt(2)
            apr = ap.add_run(f"— {attribution}")
            apr.font.name = "Calibri"
            apr.font.size = Pt(9.5)
            apr.font.bold = True
            apr.font.color.rgb = COLOR_CORAL
        
        # Spacer
        sp = doc.add_paragraph()
        sp.paragraph_format.space_before = Pt(2)
        sp.paragraph_format.space_after = Pt(4)

    # ----------------------------------------------------
    # COVER / HEADER TITLE PAGE
    # ----------------------------------------------------
    p_pre = doc.add_paragraph()
    p_pre.paragraph_format.space_before = Pt(20)
    p_pre.paragraph_format.space_after = Pt(4)
    r_pre = p_pre.add_run("OFFICIAL WEBSITE SPECIFICATION & ARCHITECTURE")
    r_pre.font.name = "Calibri"
    r_pre.font.size = Pt(10)
    r_pre.font.bold = True
    r_pre.font.color.rgb = COLOR_CORAL

    p_doc_title = doc.add_paragraph()
    p_doc_title.paragraph_format.space_before = Pt(0)
    p_doc_title.paragraph_format.space_after = Pt(6)
    r_doc_title = p_doc_title.add_run("ADWEH — Complete Website Copy End-to-End")
    r_doc_title.font.name = "Calibri"
    r_doc_title.font.size = Pt(28)
    r_doc_title.font.bold = True
    r_doc_title.font.color.rgb = COLOR_INK

    p_doc_sub = doc.add_paragraph()
    p_doc_sub.paragraph_format.space_before = Pt(0)
    p_doc_sub.paragraph_format.space_after = Pt(18)
    r_doc_sub = p_doc_sub.add_run("The Complete Production-Ready Text, Multi-Industry Messaging, Value Propositions, Case Studies, Founder Biography, Service Capabilities, Articles Directory & Consultation Protocols.")
    r_doc_sub.font.name = "Calibri"
    r_doc_sub.font.size = Pt(12)
    r_doc_sub.font.color.rgb = COLOR_MUTED

    # Meta Overview Box
    meta_table = doc.add_table(rows=6, cols=2)
    meta_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta_table.autofit = False

    meta_data = [
        ("Brand Identity", "ADWEH — Enterprise Growth Partner"),
        ("Live Web Domain", "https://adweh.com/"),
        ("Founder & Executive Strategist", "Isaac Vivian"),
        ("Target Verticals", "Industry-Agnostic (Real Estate, Hospitality & Hotels, Healthcare, Manufacturing, Modern Commerce)"),
        ("Primary Growth Capabilities", "AIEO (AI Engine Optimization), GEO (Generative Engine Optimization), SEO (Search Engine Optimization), Cybersecurity-Focused Website Development"),
        ("Head Office Location", "2/17B Palyathan Street, Alandur, Chennai – 600 016, Tamil Nadu, India")
    ]

    for idx, (label, val) in enumerate(meta_data):
        row = meta_table.rows[idx]
        cell_lbl = row.cells[0]
        cell_val = row.cells[1]
        cell_lbl.width = Inches(2.2)
        cell_val.width = Inches(4.3)
        set_cell_padding(cell_lbl, 80, 80, 120, 120)
        set_cell_padding(cell_val, 80, 80, 120, 120)
        set_cell_background(cell_lbl, "F1EFEA")
        set_cell_background(cell_val, "FAF9F7")
        set_cell_border(cell_lbl, bottom=dict(val="single", sz=4, color="E5E2DA"))
        set_cell_border(cell_val, bottom=dict(val="single", sz=4, color="E5E2DA"))

        p_l = cell_lbl.paragraphs[0]
        p_l.paragraph_format.space_before = Pt(0)
        p_l.paragraph_format.space_after = Pt(0)
        rl = p_l.add_run(label)
        rl.font.name = "Calibri"
        rl.font.size = Pt(9.5)
        rl.font.bold = True
        rl.font.color.rgb = COLOR_INK

        p_v = cell_val.paragraphs[0]
        p_v.paragraph_format.space_before = Pt(0)
        p_v.paragraph_format.space_after = Pt(0)
        rv = p_v.add_run(val)
        rv.font.name = "Calibri"
        rv.font.size = Pt(9.5)
        rv.font.color.rgb = COLOR_BODY

    doc.add_page_break()

    # ----------------------------------------------------
    # SECTION 1: GLOBAL SEO, METADATA & POSITIONING
    # ----------------------------------------------------
    add_section_header("Section 01", "Global SEO, Meta Architecture & Core Positioning")
    
    add_sub_header("1.1 Meta Tags & Search Crawler Architecture")
    add_field("Primary Page Title Tag", "ADWEH — Enterprise Growth Partner", bold_value=True)
    add_field("Meta Description", "Specialized digital growth studio combining AIEO, GEO, SEO, and cybersecurity-focused website development to scale category leaders across real estate, hospitality, healthcare, manufacturing, and commerce.")
    add_field("Canonical URL", "https://adweh.com/")
    add_field("Open Graph Title", "ADWEH — Enterprise Growth Partner")
    add_field("Open Graph Description", "Specialized digital growth studio combining AIEO, GEO, SEO, and cybersecurity-focused website development to scale category leaders across real estate, hospitality, healthcare, manufacturing, and commerce.")
    add_field("Twitter Card Format", "summary_large_image")

    add_sub_header("1.2 Structured Schema (JSON-LD Organization)")
    add_body("ADWEH integrates enterprise JSON-LD schema metadata for search crawlers and AI search entities (ChatGPT, Perplexity, Gemini, Claude):")
    add_bullet("Organization Type:", "Enterprise Growth Advisory & Technology Consultancy")
    add_bullet("Legal / Trade Entity Name:", "ADWEH")
    add_bullet("Official Coordinates:", "Alandur, Chennai, Tamil Nadu, India")
    add_bullet("Core Services Indexing:", "AI Engine Optimization (AIEO), Generative Engine Optimization (GEO), Commercial SEO, Cybersecure Web Development")

    add_sub_header("1.3 High-Level Brand Positioning")
    add_callout(
        "ADWEH is not another digital marketing agency. We are a specialized enterprise growth partner engineering comprehensive customer discovery engines. We bridge the critical gap between passive online presence and high-ticket customer conversion across real estate, hospitality, healthcare, manufacturing, and commerce.",
        "ADWEH Strategic Positioning Statement"
    )

    # ----------------------------------------------------
    # SECTION 2: GLOBAL NAVIGATION
    # ----------------------------------------------------
    add_section_header("Section 02", "Global Header & Navigation Copy (Nav.tsx)")
    
    add_field("Top Brand Wordmark", "ADWEH [Growth Partner]")
    add_field("Visual Logo Badge", "Clean, refined typographic wordmark ADWEH (chevron-free)")
    add_field("Navigation Menu Items", "01 About (/ #work)  |  02 Challenge (/ #problems)  |  03 Services (/ #services)  |  04 Showcase (/ #showcase)  |  05 Why Us (/ #why)  |  06 Founder (/founder)  |  07 Insights (/blog)")
    add_field("Header Micro-Badge", "● ACCEPTING CLIENTS Q2/Q3 2026")
    add_field("Primary Navigation Action Button", "Schedule Consultation → (Links to /contact)")
    add_field("Mobile Flyout Tagline", "Enterprise Growth Partner — Engineering customer discovery engines across AIEO, GEO, SEO, and secure web development.")

    # ----------------------------------------------------
    # SECTION 3: HOME PAGE — HERO & LOGOS
    # ----------------------------------------------------
    add_section_header("Section 03", "Home Page — Hero Section & Social Proof (Hero.tsx & Logos.tsx)")

    add_sub_header("3.1 Hero Section Copy")
    add_field("Top Meta Badge", "[ EST · 2020 ] / A Digital Growth Studio  •  ● LIVE CLIENT ADVISORY")
    add_field("Primary Display Headline", "Make Your Business Inevitable.", bold_value=True)
    add_field("Hero Body Copy", "A specialized digital growth studio combining AIEO, GEO, SEO, and security-first website development to capture high-intent demand and scale category leaders across real estate, hospitality, healthcare, manufacturing, and modern commerce.")
    add_field("Primary CTA Button", "Schedule a growth consultation →")
    add_field("Secondary CTA Button", "Explore live platform ↓")

    add_sub_header("3.2 Verified Live Metrics Strip (Hero Counter)")
    add_bullet("130+", "Enterprises & High-Growth Brands Scaled")
    add_bullet("$400K+", "Measurable Client Revenue Generated")
    add_bullet("+428%", "Average Growth in Qualified Inbound Inquiries")
    add_bullet("-89%", "Reduction in Cost Per Qualified Acquisition")

    add_sub_header("3.3 Enterprise Partner Verification (Logos.tsx)")
    add_field("Section Header", "Industry leaders trust the growth engine.")
    add_field("Section Description", "From real estate developers and luxury hotels to specialized healthcare networks and precision manufacturing — we operate as an embedded growth team behind category leaders.")
    add_bullet("Featured Enterprise Partners:", "Apex Real Estate, Metro Hospitality, CVS Health, Vanguard Industrial, The Grand Palace Hotels, Johnson & Johnson, Aura Living Spaces, Precision Dynamics, Vitality Health Group")

    # ----------------------------------------------------
    # SECTION 4: THE STUDIO / ABOUT ADWEH
    # ----------------------------------------------------
    add_section_header("Section 04", "The Studio — About ADWEH (About.tsx)")

    add_field("Section Index & Label", "003 / About the studio")
    add_field("Section Headline", "Designs that captivate. Systems that convert.")
    add_field("Lead Paragraph", "ADWEH is a specialized growth partner delivering advanced AIEO, GEO, SEO, and cybersecurity-focused website development for ambitious enterprises — engineering high-performing, compliant customer acquisition engines across diverse industries.")

    add_sub_header("4.1 Bento Metric Grid")
    add_bullet("130+ Brands Scaled:", "Enterprises across real estate, hospitality, healthcare, manufacturing, and modern commerce.")
    add_bullet("100% Growth Focused:", "Exclusively dedicated to customer discovery, generative engine optimization, and enterprise acquisition infrastructure.")
    add_bullet("25+ In-House Specialists:", "Engineers, search strategists, cybersecurity analysts, and conversion architects with zero outsourcing.")
    add_bullet("12 Proprietary Systems:", "Pre-tested acquisition engines, entity schema graphs, and prompt-query mapping frameworks.")
    add_bullet("5+ Years Experience:", "Deep multi-industry marketing and search performance track record.")
    add_bullet("$400K+ Revenue Generated:", "Documented, auditable pipeline value delivered for clients.")
    add_bullet("Founder Bento Profile:", "Isaac Vivian — Founder, ADWEH. Engineering comprehensive client acquisition engines across real estate, hospitality, healthcare, manufacturing, and modern commerce. [Profile: View Bio →]")

    add_sub_header("4.2 Institutional Mission & Vision")
    add_field("Our Mission", "To empower leading organizations across diverse industries with integrated, compliant solutions across AIEO, GEO, SEO, and cybersecurity-focused website development — combining scalable systems and outcome-focused execution.")
    add_field("Our Vision", "To be the leading global partner for market-leading enterprises seeking category dominance through AI-powered discovery, generative search optimization, and secure digital platforms.")

    add_sub_header("4.3 Pulse.Live Platform Telemetry (Simulation Engine)")
    add_field("Dashboard Title", "Pulse.Live / Client Acquisition Engine v1.42")
    add_bullet("AIEO Search Citations:", "95% — OPTIMAL (ChatGPT, Claude & Perplexity)")
    add_bullet("GEO Knowledge Synthesis:", "92% — EXCELLENT (Google AI Overviews & Gemini)")
    add_bullet("SEO Organic Authority:", "88% — STABLE (Local Maps & Organic Keywords)")
    add_bullet("Secure Web Infrastructure:", "97% — MAXIMUM (Enterprise-Hardened Endpoints)")
    add_bullet("Live 30-Day Metrics:", "Leads: +238  |  CPL: -89%  |  ROAS: 6.4x  |  Leads Growth (30D): ▲ +428%")

    # ----------------------------------------------------
    # SECTION 5: THE CHALLENGE / GROWTH BOTTLENECKS
    # ----------------------------------------------------
    add_section_header("Section 05", "The Challenge — Bottlenecks We Eliminate (Problems.tsx)")

    add_field("Section Index & Label", "004 / The challenge")
    add_field("Headline", "The growth bottlenecks we eliminate every day.")
    add_field("Introductory Thesis", "Most growing enterprises struggle with the same three critical barriers. We've identified them, systematized the solution, and solved them for 130+ market leaders.")

    add_sub_header("Problem 01: Invisibility Across AI, Generative Engines & Search")
    add_bullet("Bottleneck 1.1:", "Zero citation authority across ChatGPT, Claude, and Perplexity (AIEO)")
    add_bullet("Bottleneck 1.2:", "Omission from Google AI Overviews and Gemini generative summaries (GEO)")
    add_bullet("Bottleneck 1.3:", "Poor local SEO and low visibility in local Google Maps search")
    add_bullet("Bottleneck 1.4:", "Lack of structured enterprise schemas and knowledge graph authority")
    add_bullet("Bottleneck 1.5:", "Low visibility for high-intent, prompt-driven customer and buyer inquiries")

    add_sub_header("Problem 02: Insecure or Outdated Website Infrastructure")
    add_bullet("Bottleneck 2.1:", "Websites built without cybersecurity-focused development practices")
    add_bullet("Bottleneck 2.2:", "Untested platforms with security vulnerabilities & unhardened endpoints")
    add_bullet("Bottleneck 2.3:", "Websites not optimized for search engines, AIEO, or generative discovery")
    add_bullet("Bottleneck 2.4:", "Poor Core Web Vitals, slow load speeds, and broken mobile conversion")
    add_bullet("Bottleneck 2.5:", "Unsecured forms risking customer data, privacy leaks, and regulatory compliance")

    add_sub_header("Problem 03: Fragmented Discovery & Zero AI-Era Readiness")
    add_bullet("Bottleneck 3.1:", "No strategic roadmap for the shift from blue links to AI answers")
    add_bullet("Bottleneck 3.2:", "Disjointed vendors with no unified search or generative tracking")
    add_bullet("Bottleneck 3.3:", "Inconsistent brand citations across digital registries and ecosystem directories")
    add_bullet("Bottleneck 3.4:", "Vulnerable digital assets hindering brand reputation and executive trust")
    add_bullet("Bottleneck 3.5:", "Falling behind competitors who optimize for AI and generative engines")

    add_sub_header("Resolution Verification Strip")
    add_field("Outcome Banner", "✓ Solved for 130+ enterprise brands — From mid-market disruptors to multinational leaders across industries.")
    add_field("Call to Action", "Explore the solutions → (Links to #services)")

    # ----------------------------------------------------
    # SECTION 6: THE OPPORTUNITY & 4 STRATEGIC PILLARS
    # ----------------------------------------------------
    add_section_header("Section 06", "The Opportunity & Strategic Pillars (Approach.tsx)")

    add_field("Section Index & Label", "005 / The opportunity")
    add_field("Headline", "An industry rapidly going digital.")
    add_field("Macro Industry Thesis", "Every major sector is undergoing rapid digital transformation. From real estate and luxury hospitality to healthcare and industrial manufacturing, high-value clients demand seamless, modern digital experiences. Success depends on trust, AI-era discovery, and full-funnel ROI delivery.")

    add_sub_header("Pillar 01: Amplify Your Brand")
    add_bullet("Core Focus:", "Build authority and visibility across the channels buyers, clients, and decision-makers use to discover solutions.")
    add_bullet("Badge & Metric:", "AIEO & Search Reach  •  Leads: +428%  •  Reach Extension")

    add_sub_header("Pillar 02: Engage Your Audience")
    add_bullet("Core Focus:", "Conversations and conversion flows that turn passive interest into qualified business inquiries.")
    add_bullet("Badge & Metric:", "Secure Lead Capture  •  Conversions: 4.8x  •  Audience Activity")

    add_sub_header("Pillar 03: Educate & Empower")
    add_bullet("Core Focus:", "Trust-building, regulatory-compliant content that informs decision-makers and accelerates conversion cycles.")
    add_bullet("Badge & Metric:", "GEO Authority  •  Referrals: +160%  •  Trust Score")

    add_sub_header("Pillar 04: Deliver Tangible ROI")
    add_bullet("Core Focus:", "Performance measured in qualified pipeline, enterprise revenue, and customer lifetime value — not vanity metrics.")
    add_bullet("Badge & Metric:", "Performance Measurement  •  ROI Yield: 12.4x  •  Net Performance")

    # ----------------------------------------------------
    # SECTION 7: THE 4 CORE SOLUTIONS / SERVICES
    # ----------------------------------------------------
    add_section_header("Section 07", "The System — Core Growth Solutions (Solutions.tsx)")

    add_field("Section Index & Label", "006 / The system")
    add_field("Section Headline", "One full-stack system for enterprise growth.")
    add_field("Section Subtitle", "Four specialized capabilities engineered to position market leaders at the forefront of search, artificial intelligence, and digital security.")

    # Service 01: AIEO
    add_sub_header("Service 01: AIEO (Artificial Intelligence Engine Optimization)")
    add_field("Tag & Category", "01 · AI Search")
    add_field("Service Description", "Artificial Intelligence Engine Optimization — maximizing direct citations, recommendations, and visibility across leading AI models like ChatGPT, Claude, and Perplexity.")
    add_field("Ideal For", "Enterprises wanting to capture high-value clients searching through AI assistants.")
    add_bullet("Module 1 — AI Answer Engine Citations:", "Optimized inclusion across ChatGPT, Claude, and Perplexity; Knowledge-base authority and entity indexing.")
    add_bullet("Module 2 — Conversational Query Targeting:", "Targeting prompt-driven buyer and client inquiries; Semantic authority mapping across industry domains.")
    add_bullet("Module 3 — Brand Sentiment & Mention Audits:", "Continuous tracking of AI model response sentiment; Disinformation mitigation and reputation anchoring.")

    # Service 02: GEO
    add_sub_header("Service 02: GEO (Generative Engine Optimization) [★ Highlighted]")
    add_field("Tag & Category", "02 · Generative Discovery")
    add_field("Service Description", "Generative Engine Optimization — structuring enterprise content, entity schemas, and authoritative citations to improve visibility in Google AI Overviews, Gemini, and Microsoft Copilot summaries.")
    add_field("Ideal For", "Leading brands aiming to capture top positions in generative AI overview snippets.")
    add_bullet("Module 1 — Google AI Overviews Optimization:", "Optimization for inclusion in Google AI snapshot answers; Passage-level semantic structuring & fact indexing.")
    add_bullet("Module 2 — Multi-Model Citation Architecture:", "High-trust external citations and entity attribution graphs; Schema.org Organization, Product, and Service structured data.")
    add_bullet("Module 3 — Generative Query Modeling:", "Targeting conversational, synthesized decision-maker prompts; Competitive AI share-of-voice benchmarking.")

    # Service 03: SEO
    add_sub_header("Service 03: SEO (Search Engine Optimization)")
    add_field("Tag & Category", "03 · Organic Search")
    add_field("Service Description", "Search Engine Optimization — high-intent search visibility, technical architecture, and localized search optimization to capture qualified customer demand around the clock.")
    add_field("Ideal For", "Businesses and regional powerhouses building lasting organic search presence and client pipeline.")
    add_bullet("Module 1 — High-Intent Keyword Optimization:", "Rankings for high-value commercial and service-specific terms; Customer-focused topical content hubs and conversion copy.")
    add_bullet("Module 2 — Local SEO & Google Maps Optimization:", "Google Business Profile optimization and review management; Local citation building across top-tier business directories.")
    add_bullet("Module 3 — Technical SEO & Site Architecture:", "Core Web Vitals acceleration and mobile performance; Crawl budget optimization and clean semantic hierarchy.")

    # Service 04: Website Development
    add_sub_header("Service 04: Cybersecurity-Focused Website Development")
    add_field("Tag & Category", "04 · Engineering")
    add_field("Service Description", "High-performance digital infrastructure engineered with cybersecurity rigor, vulnerability testing, and seamless optimization for search and generative engines.")
    add_field("Ideal For", "Enterprises, hotels, developers, and brands requiring secure, high-converting web platforms.")
    add_bullet("Module 1 — Cybersecurity-Focused Development:", "Build websites using security-conscious development practices; Data encryption in transit, strict security headers & SOC-2/GDPR/HIPAA compliance.")
    add_bullet("Module 2 — Secure Website Building & Testing:", "Develop and test websites to identify vulnerabilities and improve security; Security vulnerability testing and secure form endpoint hardening.")
    add_bullet("Module 3 — SEO, AIEO & GEO Optimization:", "Build websites optimized for search engines, AI-powered search, and generative engine discovery; Lightning-fast Core Web Vitals with semantic HTML architecture.")

    add_field("Compliance Standard Notice", "✦ Security & regulatory compliance by design · Custom multi-industry enterprise deployments ✦")

    # ----------------------------------------------------
    # SECTION 8: SYSTEM SHOWCASE & PIPELINE VISUALIZATION
    # ----------------------------------------------------
    add_section_header("Section 08", "System Showcase — Pipeline Visualization (Showcase.tsx)")

    add_field("Section Index & Label", "007 / System Showcase")
    add_field("Headline", "Visualizing your client acquisition pipeline.")
    add_field("System Architecture", "A secure, enterprise-grade system engineered to track lead velocity, customer lifetime value, and marketing ROI in real-time.")
    add_field("Documented Revenue Generated", "$400K+ Verified Client Growth")

    add_sub_header("Interactive Pipeline Scenes")
    add_bullet("Scene 0 — Initializing Sync:", "Connecting enterprise CRM, Google Business profile, AI search entity graphs, and intake web endpoints.")
    add_bullet("Scene 1 — Leads Scaled +428%:", "Live visualization of organic search, local map discovery, and ChatGPT prompt-driven inquiries entering the company.")
    add_bullet("Scene 2 — Syncing Conversion Funnel:", "WhatsApp API automations accelerating client response time to under 5 minutes.")
    add_bullet("Scene 3 — Loading Partner Feedback & LTV:", "Real-time discovery-to-contract rates, sales pipeline velocity, and customer retention analytics.")

    # ----------------------------------------------------
    # SECTION 9: WHY THE STUDIO / 4 DIFFERENTIATORS
    # ----------------------------------------------------
    add_section_header("Section 09", "Why The Studio — Differentiators (WhyUs.tsx)")

    add_field("Section Index & Label", "008 / Why the studio")
    add_field("Headline", "Not another agency. A specialist partner.")
    add_field("Foundational Value Proposition", "We partner with ambitious organizations — bringing deep technical expertise, advanced AI and search systems, and proven execution that delivers measurable results.")

    add_sub_header("Pillar 01: 100% Growth Focused")
    add_bullet("Focus 1:", "Specialized exclusively in AIEO, GEO, SEO, and website development")
    add_bullet("Focus 2:", "Deep insight into high-intent search behavior and digital entity authority")
    add_bullet("Focus 3:", "Pioneering AI assistant visibility and generative search discovery")

    add_sub_header("Pillar 02: Proven Track Record")
    add_bullet("Track Record 1:", "130+ enterprises and high-growth brands scaled across India")
    add_bullet("Track Record 2:", "$400K+ in measurable revenue generated for clients")
    add_bullet("Track Record 3:", "Average 428% growth in qualified organic inbound inquiries")
    add_bullet("Track Record 4:", "Strengthening Google Maps presence and AI engine citations")

    add_sub_header("Pillar 03: Security-Conscious Web & Compliance Rigor")
    add_bullet("Security 1:", "Cybersecurity-focused development practices across every build")
    add_bullet("Security 2:", "Secure website building, automated testing & vulnerability remediation")
    add_bullet("Security 3:", "Security-conscious forms, SSL/TLS encryption, and enterprise-compliant data standards")

    add_sub_header("Pillar 04: Next-Gen Search & Web Stack")
    add_bullet("Web Stack 1:", "Websites engineered from the ground up for SEO, AIEO & GEO")
    add_bullet("Web Stack 2:", "Optimization for multi-model visibility across ChatGPT, Claude & Google Overviews")
    add_bullet("Web Stack 3:", "In-house technical engineering with zero outsourcing")

    # ----------------------------------------------------
    # SECTION 10: TESTIMONIALS & SOCIAL PROOF
    # ----------------------------------------------------
    add_section_header("Section 10", "The Receipts — Client Testimonials (Testimonials.tsx)")

    add_field("Section Index & Label", "009 / The receipts")
    add_field("Headline", "Words from industry leaders we serve.")
    add_field("Introductory Summary", "Real outcomes across real businesses. Our partnerships average 4.98 / 5 stars across 130+ verified enterprise and multi-industry clients.")

    add_sub_header("Testimonial 01 — Marcus Vance (Real Estate)")
    add_field("Reviewer Role & Company", "Marcus Vance — Managing Director · Apex Realty Group")
    add_field("Performance Tag", "238 inquiries / mo  •  Growth: +428%  •  ★★★★★")
    add_callout(
        "ADWEH completely transformed our inbound client acquisition. We went from 45 qualified property inquiries per month to 238 per month in just 6 months. Our sales velocity has been incredible.",
        "Marcus Vance, Managing Director · Apex Realty Group"
    )

    add_sub_header("Testimonial 02 — Elena Rostova (Hospitality & Hotels)")
    add_field("Reviewer Role & Company", "Elena Rostova — VP of Digital · Grand Horizon Hotels & Resorts")
    add_field("Performance Tag", "Direct Bookings  •  Growth: 4.8x  •  ★★★★★")
    add_callout(
        "Finally, a digital growth partner that understands high-value guest acquisition and compliance. They handle all our direct booking funnels while delivering exceptional ROI.",
        "Elena Rostova, VP of Digital · Grand Horizon Hotels & Resorts"
    )

    add_sub_header("Testimonial 03 — David Sterling (Healthcare & Enterprise)")
    add_field("Reviewer Role & Company", "David Sterling — COO · Rivera Group & Healthcare Partners")
    add_field("Performance Tag", "Market Rank: #1  •  ★★★★★")
    add_callout(
        "The team at ADWEH is professional, deeply technical, and results-driven. They've established our multi-location brand as the #1 authority in organic search and AI answers.",
        "David Sterling, COO · Rivera Group & Healthcare Partners"
    )

    add_sub_header("Verified Client Rating Strip")
    add_bullet("130+", "Brands Scaled Across Industries")
    add_bullet("4.98★", "Average Client Rating")
    add_bullet("$400K+", "Client Revenue Generated")
    add_bullet("24h", "Strategic Response SLA")

    # ----------------------------------------------------
    # SECTION 11: DEDICATED FOUNDER PAGE
    # ----------------------------------------------------
    add_section_header("Section 11", "Dedicated Founder Page — Isaac Vivian (Founder.tsx)")

    add_field("Page Route", "https://adweh.com/founder")
    add_field("Executive Title", "Isaac Vivian — Founder, ADWEH", bold_value=True)
    add_field("Professional Credential Tag", "Founder @adweh – Growth Partner for High-Value Enterprises | AIEO, GEO, SEO & Secure Website Development")
    add_field("Verified Location", "Chennai, Tamil Nadu, India")
    add_field("Executive Monospace Tags", "AIEO & GEO Systems  •  Local SEO Systems  •  Cybersecure Web Dev")
    add_field("Direct Professional Profiles", "LinkedIn: https://www.linkedin.com/in/isaac-vivian/  |  Instagram: @adweh")

    add_sub_header("11.1 Founder Story & Philosophy")
    add_body("Isaac Vivian is the Founder of ADWEH, a specialized growth advisory and technology partner for ambitious enterprises across real estate, hospitality, healthcare, manufacturing, and modern commerce. Under his leadership, ADWEH builds comprehensive digital discovery infrastructures that integrate AIEO, GEO, SEO, and cybersecurity-focused website development to deliver scalable, predictable customer acquisition.")
    add_body("With an entrepreneurial career shaped by a deep focus on conversion design, digital systems, and buyer psychology, Isaac recognized early that lead volume is irrelevant without robust operational follow-through. His business philosophy centers on execution endurance, building scalable systems that allow market leaders to convert digital visibility into measurable revenue and high-value contracts.")
    add_body("Beyond client acquisition systems, Isaac is actively engaged in researching the convergence of artificial intelligence, automated enterprise workflows, and digital infrastructure—areas influenced by his ongoing mentorship with industry leaders, including Mr. Lakshmi Narayanan (Emeritus Vice Chairman of Cognizant).")

    add_callout(
        "Business is less about intelligence and more about endurance. Most people never stay in the game long enough to discover what they’re truly capable of.",
        "Isaac Vivian, Founder"
    )

    add_sub_header("11.2 The Systems View")
    add_body("Many high-value enterprises across real estate, hospitality, healthcare, and manufacturing deploy significant budgets yet struggle to maintain consistent conversion velocity. The bottleneck is rarely the product or service expertise; it is the acquisition infrastructure.")
    add_body("ADWEH resolves this by deploying end-to-end customer acquisition engines designed to streamline every phase of the buyer lifecycle:")
    add_bullet("01 AIEO (AI Engine Optimization):", "Optimizing direct brand citations and entity recommendations across ChatGPT, Claude, and Perplexity.")
    add_bullet("02 GEO (Generative Engine Optimization):", "Structuring enterprise content and schema graphs for inclusion in Google AI Overviews and Gemini generative summaries.")
    add_bullet("03 SEO (Search Engine Optimization):", "Targeting high-intent organic search and regional maps visibility with commercial keyword optimization.")
    add_bullet("04 Cybersecurity Web Development:", "Building and testing secure websites optimized for search engines, AI-powered search, and generative discovery.")

    add_sub_header("11.3 Professional Journey & Academic Timeline")
    add_bullet("ADWEH — Founder (May 2023 – Present):", "Scaling customer acquisition across real estate, hospitality, healthcare, manufacturing, and commerce through integrated AIEO, GEO, SEO, and cybersecurity-focused website development.")
    add_bullet("Golden Gate University — MBA, Business Analytics & Finance (Mar 2025 – Jun 2026):", "Comprehensive business intelligence focus, combining financial modeling, corporate valuation, and analytical decision structures to solve market scaling challenges.")
    add_bullet("School of Excellence in Law, Dr. Ambedkar Law University — BBA LLB (Hons.) (Apr 2017 – May 2022):", "Acquired strong foundation in commercial negotiations, corporate regulations, compliance structures, and legal frameworks vital for building robust enterprises.")

    add_sub_header("11.4 Key Project Milestones")
    founder_milestones = [
        "Engineered high-converting search, AI, and social acquisition engines, consistently driving 50+ high-ticket enterprise client acquisitions monthly across real estate, hospitality, and healthcare.",
        "Designed and deployed custom API integrations and CRM workflow automations, accelerating inbound lead response times to under 5 minutes.",
        "Architected comprehensive customer-lifecycle tracking systems, mapping key pipeline conversions and optimizing enterprise sales velocity.",
        "Efficiently directed and optimized high-yield monthly digital media and organic search infrastructure across search, generative AI, and professional networks.",
        "Developed targeted outbound marketing and account-based strategies, maintaining a consistent 30%+ open rate and 8%+ engagement rate.",
        "Audited and optimized sales operations and intake workflows, elevating discovery-to-contract conversion rates by 40% through structured execution.",
        "Delivered strategic growth consulting and operational audits for 130+ leading brands across real estate, hospitality, healthcare, and manufacturing nationwide."
    ]
    for idx, m in enumerate(founder_milestones, 1):
        add_bullet(f"Milestone {idx:02d}:", m)

    # ----------------------------------------------------
    # SECTION 12: DEDICATED INSIGHTS & GUIDES DIRECTORY
    # ----------------------------------------------------
    add_section_header("Section 12", "Dedicated Insights & Guides Directory (BlogPage.tsx)")

    add_field("Page Route", "https://adweh.com/blog")
    add_field("Header Breadcrumb", "009 / Insights & Guides")
    add_field("Headline", "Insights & Guides for Enterprise Growth")
    add_field("Subheadline", "Actionable playbooks, strategic frameworks, and technical teardowns on AIEO, GEO, SEO, and cybersecurity-focused website development for ambitious leaders across real estate, hospitality, healthcare, manufacturing, and commerce.")

    add_sub_header("12.1 The 4 Growth Channel Pillars")
    add_bullet("AIEO (AI Engine Optimization):", "Earn direct brand citations and entity recommendations across ChatGPT, Claude, and Perplexity when prospective clients ask AI assistants for recommendations. [AI CITATIONS]")
    add_bullet("GEO (Generative Engine Optimization):", "Structure authoritative citations, enterprise facts, and knowledge graphs for featured synthesis inside Google AI Overviews and Gemini search snapshots. [GENERATIVE SEARCH]")
    add_bullet("SEO (Search Engine Optimization):", "Optimize Google Maps presence and high-intent commercial search keywords to capture qualified customer inquiries. [ORGANIC POWER]")
    add_bullet("Website Development:", "Cybersecurity-focused development, secure website building and vulnerability testing, fully optimized for search engines, AIEO, and generative discovery. [SOC-2 & GDPR Ready]")

    add_sub_header("12.2 Directory of 12 Published Enterprise Growth Guides")
    articles_data = [
        ("AIEO", "AIEO for Modern Business: Getting Recommended by ChatGPT & Perplexity",
         "Learn how market-leading enterprises optimize entities, knowledge graphs, and brand citations to earn direct recommendations in conversational AI models.",
         "https://adweh.com/aieo-healthcare-chatgpt-perplexity/"),
        ("GEO", "Generative Engine Optimization: Optimizing for Google AI Overviews",
         "The complete guide to GEO for enterprises — structuring factual answers, passage schemas, and entity attribution for Gemini snapshots.",
         "https://adweh.com/geo-google-ai-overviews-enterprises/"),
        ("SEO", "Local SEO & Multi-Location Search: Dominating Google Maps Visibility",
         "How real estate developers, hotels, and multi-location businesses optimize Google Maps local search to generate consistent organic inbound inquiries.",
         "https://adweh.com/local-seo-multi-location-enterprises/"),
        ("Website Development", "Cybersecurity-Focused Development for High-Value Web Platforms",
         "Building resilient enterprise websites using security-conscious development practices, strict headers, data encryption, and compliance standards.",
         "https://adweh.com/cybersecurity-focused-website-development-enterprises/"),
        ("Website Development", "Secure Website Building and Vulnerability Testing",
         "How to develop and test enterprise websites to identify vulnerabilities, harden lead intake endpoints, and ensure airtight customer data security.",
         "https://adweh.com/secure-website-building-testing-vulnerabilities/"),
        ("Website Development", "Building Websites Optimized for SEO, AIEO, and GEO",
         "Engineering high-performance digital infrastructure from the ground up for search engines, AI-powered search, and generative engine discovery.",
         "https://adweh.com/websites-optimized-seo-aieo-geo/"),
        ("AIEO", "Conversational Query Targeting in Enterprise AI Engines",
         "How high-intent buyers search using natural language prompts and how companies optimize semantic authority to capture conversational intent.",
         "https://adweh.com/conversational-query-targeting-aieo/"),
        ("GEO", "Enterprise Knowledge Graphs & Citation Authority for GEO",
         "How to build and connect authoritative ecosystem citations and schema structures that generative search engines trust.",
         "https://adweh.com/enterprise-knowledge-graphs-citations-geo/"),
        ("SEO", "High-Intent Keyword Architecture for Commercial Enterprises",
         "Targeting high-converting, commercial search terms that drive qualified inquiries across real estate, hospitality, healthcare, and manufacturing.",
         "https://adweh.com/high-intent-keyword-architecture-seo/"),
        ("SEO", "Online Reputation & Review Signals for Regional Search Dominance",
         "How to build and protect a formidable review profile to maximize organic click-through, buyer confidence, and local search authority.",
         "https://adweh.com/online-reputation-management-enterprises-india/"),
        ("AIEO", "Brand Sentiment & Entity Anchoring Across AI Assistants",
         "Auditing and reinforcing positive company recommendations across major conversational AI models and LLM engines.",
         "https://adweh.com/brand-sentiment-entity-anchoring-aieo/"),
        ("GEO", "Search Engines vs Generative Engines: The Future of Customer Discovery",
         "A complete analysis of how generative AI summaries are reshaping buyer decision-making and cross-industry brand discovery.",
         "https://adweh.com/search-engines-vs-generative-engines-enterprises/")
    ]

    for idx, (cat, title, exc, url) in enumerate(articles_data, 1):
        add_bullet(f"Guide {idx:02d} [{cat}]:", title)
        add_body(f"Summary: {exc}")
        add_body(f"Reference Canonical: {url}", italic=True)

    # ----------------------------------------------------
    # SECTION 13: DEDICATED CONSULTATION & CONTACT PAGE
    # ----------------------------------------------------
    add_section_header("Section 13", "Dedicated Consultation & Contact Page (ContactPage.tsx)")

    add_field("Page Route", "https://adweh.com/contact")
    add_field("Header Breadcrumb", "010 / Contact ADWEH")
    add_field("Headline", "Let's elevate your enterprise growth.", bold_value=True)
    add_field("Subheadline", "Connect with ADWEH to deploy specialized growth infrastructure across AIEO, GEO, SEO, and cybersecurity-focused website development for leading enterprises.")

    add_sub_header("13.1 Direct Contact Bento Directory")
    add_bullet("Head Office:", "2/17B Palyathan Street, Alandur, Chennai – 600 016, Tamil Nadu, India")
    add_bullet("Direct Email:", "admin@adweh.com (Response SLA: < 24 Hours)")
    add_bullet("Direct Phone / WhatsApp:", "+91 86670 31931 (Hours: Monday – Friday, 07:00 AM – 09:00 PM IST)")
    add_bullet("Enterprise Specialization:", "100% Growth Focused  •  130+ Brands Scaled Nationwide")

    add_sub_header("13.2 Strategic Consultation Commitments")
    add_bullet("Free Strategy Call:", "30-min deep dive into current search and AI visibility")
    add_bullet("Custom Growth Audit:", "Full assessment across AIEO, GEO, SEO & web security")
    add_bullet("Transparent Engagement:", "Clear deliverables with zero lock-in commitments")

    add_sub_header("13.3 Interactive Consultation Form Fields & Protocols")
    add_field("Field 1 — Executive / Representative Name", "Required Text Input (Placeholder: 'Sarah Johnson')")
    add_field("Field 2 — Work Email Address", "Required Email Input (Placeholder: 'sarah@company.com')")
    add_field("Field 3 — Company / Brand Name", "Required Text Input (Placeholder: 'Apex Real Estate / Grand Hotel')")
    add_field("Field 4 — Primary Growth Priority", "Selection Pills: AIEO (AI Search)  |  GEO (Generative Engine)  |  SEO (Google Maps/Search)  |  Website Dev (Secure Infrastructure)")
    add_field("Field 5 — Primary Growth Goal", "Optional Text Area (Placeholder: 'Current client volume, AI/search presence, security or website goals...')")
    add_field("Submit Action Button", "Schedule Strategy Session →")
    add_field("Submission Confirmation State", "Request received. Thank you there — our growth strategist will review your business information and respond within 24 hours.")

    # ----------------------------------------------------
    # SECTION 14: GLOBAL FOOTER & LEGAL ARCHITECTURE
    # ----------------------------------------------------
    add_section_header("Section 14", "Global Footer, Operating Hours & Legal Architecture (Footer.tsx)")

    add_field("Footer Brand Header", "ADWEH — [Studio · 010]")
    add_field("Visual Logo Badge", "Clean, refined typographic wordmark ADWEH")
    add_field("Mission Statement", "Enterprise digital growth partner. We engineer AIEO, GEO, SEO, and cybersecurity-focused web infrastructure that scales companies across real estate, hospitality, healthcare, manufacturing, and commerce into category leaders.")
    add_field("Social Presence", "LinkedIn: https://www.linkedin.com/company/adweh/  |  Instagram: https://www.instagram.com/adweh/  |  X / Twitter: @adweh  |  YouTube: ADWEH")
    
    add_sub_header("14.1 Footer Sitemap Directory")
    add_bullet("Studio Links:", "About (/ #work), Why Us (/ #why), Results (/ #results), Blog (/blog), Founder (/founder), Mainframe (/mainframe), Contact (/contact)")
    add_bullet("Services Links:", "AIEO (/ #services), GEO (/ #services), SEO (/ #services), Website Development (/ #services)")
    add_bullet("Newsletter Subscription:", "Monthly intelligence on AIEO, GEO, SEO, enterprise web security & customer acquisition. [Input: you@company.com  •  Button: Subscribe]")

    add_sub_header("14.2 Physical Coordinates & Working Hours")
    add_bullet("Head Office:", "2/17B Palyathan Street, Alandur, Chennai – 600 016, Tamil Nadu, India")
    add_bullet("Working Hours:", "Monday – Friday: 07:00 AM – 09:00 PM IST (Online Now)")
    add_bullet("Direct Hotline:", "+91 86670 31931")

    add_sub_header("14.3 Legal Notice, Copyright & Compliance Disclaimers")
    add_field("Copyright Statement", "© 2026 ADWEH · All rights reserved.")
    add_field("Legal Anchors", "Privacy Policy  |  Terms of Service  |  Enterprise Security Standards  |  Back to top ↑")
    add_callout(
        "ADWEH operates as a specialized growth technology advisory and engineering firm. Systems deployed comply with applicable enterprise data privacy standards, GDPR, SOC-2, and encrypted transport protocols. No client customer records are ever stored on unhardened commercial endpoints.",
        "ADWEH Regulatory & Compliance Notice"
    )

    # Save to workspace root
    output_path = r"c:\Users\SUDARSANA NARAYANAN\.gemini\antigravity\scratch\Adweh\ADWEH_Complete_Website_Copy_End_to_End.docx"
    doc.save(output_path)
    print(f"Document successfully created at: {output_path}")

    # Also copy to artifact directory if available
    artifact_dir = r"C:\Users\SUDARSANA NARAYANAN\.gemini\antigravity-ide\brain\c7a1da04-c211-44fe-b0d4-99ef1f7de350"
    if os.path.exists(artifact_dir):
        artifact_path = os.path.join(artifact_dir, "ADWEH_Complete_Website_Copy_End_to_End.docx")
        doc.save(artifact_path)
        print(f"Artifact document successfully updated at: {artifact_path}")

if __name__ == "__main__":
    create_document()
