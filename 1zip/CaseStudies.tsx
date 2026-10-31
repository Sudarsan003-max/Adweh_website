"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import styles from "./CaseStudies.module.css";
import {
  SETTINGS,
  whatsappLink,
  DEMO_SEARCHES,
  PROOF,
  CASE_STUDIES,
  FAQ,
} from "./caseStudiesData";
import type { CaseStudy as CaseStudyData, Shot } from "./caseStudiesData";

// Turns "text ==highlight== text" into text with a highlighted part
function Rich({ text }: { text: string }) {
  return text.split("==").map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className={styles.mark}>
        {part}
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

function WhatsAppButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      className={`${styles.cta} ${className}`}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

// Animated search box: types a real query, then shows the client that came up
function SearchDemo() {
  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    (async () => {
      const d = DEMO_SEARCHES[index];
      setShowAnswer(false);
      if (reduce) {
        setTyped(d.q);
      } else {
        for (let i = 1; i <= d.q.length; i++) {
          if (cancelled) return;
          setTyped(d.q.slice(0, i));
          await wait(55);
        }
      }
      await wait(450);
      if (cancelled) return;
      setShowAnswer(true);
      await wait(reduce ? 4500 : 3200);
      if (!cancelled) setIndex((i) => (i + 1) % DEMO_SEARCHES.length);
    })();
    return () => {
      cancelled = true;
    };
  }, [index, reduce]);

  const d = DEMO_SEARCHES[index];
  return (
    <div className={styles.demo} aria-label="Real searches and the clinic that came up">
      <div className={styles.qbar}>
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M15.5 15.5 21 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
        <span aria-live="polite">{typed}</span>
        <span className={`${styles.caret} ${reduce ? styles.caretStill : ""}`} aria-hidden="true" />
      </div>
      <div className={styles.answer}>
        <div className={styles.answerSrc}>{showAnswer ? `Answer on ${d.src}` : "\u00a0"}</div>
        <div className={`${styles.answerHit} ${showAnswer ? styles.on : ""}`}>
          <span className={styles.answerRank}>{d.rank}</span> {d.name}
        </div>
        <div className={`${styles.answerWhere} ${showAnswer ? styles.on : ""}`}>{d.where}</div>
      </div>
    </div>
  );
}

function Screenshot({ shot, onOpen }: { shot: Shot; onOpen: (shot: Shot) => void }) {
  const alt = `${shot.title}: ${shot.query}`;
  return (
    <figure className={styles.shot}>
      <button type="button" className={styles.shotBtn} onClick={() => onOpen(shot)} aria-label={`Enlarge screenshot: ${alt}`}>
        <img src={shot.src} alt={alt} loading="lazy" />
      </button>
      <figcaption className={styles.shotCap}>
        <b>{shot.title}</b>
        {shot.query}
      </figcaption>
    </figure>
  );
}

