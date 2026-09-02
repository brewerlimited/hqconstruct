import { ProcessTimeline } from "./ProcessTimeline";
import { SiteInteractions } from "./SiteInteractions";

const capabilities = [
  { number: "01", title: "Commercial scaffold access", body: "Access scaffolds for main contractors, developers and commercial site teams, planned around live programmes and phased handovers.", detail: "Active construction sites" },
  { number: "02", title: "Temporary works coordination", body: "Tube and fitting, system scaffolds and specialist access coordinated around elevations, public interfaces and restricted working areas.", detail: "Design requirement identified early" },
  { number: "03", title: "Scaffold inspection", body: "Inspection discipline, tagging systems and site records support safe use, alterations and ongoing scaffold control.", detail: "Handover and weekly control" },
  { number: "04", title: "Logistical support", body: "Planning input for erection sequence, loading, access points and site constraints, with practical advice before mobilisation.", detail: "Programme-aware delivery" },
  { number: "05", title: "Public protection", body: "Public-facing scaffold arrangements and workforce safety controls managed through site-specific RAMS and trained scaffold teams.", detail: "Public and workforce safety" },
  { number: "06", title: "System and bespoke access", body: "A practical mix of system scaffold and tube-and-fitting solutions to suit the build, location and working method.", detail: "Commercial access packages" },
];

const projects = [
  { image: "/assets/hq-construct-work-6.jpg", alt: "HQ Construct scaffold access installed on a commercial building", type: "Commercial access package", context: "Active construction environment" },
  { image: "/assets/hq-construct-work-5.jpg", alt: "HQ Construct scaffolding previous work", type: "Urban refurbishment", context: "Controlled access and public-facing works" },
  { image: "/assets/hq-construct-work-4.jpg", alt: "HQ Construct scaffolding structure", type: "Complex scaffold support", context: "Restricted access and live site coordination" },
];

const planningQuestions = [
  { title: "Programme", question: "Access requirements and programme dates before pricing." },
  { title: "Logistics", question: "Erection, loading, adaptation and site access constraints." },
  { title: "Design", question: "Temporary works or specialist access requirements identified early." },
];

const compliance = [
  { label: "CISRS", detail: "Carded scaffold teams" },
  { label: "CITB", detail: "Trained operatives" },
  { label: "RAMS", detail: "Site-specific documentation" },
  { label: "Inspections", detail: "Ongoing scaffold control" },
  { label: "Tagging", detail: "Site scaffold status" },
  { label: "Public protection", detail: "Public-facing controls" },
  { label: "TG20", detail: "Led scaffold structures" },
  { label: "Safety support", detail: "External safety management" },
];

const aboutFacts = [
  { label: "Established", value: "2014" },
  { label: "Greater Manchester", value: "Bury" },
  { label: "Project capability", value: "North West / UK" },
];

