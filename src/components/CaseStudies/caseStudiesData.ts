// ============================================================
// SETTINGS: verified client case studies data for ADWEH
// ============================================================
export interface DemoSearch {
  q: string;
  src: "Google" | "ChatGPT" | "Gemini";
  rank: string;
  name: string;
  where: string;
}

export interface ProofItem {
  n: string;
  l: string;
}

export interface BeforeAfter {
  label: string;
  big: string;
  text: string;
}

export interface KeywordTable {
  caption: string;
  cols: [string, string, string, string];
  rows: [string, string, string, string][];
}

export interface Shot {
  src: string;
  title: string;
  query: string;
}

export interface CasePoint {
  bold: string;
  text: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  meta: string;
  intro: string;
  points: CasePoint[];
  before?: BeforeAfter;
  after?: BeforeAfter;
  extra?: string;
  table?: KeywordTable;
  shots: Shot[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export const SETTINGS = {
  brand: "ADWEH",
  // Confirmed ADWEH phone / WhatsApp: +91 86670 31931
  whatsappNumber: "918667031931",
  whatsappMessage:
    "Hi ADWEH, I'd like a free visibility check for my business/clinic. Name: ",
  // Folder inside /public where the screenshots live
  imageBase: "/case-studies",
} as const;

export const whatsappLink = (): string =>
  `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(
    SETTINGS.whatsappMessage
  )}`;

const img = (file: string): string => `${SETTINGS.imageBase}/${file}.jpg`;

// Searches shown in the animated search box at the top
export const DEMO_SEARCHES: DemoSearch[] = [
  { q: "best skin clinic in anna nagar", src: "ChatGPT", rank: "1.", name: "Soul Skin Clinic", where: "Anna Nagar, Chennai" },
  { q: "aesthetic clinic in ambattur", src: "Gemini", rank: "1.", name: "Virtue Aesthetic Skin Clinic", where: "Ambattur, Chennai" },
  { q: "medifacial in Tambaram", src: "ChatGPT", rank: "1.", name: "Dr. Swathi’s Skin & Cosmetic Clinic", where: "Tambaram, Chennai" },
  { q: "best dermatologist in tiruvannamalai", src: "Google", rank: "1.", name: "Subam Skin Clinic", where: "Tiruvannamalai" },
  { q: "best fertility clinic in chidambaram", src: "ChatGPT", rank: "2.", name: "Mithran Fertility Center", where: "Chidambaram" },
];

export const PROOF: ProofItem[] = [
  { n: "5", l: "clinics across Chennai, Tiruvannamalai and Chidambaram" },
  { n: "341", l: "keywords moved into the Google top 10" },
  { n: "34", l: "screenshots of our clients in the top 3 on Google, ChatGPT and Gemini" },
  { n: "0 to 154", l: "top-10 keywords for one clinic in four months" },
];

// Text wrapped in == == is highlighted on the page.
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "soul-skin",
    name: "Soul Skin Clinic",
    meta: "Dermatology, Anna Nagar, Chennai. 4.9 rating from 476 Google reviews",
    intro:
      "Anna Nagar is one of the most crowded skin care markets in Chennai, with national chains like Oliva a few streets away. Soul Skin Clinic now ranks first in its neighbourhood, holds a top-three spot for all of Chennai, and is the first clinic ChatGPT recommends.",
    points: [
      { bold: "#1 on Google", text: "Ahead of national chains across Anna Nagar" },
      { bold: "Top 3 in Chennai", text: "High-volume city-wide search ranking" },
      { bold: "#1 on ChatGPT", text: "First clinic recommended by AI assistants" },
    ],
    before: { label: "On 1 May", big: "0", text: "keywords in the Google top 3, and 64 in the top 10" },
    after: { label: "By 1 October", big: "113", text: "keywords in the Google top 3, 135 in the top 10 and 45 at position 1" },
    extra:
      "And it shows up where it counts. In Google Search Console, clicks rose from 848 to 1,230 compared with the same three months a year earlier, ==about 45% more people landing on the clinic’s website==. The average Google position improved from 15.6 to 6.6, which is the difference between page two and page one.",
    table: {
      caption: "A few of the keywords that moved",
      cols: ["What patients search", "1 May", "1 Oct", "Change"],
      rows: [
        ["Skin Clinic in Anna Nagar", "16", "3", "up 13 places"],
        ["exosome hair treatment Anna Nagar", "19", "1", "up 18 places"],
        ["keloid scar treatment Anna Nagar", "19", "2", "up 17 places"],
        ["lip pigmentation treatment Anna Nagar", "16", "1", "up 15 places"],
        ["hyperhidrosis treatment in Anna Nagar", "12", "1", "up 11 places"],
        ["best hair transplant doctor Anna Nagar", "Not ranking", "9", "new on page 1"],
      ],
    },
    shots: [
      { src: img("soul-google-skin-clinic-anna-nagar"), title: "#1 on Google", query: "“best skin clinic anna nagar”, ahead of national chains" },
      { src: img("soul-google-dermatologist-anna-nagar"), title: "#1 on Google", query: "“best dermatologist anna nagar”" },
      { src: img("soul-google-skin-clinic-chennai"), title: "Top 3 for all of Chennai", query: "“best skin clinic chennai”" },
      { src: img("soul-chatgpt-skin-clinic-anna-nagar"), title: "#1 on ChatGPT", query: "“Best skin clinic in anna nagar”" },
    ],
  },
  {
    id: "virtue",
    name: "Virtue Clinic & Aesthetic Academy",
    meta: "Aesthetics and training, Ambattur, Chennai. 4.9 rating on Google",
    intro:
      "Virtue came to us invisible. Not one of its 160 target keywords showed up on Google. Four months later, it’s the first name patients see when they look for an aesthetic clinic in Ambattur, and the first name students see when they look for an aesthetic academy.",
    points: [
      { bold: "0 to 154 Keywords", text: "Moved into Google Top 10 in 4 months" },
      { bold: "#1 on Google", text: "First aesthetic clinic named in Ambattur" },
      { bold: "#1 on ChatGPT & Gemini", text: "Top recommendation for clinic & academy" },
    ],
    before: { label: "In April", big: "0 of 160", text: "target keywords ranking anywhere on Google" },
    after: { label: "By 31 July", big: "154 of 160", text: "in the Google top 10, with 117 in the top 3 and 39 at position 1" },
    extra:
      "Average Google position improved from 11.3 to 7.3 in Search Console. And on AI search, ==ChatGPT and Gemini both list Virtue first== for clinic searches and academy searches, so it wins both sides of its business.",
    table: {
      caption: "A few of the keywords that went from nowhere to page 1",
      cols: ["What patients search", "April", "31 July", "Change"],
      rows: [
        ["Lip Pigmentation in Ambattur", "Not ranking", "1", "new at #1"],
        ["best PRP facial treatment in Ambattur", "Not ranking", "1", "new at #1"],
        ["best facial for glowing skin in ambattur", "Not ranking", "2", "new on page 1"],
        ["psoriasis specialist in ambattur", "Not ranking", "2", "new on page 1"],
        ["skin wart removal in Ambattur", "Not ranking", "3", "new on page 1"],
        ["best melasma treatment in Ambattur", "Not ranking", "5", "new on page 1"],
      ],
    },
    shots: [
      { src: img("virtue-google-aesthetic-clinic"), title: "First clinic on Google", query: "“aesthetic clinic in ambattur”, right under the one paid ad" },
      { src: img("virtue-chatgpt-aesthetic-clinic"), title: "#1 on ChatGPT", query: "“aesthetic clinic in ambattur”" },
      { src: img("virtue-gemini-aesthetic-clinic"), title: "#1 on Gemini", query: "“aesthetic clinic in ambattur”" },
      { src: img("virtue-gemini-skin-academy"), title: "Gemini’s “premier choice”", query: "“best skin academy in ambattur”" },
    ],
  },
  {
    id: "dr-swathi",
    name: "Dr. Swathi’s Skin & Cosmetic Clinic",
    meta: "Dermatology and aesthetics, Tambaram, Chennai. 4.6 rating from 364 Google reviews",
    intro:
      "None of the clinic’s 88 target keywords ranked on Google in June. By September, 52 were on page one. Today Google’s own AI Overview quotes the clinic’s website, and ChatGPT names Dr. Swathi first for skin analysis, medifacials and acne.",
    points: [
      { bold: "0 to 52 Keywords", text: "Moved to Google Page 1 in 90 days" },
      { bold: "Google AI Overview", text: "Directly cited as authoritative source" },
      { bold: "#1 on ChatGPT", text: "First name for medifacials & skin analysis" },
    ],
    before: { label: "In June", big: "0 of 88", text: "target keywords ranking on Google" },
    after: { label: "By September", big: "52", text: "keywords in the Google top 10, 34 in the top 3 and 11 at position 1" },
    extra:
      "Why this matters: the AI Overview is the answer box Google now shows above everything else, even above the map. ==When it lists your clinic and cites your website, you’re the first thing a patient reads==, before they’ve scrolled at all.",
    table: {
      caption: "A few of the keywords that went from nowhere to page 1",
      cols: ["What patients search", "June", "Sept", "Change"],
      rows: [
        ["skin regeneration in Tambaram", "Not ranking", "1", "new at #1"],
        ["acne treatment in Tambaram", "Not ranking", "2", "new on page 1"],
        ["skin analysis clinic in Tambaram", "Not ranking", "3", "new on page 1"],
        ["chemical peel treatment in Tambaram", "Not ranking", "3", "new on page 1"],
        ["microneedling treatment in Tambaram", "Not ranking", "3", "new on page 1"],
        ["acne scar treatment in Tambaram", "Not ranking", "5", "new on page 1"],
      ],
    },
    shots: [
      { src: img("swathi-google-dull-skin"), title: "First in Google’s AI Overview", query: "“dull skin treatment in Tambaram”" },
      { src: img("swathi-google-excessive-sweating"), title: "#1 on Google, and the AI Overview’s source", query: "“Excessive sweating treatment in Tambaram”" },
      { src: img("swathi-chatgpt-skin-analysis"), title: "#1 on ChatGPT", query: "“skin analysis clinic in Tambaram”" },
      { src: img("swathi-chatgpt-medifacial"), title: "#1 on ChatGPT", query: "“Medifacial in Tambaram”" },
      { src: img("swathi-google-antioxidant-iv"), title: "#1 on Google", query: "“Antioxidant IV therapy in Tambaram”" },
      { src: img("swathi-gemini-vitamin-infusion"), title: "The only clinic Gemini names", query: "“Vitamin infusion therapy in Tambaram”" },
    ],
  },
  {
    id: "subam",
    name: "Subam Skin Clinic",
    meta: "Dermatology, Tiruvannamalai. 4.7 rating from 102 Google reviews",
    intro:
      "In a smaller town, being first matters even more, because patients have fewer names to choose from and they pick the top one. Subam Skin Clinic is ==#1 on Google and #1 on ChatGPT== for both ways patients search: “dermatologist” and “skin clinic”. Its website also ranks on page one, next to Justdial.",
    points: [
      { bold: "#1 on Google & ChatGPT", text: "Top rank for dermatologist & clinic queries" },
      { bold: "Page 1 Organic Website", text: "Ranks alongside aggregator directories" },
      { bold: "Local Town Authority", text: "First choice for regional patients online" },
    ],
    shots: [
      { src: img("subam-google-dermatologist"), title: "#1 on Google", query: "“best dermatologist in tiruvannamalai”" },
      { src: img("subam-google-skin-clinic"), title: "#1 on Google, plus the website on page 1", query: "“best skin clinic in tiruvannamalai”" },
      { src: img("subam-chatgpt-dermatologist"), title: "#1 on ChatGPT", query: "“Best dermatologist in tiruvannamalai”" },
      { src: img("subam-chatgpt-skin-clinic"), title: "#1 on ChatGPT", query: "“Best skin clinic in tiruvannamalai”" },
    ],
  },
  {
    id: "mithran",
    name: "Mithran Fertility Center",
    meta: "Fertility and IVF, Chidambaram. 4.8 rating from 83 Google reviews",
    intro:
      "Couples choosing a fertility clinic research for weeks, and every one of them searches online before they call. Mithran appears in the ==top three on Google== for its town and is the ==second clinic ChatGPT shortlists==, side by side with a national IVF chain.",
    points: [
      { bold: "Top 3 on Google", text: "Leading search rank for regional fertility care" },
      { bold: "#2 on ChatGPT", text: "Shortlisted alongside national IVF chains" },
      { bold: "High-Intent Discovery", text: "Patients find clinic during research phase" },
    ],
    shots: [
      { src: img("mithran-google-fertility-center"), title: "Top 3 on Google", query: "“best fertility center in chidambaram”" },
      { src: img("mithran-chatgpt-fertility-clinic"), title: "#2 on ChatGPT, next to Nova IVF", query: "“Best fertility clinic in chidambaram”" },
    ],
  },
];