function CaseStudy({ data, onOpen }: { data: CaseStudyData; onOpen: (shot: Shot) => void }) {
  return (
    <section className={`${styles.wrap} ${styles.case}`} id={data.id}>
      <h2 className={styles.caseTitle}>{data.name}</h2>
      <p className={styles.caseMeta}>{data.meta}</p>
      <p>
        <Rich text={data.intro} />
      </p>

      {data.before && data.after && (
        <div className={styles.ba}>
          <div className={styles.before}>
            <div className={styles.baLabel}>{data.before.label}</div>
            <div className={styles.baBig}>{data.before.big}</div>
            <div className={styles.baText}>{data.before.text}</div>
          </div>
          <div className={styles.after}>
            <div className={styles.baLabel}>{data.after.label}</div>
            <div className={styles.baBig}>{data.after.big}</div>
            <div className={styles.baText}>{data.after.text}</div>
          </div>
        </div>
      )}

      {data.extra && (
        <p>
          <Rich text={data.extra} />
        </p>
      )}

      {data.table && (
        <div className={styles.tableBox}>
          <table className={styles.kw}>
            <caption>{data.table.caption}</caption>
            <thead>
              <tr>
                {data.table.cols.map((c) => (
                  <th scope="col" key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.table.rows.map((r) => (
                <tr key={r[0]}>
                  <td>{r[0]}</td>
                  <td className={styles.was}>{r[1]}</td>
                  <td className={styles.now}>{r[2]}</td>
                  <td className={styles.res}>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className={styles.shots}>
        {data.shots.map((s) => (
          <Screenshot key={s.src} shot={s} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

function Lightbox({ shot, onClose }: { shot: Shot | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (shot && !dlg.open) dlg.showModal();
    if (!shot && dlg.open) dlg.close();
  }, [shot]);
  return (
    <dialog
      ref={ref}
      className={styles.lightbox}
      onClose={onClose}
      onClick={(e: MouseEvent<HTMLDialogElement>) => {
        if (e.target === ref.current) onClose();
      }}
      aria-label="Screenshot"
    >
      {shot && (
        <>
          <button type="button" className={styles.lbClose} onClick={onClose} aria-label="Close">×</button>
          <img src={shot.src} alt={`${shot.title}: ${shot.query}`} />
          <p className={styles.lbCap}>
            {shot.title}: {shot.query}
          </p>
        </>
      )}
    </dialog>
  );
}

export default function CaseStudies() {
  const [openShot, setOpenShot] = useState<Shot | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const io = new IntersectionObserver(([e]) => setShowSticky(!e.isIntersecting));
    io.observe(heroRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={`${styles.wrap} ${styles.hero}`} ref={heroRef}>
        <p className={styles.kicker}>For doctors and clinic owners in Tamil Nadu</p>
        <h1 className={styles.h1}>
          When a patient asks Google or ChatGPT for the best clinic near them, whose name do they hear?
        </h1>
        <p className={styles.lede}>
          For the five clinics below, the answer is their own. Every claim on this page comes with a real
          screenshot of the search, so you don’t have to take our word for any of it.
        </p>
        <SearchDemo />
        <WhatsAppButton>Show me who patients see for my clinic</WhatsAppButton>
        <p className={styles.ctaNote}>
          Free. We search your top treatments on Google, ChatGPT and Gemini and send you the screenshots on WhatsApp.
        </p>
      </section>

      {/* PROOF */}
      <section className={styles.proof} aria-label="Results at a glance">
        <div className={`${styles.wide} ${styles.proofGrid}`}>
          {PROOF.map((p) => (
            <div key={p.l}>
              <div className={styles.proofN}>{p.n}</div>
              <div className={styles.proofL}>{p.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LETTER */}
      <section className={`${styles.wrap} ${styles.letter}`}>
        <h2 className={styles.h2}>Dear Doctor,</h2>
        <p>Think about how your last new patient found you.</p>
        <p>
          Chances are they didn’t ask a neighbour or flip through a directory. They took out their phone and typed
          something like <em>“acne treatment near me”</em> or <em>“best skin clinic in Anna Nagar”</em>. More and more
          of them now just ask ChatGPT.
        </p>
        <p>
          Google shows them three clinics on the map. ChatGPT and Gemini give them two or three names.{" "}
          <strong>Most patients call one of those, and never scroll further.</strong>
        </p>
        <p className={styles.pull}>
          You can be the best-qualified doctor in your area. If your name isn’t in those top three, the patient never
          finds out.
        </p>
        <p>
          That’s the uncomfortable part. Patients aren’t choosing between you and the clinic down the road on merit.
          They’re choosing between the names their phone gives them. Every week you’re not one of those names, those
          patients are booking with someone else, and you’ll never see it in your appointment book.
        </p>
        <p>
          Here’s the good news: <mark className={styles.mark}>which names appear is not luck</mark>. It comes down to
          how your Google profile, your website and your reputation online are set up, page by page and treatment by
          treatment. That’s what we do at {SETTINGS.brand}.
        </p>
        <p>
          Below are five clinics we work with. Instead of telling you what we can do, we’ll show you exactly where they
          appear today, with the searches and screenshots to prove it.
        </p>
      </section>

      {/* CASE STUDIES, with a mid-page offer after the second one */}
      {CASE_STUDIES.map((c, i) => (
        <Fragment key={c.id}>
          <CaseStudy data={c} onOpen={setOpenShot} />
          {i === 1 && (
            <aside className={styles.wrap}>
              <div className={styles.midCta}>
                <h3 className={styles.h3}>Curious where your clinic shows up right now?</h3>
                <p>
                  Send us your clinic name and three treatments you most want patients for. We’ll run those searches on
                  Google, ChatGPT and Gemini and send you the screenshots, including which clinics are getting those
                  patients instead.
                </p>
                <WhatsAppButton>Send me my free visibility check</WhatsAppButton>
              </div>
            </aside>
          )}
        </Fragment>
      ))}

      {/* WHY IT WORKS + FAQ */}
      <section className={`${styles.wrap} ${styles.letter}`}>
        <h2 className={styles.h2}>What these five clinics have in common</h2>
        <p>
          They’re different specialities in different towns. Some started with hundreds of reviews, some with very
          few. What they share is that each one now has:
        </p>
        <ul className={styles.ticks}>
          <li>
            <strong>A Google profile that wins the map.</strong> The three clinics on the map get most of the calls, so
            that’s where we start.
          </li>
          <li>
            <strong>A website page for each treatment patients search for.</strong> That’s why Dr. Swathi’s clinic
            ranks for “excessive sweating” and “IV therapy” separately, not just for “skin clinic”.
          </li>
          <li>
            <strong>Information that AI assistants trust and repeat.</strong> ChatGPT and Gemini only recommend clinics
            they can confirm from several sources. When the facts line up everywhere, they name you.
          </li>
        </ul>
        <p>
          None of this is a trick, and none of it depends on how much you spend on ads. It’s steady, specific work,
          and as you’ve seen,{" "}
          <mark className={styles.mark}>it shows up as real positions on real searches within a few months</mark>.
        </p>

        <h2 className={styles.h2}>Questions doctors usually ask us</h2>
        {FAQ.map((f) => (
          <details className={styles.faq} key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className={styles.final}>
        <div className={styles.wrap}>
          <h2 className={styles.h2}>Right now, a patient near you is asking where to go.</h2>
          <p>They’ll hear two or three names. The only question is whether yours is one of them.</p>
          <p>
            Find out in a day. Send us your clinic name and your three most important treatments on WhatsApp, and{" "}
            <strong>we’ll send back screenshots of exactly what patients see</strong>. If you’re already at the top,
            you’ll know. If you’re not, you’ll see who’s taking those patients and what it would take to change that.
          </p>
          <WhatsAppButton className={styles.ctaOnDark}>Get my free visibility check on WhatsApp</WhatsAppButton>
          <p className={styles.ctaNote}>Takes 30 seconds. No charge, no obligation.</p>
          <p className={styles.ps}>
            <b>P.S.</b> Every screenshot on this page is a real search for a real treatment. Your competitors can run
            the same searches today. The clinic that shows up first is usually the one that started first.
          </p>
        </div>
      </section>

      <p className={`${styles.wrap} ${styles.footnote}`}>
        Screenshots are real Google, ChatGPT and Gemini results captured for the search shown. Rankings vary with the
        searcher’s location and change over time. Keyword positions come from each clinic’s ranking reports, and click
        and position figures from Google Search Console.
      </p>

      <div className={`${styles.sticky} ${showSticky ? styles.stickyShow : ""}`}>
        <WhatsAppButton>Get my free visibility check</WhatsAppButton>
      </div>

      <Lightbox shot={openShot} onClose={() => setOpenShot(null)} />
    </div>
  );
}