export default function Home() {
  return (
    <main>
      <SiteInteractions />
      <div className="site-chrome">
        <div className="concept-banner">Private concept preview</div>
        <header className="site-header">
          <a className="brand" href="#top" aria-label="HQ Construct home">
            <img src="/assets/hqconstruct-logo.png" alt="" />
            <span><strong>HQ Construct</strong><small>Scaffolding / Access / Project Support</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a><a href="#projects">Projects</a><a href="#process">Process</a><a href="#safety">Safety</a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="#contact">Send drawings</a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">Services</a><a href="#projects">Projects</a><a href="#process">Process</a><a href="#safety">Safety</a><a href="#about">About</a><a href="#contact">Contact</a>
            </nav>
          </details>
        </header>
      </div>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-reveal">Commercial scaffolding / Est. 2014 / North West & UK</p>
          <h1 className="hero-reveal">Scaffolding packages built around live construction programmes.</h1>
          <p className="hero-intro hero-reveal">HQ Construct plans, erects and manages scaffold access for main contractors, developers and commercial clients who need safe structures, clear communication and programme-aware delivery.</p>
          <div className="hero-actions hero-reveal">
            <a className="button primary" href="#contact">Discuss a project <span aria-hidden="true">-&gt;</span></a>
            <a className="button ghost" href="#projects">View project work <span aria-hidden="true">-&gt;</span></a>
          </div>
        </div>
        <figure className="hero-media hero-image">
          <img src="/assets/slide-1.png" alt="HQ Construct scaffold access at a construction site" />
          <figcaption><span>Commercial scaffolding</span><strong>Active construction access</strong><p>Sequencing, logistics and live programme requirements.</p></figcaption>
        </figure>
      </section>

      <section className="proof-strip" aria-label="Company proof points">
        <div><span>Est. 2014</span><strong>Commercial scaffold contractor</strong></div>
        <div><span>13+ years</span><strong>Industry experience</strong></div>
        <div><span>CISRS</span><strong>Qualified workforce</strong></div>
        <div><span>24/7</span><strong>Site support</strong></div>
      </section>

      <section className="quiet-section access-section">
        <div className="section-kicker rule-reveal"><span>01</span><p>Access</p></div>
        <div className="access-layout">
          <div className="access-copy reveal"><h2>Access that helps the project move, not just the scaffold stand.</h2><p>Built around sequencing, logistics, access constraints and live programme requirements.</p></div>
          <div className="access-evidence reveal" aria-label="Built around"><span>Built around</span><strong>Programme</strong><strong>Logistics</strong><strong>Site constraints</strong><strong>Access sequencing</strong></div>
        </div>
      </section>

      <section className="section capability-section" id="services">
        <div className="section-head section-head-stacked reveal"><div className="section-kicker rule-reveal"><span>02</span><p>Capability</p></div><h2>A complete scaffold access package, run by one team.</h2><p>Structured access capability for commercial contractors who need programme, safety, public interface and commercial control handled together.</p></div>
        <div className="capability-grid">
          {capabilities.map((item) => <article className="capability-module" key={item.title}><span className="module-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.body}</p><small>{item.detail}</small></div></article>)}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-head section-head-stacked reveal"><div className="section-kicker rule-reveal"><span>03</span><p>Projects</p></div><h2>Commercial scaffold works across active construction environments.</h2><p>HQ Construct site imagery, reframed as practical presentation for contractors, estimators and commercial teams reviewing access capability.</p></div>
        <div className="editorial-project">
          <article className="featured-project reveal-image"><img src="/assets/slide-2.png" alt="HQ Construct scaffolded building elevation" loading="lazy" /><div><span>Project type</span><h3>Scaffold access coordinated around site activity and phased handover.</h3><p>Commercial access package / Active construction environment</p></div></article>
          <div className="supporting-projects">
            {projects.map((project) => <article className="project-tile reveal-image" key={project.type}><div className="project-image-frame"><img src={project.image} alt={project.alt} loading="lazy" /></div><div><span>Project type</span><h3>{project.type}</h3><p>{project.context}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="preconstruction">
        <div className="section-kicker rule-reveal"><span>04</span><p>Preconstruction</p></div>
        <div className="preconstruction-grid">
          <div className="reveal"><h2>Early scaffold advice that keeps tender, budget and site programme aligned.</h2><p>HQ Construct assists with access strategy before mobilisation, helping contractors understand scaffold scope, temporary works interfaces and buildability issues before they become expensive site changes.</p></div>
          <div className="planning-list">{planningQuestions.map((item, index) => <article className="reveal" key={item.title}><span>{String(index + 1).padStart(2, "0")} {item.title}</span><h3>{item.title}</h3><p>{item.question}</p></article>)}</div>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-head section-head-stacked reveal"><div className="section-kicker rule-reveal"><span>05</span><p>Site control</p></div><h2>No uncertainty between tender, erection and weekly site control.</h2><p>A clear route from scope review to live scaffold control, with the same commercial logic carried through the job.</p></div>
        <div className="process-proof"><ProcessTimeline /></div>
      </section>

      <section className="delivery-principle">
        <div className="section-kicker rule-reveal"><span>06</span><p>Programme proof</p></div>
        <blockquote className="reveal">&quot;We aim to provide the best possible service and advice for our clients, carried out in a safe manner to enable contractors to achieve programme targets.&quot;</blockquote>
      </section>

      <section className="safety" id="safety">
        <div className="section-kicker rule-reveal"><span>07</span><p>Site compliance</p></div>
        <div className="safety-layout">
          <div className="reveal"><h2>Safety, paperwork, trained labour and inspection discipline from day one.</h2><p>HQ Construct operates with a complete safety management system, external professional support and a proactive health and safety culture across scaffold erection, alteration and dismantling.</p></div>
          <div className="compliance-panel">{compliance.map((item) => <div className="compliance-row reveal" key={item.label}><span>{item.label}</span><p>{item.detail}</p></div>)}</div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-kicker rule-reveal"><span>08</span><p>About</p></div>
        <div className="about-grid">
          <div className="reveal"><h2>Commercial access, built around site delivery.</h2><p>Based in Bury, HQ Construct supports commercial scaffold packages across Greater Manchester, the North West and wider UK projects where planned access and reliable supervision are required.</p></div>
          <dl>{aboutFacts.map((fact) => <div className="about-fact reveal" key={fact.label}><dt>{fact.value}</dt><dd>{fact.label}</dd></div>)}</dl>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-details reveal"><div className="section-kicker rule-reveal"><span>09</span><p>Enquiry</p></div><h2>Send the drawings. HQ will price the access.</h2><p>Scaffold enquiry, tender package, programme issue or urgent site support: send the scope and HQ Construct will come back with the right questions and a buildable route forward.</p><div className="contact-list"><a href="tel:08444458276">08444 458276</a><a href="tel:07752323271">07752 323271</a><a href="mailto:scaffolding@hqconstruct.com">scaffolding@hqconstruct.com</a><span>Unit 9, J2 Business Park, Bury BL9 7NY</span></div></div>
        <form className="quote-form reveal" action="mailto:scaffolding@hqconstruct.com" method="post" encType="text/plain">
          <h3>Project enquiry</h3><p>Share the project location, tender information and outline access scope. File upload handling can be connected before go-live.</p>
          <div className="form-grid">
            <label>Company<input name="company" type="text" autoComplete="organization" /></label><label>Name<input name="name" type="text" autoComplete="name" /></label><label>Email<input name="email" type="email" autoComplete="email" /></label><label>Telephone<input name="phone" type="tel" autoComplete="tel" /></label><label>Project location<input name="site-location" type="text" placeholder="Postcode or area" /></label>
            <label>Service required<select name="service" defaultValue=""><option value="" disabled>Select service</option><option>Commercial scaffolding</option><option>Temporary works access</option><option>Scaffold inspection</option><option>Public protection</option></select></label>
            <label className="full">Project details<textarea name="scope" rows={4} /></label>
            <label className="file-field full"><span>Attach drawings / tender information</span><span className="upload-icon" aria-hidden="true">+</span><input name="documents" type="file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,image/*" /><small>PDF / DOCX / XLSX / ZIP / JPG / PNG</small></label>
          </div>
          <button type="submit">Send for pricing <span aria-hidden="true">-&gt;</span></button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-brand"><img src="/assets/hqconstruct-logo.png" alt="" /><h2>HQ Construct Ltd</h2><p>Commercial scaffolding and access support for live construction environments.</p></div>
        <div><h3>Services</h3><a href="#services">Commercial scaffolding</a><a href="#services">Temporary works access</a><a href="#services">Scaffold inspection</a></div>
        <div><h3>Navigation</h3><a href="#projects">Projects</a><a href="#process">Process</a><a href="#safety">Safety</a><a href="#about">About</a></div>
        <div><h3>Contact</h3><a href="tel:08444458276">08444 458276</a><a href="mailto:scaffolding@hqconstruct.com">scaffolding@hqconstruct.com</a><span>Bury BL9 7NY</span></div>
        <p className="footer-bottom">Private concept review prepared for discussion. No public affiliation or endorsement is claimed.</p>
      </footer>
    </main>
  );
}