export const FAQ: FaqItem[] = [
  {
    q: "How long does it take to see results?",
    a: "For the clinics on this page, the big movement came within three to five months. Virtue went from zero to 154 top-ten keywords between April and July. Dr. Swathi’s clinic went from zero to 52 between June and September. Every clinic and area is different, so we’ll tell you honestly what to expect after we’ve checked yours.",
  },
  {
    q: "My area is very competitive. Is it still possible?",
    a: "Soul Skin Clinic is in Anna Nagar, competing with national chains, and it ranks first in its area and top three for all of Chennai. Competitive areas take more work, but they also have the most patients searching.",
  },
  {
    q: "Will this work for my speciality?",
    a: "On this page you’ve seen dermatology, aesthetics, a training academy and fertility. The approach works for any clinic whose patients search for treatments online, which today is almost all of them.",
  },
  {
    q: "Do you also handle ChatGPT and Gemini, or just Google?",
    a: "Both. Every case study above includes screenshots from ChatGPT or Gemini, because more patients ask AI assistants each month and those answers usually name only two or three clinics.",
  },
  {
    q: "What does the free visibility check include?",
    a: "You send us your business or clinic name and the treatments/services you care about most. We search them on Google, ChatGPT and Gemini from your area and send you the screenshots, with a short note on who’s showing up instead of you and why. There’s no charge and no obligation.",
  },
];
