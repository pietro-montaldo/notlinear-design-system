/* global React */
const { useState } = React;

/* ============================================================
   NavBar — sticky pill nav
   ============================================================ */
function NavBar() {
  return (
    <nav className="nl-nav">
      <a className="nl-nav-brand" href="#">
        <img src="../../assets/logos/logo_mark/logo_mark_1.png" alt="" />
        <span>NotLinear</span>
      </a>
      <ul className="nl-nav-links">
        <li><a href="#curriculum">Curriculum</a></li>
        <li><a href="#templates">Templates</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#essays">Essays</a></li>
      </ul>
      <a className="nl-btn nl-btn-primary nl-btn-sm" href="#enroll">Enroll</a>
    </nav>
  );
}

/* ============================================================
   Hero — eyebrow + serif H1 + body + CTA
   ============================================================ */
function Hero() {
  return (
    <section className="nl-hero">
      <p className="nl-eyebrow">AI growth systems bootcamp</p>
      <h1 className="nl-hero-h1">
        Gain confidence<br/>
        to build <span className="nl-amp">&amp;</span> extend<br/>
        AI&nbsp;systems.
      </h1>
      <p className="nl-hero-body">
        A cohort program for non-technical operators, founders, and GTM leaders.
        Templates, frameworks, and the working models behind modern AI products.
      </p>
      <div className="nl-hero-cta">
        <a className="nl-btn nl-btn-primary" href="#enroll">Enroll now</a>
        <a className="nl-btn nl-btn-link" href="#curriculum">Explore curriculum →</a>
      </div>
      <img className="nl-hero-mark" src="../../assets/logos/logo_mark/logo_mark_1.png" alt="" />
    </section>
  );
}

/* ============================================================
   ModuleList — numbered curriculum (01 → 06)
   ============================================================ */
const MODULES = [
  { n: "01", title: "Foundations", body: "How LLMs actually work — minus the hype. Mental models that survive real products and teams." },
  { n: "02", title: "Prompt systems", body: "Move from one-off prompts to reusable templates with guardrails and evaluations." },
  { n: "03", title: "Frameworks", body: "Proven workflows for content, research, ops, and GTM — adapted from leading B2B teams." },
  { n: "04", title: "Tooling", body: "Choose, wire, and govern the stack — model picking, retrieval, agents, observability." },
  { n: "05", title: "Evaluations", body: "Build the feedback loop. What to measure, what to ignore, and how to ship with confidence." },
  { n: "06", title: "Extension", body: "Take the system back to your team. Internal rollout, training, and the next 90 days." },
];

function ModuleList() {
  return (
    <section className="nl-section" id="curriculum">
      <p className="nl-eyebrow">Curriculum · 8 weeks</p>
      <h2 className="nl-section-h">Six modules,<br/>built around the work.</h2>
      <ol className="nl-modules">
        {MODULES.map((m) => (
          <li key={m.n} className="nl-module">
            <span className="nl-module-n">{m.n}</span>
            <div>
              <h3 className="nl-module-t">{m.title}</h3>
              <p className="nl-module-b">{m.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ============================================================
   TemplateGrid — three-up library teaser
   ============================================================ */
const TEMPLATES = [
  { tag: "Research", t: "Customer interview synthesis", b: "Cluster signal from 20 transcripts in under an hour, with provenance kept." },
  { tag: "GTM",      t: "Outbound personalization",     b: "Account-grade personalization that survives compliance and lands like a human wrote it." },
  { tag: "Ops",      t: "SOP rewriting",                b: "Turn a Loom + a Notion doc into a versioned standard the rest of the team can actually run." },
];

function TemplateGrid() {
  return (
    <section className="nl-section nl-section-sunken" id="templates">
      <div className="nl-section-head">
        <div>
          <p className="nl-eyebrow">Template library</p>
          <h2 className="nl-section-h">Proven frameworks,<br/>used in real workflows.</h2>
        </div>
        <a className="nl-btn nl-btn-link" href="#">Browse the library →</a>
      </div>
      <div className="nl-grid-3">
        {TEMPLATES.map((tpl) => (
          <article className="nl-card" key={tpl.t}>
            <span className="nl-card-tag">{tpl.tag}</span>
            <h3 className="nl-card-t">{tpl.t}</h3>
            <p className="nl-card-b">{tpl.b}</p>
            <a className="nl-card-link" href="#">Preview template →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   TestimonialQuote — pull quote on linen
   ============================================================ */
function TestimonialQuote() {
  return (
    <section className="nl-quote-section">
      <blockquote className="nl-quote">
        Growth, learning, and progress are rarely linear —<br/>
        the work is to keep moving anyway.
      </blockquote>
      <div className="nl-quote-attr">
        <span className="nl-rule"></span>
        Pietro Montaldo · Founder, NotLinear
      </div>
    </section>
  );
}

/* ============================================================
   EnrollBlock — closing CTA, burgundy
   ============================================================ */
function EnrollBlock() {
  const [email, setEmail] = useState("");
  return (
    <section className="nl-enroll" id="enroll">
      <img className="nl-enroll-mark" src="../../assets/logos/logo_mark/logo_mark_1.png" alt="" />
      <p className="nl-eyebrow nl-eyebrow-inverse">Spring 2026 cohort · Tues PM</p>
      <h2 className="nl-enroll-h">From understanding<br/>to execution.</h2>
      <p className="nl-enroll-b">Eight weeks. Live cohort. Templates you keep forever.</p>
      <form className="nl-enroll-form" onSubmit={(e) => { e.preventDefault(); alert("Saved a seat for " + email); }}>
        <input
          className="nl-enroll-input"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="nl-btn nl-btn-light" type="submit">Save my seat</button>
      </form>
      <p className="nl-enroll-meta">Limited to 60 seats · Next cohort starts April 7.</p>
    </section>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer() {
  return (
    <footer className="nl-footer">
      <div className="nl-footer-top">
        <img className="nl-footer-mark" src="../../assets/logos/primary_logo_1.png" alt="NotLinear" />
        <p className="nl-footer-tag">From understanding to execution.</p>
      </div>
      <div className="nl-footer-cols">
        <div>
          <h4>Program</h4>
          <ul><li><a>Curriculum</a></li><li><a>Templates</a></li><li><a>Cohorts</a></li></ul>
        </div>
        <div>
          <h4>Writing</h4>
          <ul><li><a>Essays</a></li><li><a>Newsletter</a></li><li><a>Talks</a></li></ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul><li><a>About</a></li><li><a>Contact</a></li><li><a>Press kit</a></li></ul>
        </div>
      </div>
      <div className="nl-footer-bot">
        <span>© 2026 NotLinear.AI</span>
        <span>By Pietro Montaldo</span>
      </div>
    </footer>
  );
}

/* ============================================================
   App
   ============================================================ */
function App() {
  return (
    <div className="nl-base">
      <NavBar />
      <Hero />
      <ModuleList />
      <TemplateGrid />
      <TestimonialQuote />
      <EnrollBlock />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
