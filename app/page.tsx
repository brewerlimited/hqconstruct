const services = [
  {
    number: "01",
    title: "Commercial scaffolding",
    body: "Access scaffolds for main contractors, developers and commercial site teams, planned around live programmes and phased handovers.",
  },
  {
    number: "02",
    title: "Temporary works access",
    body: "Tube and fitting, system scaffolds and designed access for complex elevations, public interfaces and restricted sites.",
  },
  {
    number: "03",
    title: "Scaffold schedules",
    body: "Early advice at tender stage, measured scaffold schedules and practical sequencing that helps QS and delivery teams price with confidence.",
  },
  {
    number: "04",
    title: "Industrial support",
    body: "Safe access for maintenance, refurbishment, plant rooms, energy assets and operational environments where control matters.",
  },
  {
    number: "05",
    title: "Public protection",
    body: "Gantries, edge protection, fans, hoists interfaces and pavement-facing arrangements managed with clear inspections and records.",
  },
  {
    number: "06",
    title: "24/7 responsive cover",
    body: "Directly employed, trained scaffold teams available around site constraints, possessions, shutdowns and urgent programme needs.",
  },
];

const projects = [
  {
    image: "/assets/hq-construct-work-6.jpg",
    alt: "HQ Construct scaffold access installed on a commercial building",
    title: "Commercial access package",
    meta: "Multi-elevation scaffold, staged around contractor programme.",
  },
  {
    image: "/assets/hq-construct-work-5.jpg",
    alt: "HQ Construct scaffolding previous work",
    title: "Urban refurbishment",
    meta: "Safe public-facing access with controlled handover points.",
  },
  {
    image: "/assets/hq-construct-work-4.jpg",
    alt: "HQ Construct scaffolding structure",
    title: "Complex scaffold support",
    meta: "Designed access for high-risk sequencing and inspection.",
  },
];

const process = [
  {
    step: "Step 01",
    title: "Tender review",
    body: "Drawings, elevations and site constraints are reviewed early. We flag sequencing risk, advise on design need and prepare a scaffold schedule that can be built against the construction process.",
  },
  {
    step: "Step 02",
    title: "Mobilise cleanly",
    body: "RAMS, inductions, equipment, inspection regime and supervisor responsibility are agreed before site start, so the first lift lands without disrupting the wider programme.",
  },
  {
    step: "Step 03",
    title: "Control the works",
    body: "Scaffold operations are inspected, altered and recorded with a proactive site lead. Changes are managed quickly, with safety and commercial impact made visible.",
  },
];

const compliance = [
  "CISRS carded scaffold teams",
  "CITB-trained operatives",
  "TG20 and design-led structures",
  "Site-specific RAMS",
  "Inspection tagging system",
  "Public and workforce safety controls",
];

const areas = [
  "Bury",
  "Manchester",
  "Bolton",
  "Rochdale",
  "Salford",
  "Oldham",
  "Wigan",
  "Preston",
  "Liverpool",
  "Leeds",
  "North West",
  "UK projects",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="HQ Construct home">
          <img src="/assets/hqconstruct-logo.png" alt="" />
          <span>
            <strong>HQ Construct</strong>
            <small>Scaffolding · Access · Project Support</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#safety">Safety</a>
          <a href="#areas">Areas</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="tel:08444458276">Call now</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Commercial scaffolding · Est. 2014 · North West & UK</p>
          <h1>Scaffolding packages built around live construction programmes.</h1>
          <p className="hero-intro">
            HQ Construct plans, erects and manages scaffold access for main contractors, developers and commercial clients who need safe structures, clear communication and programme-aware delivery.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Request a price</a>
            <a className="button ghost" href="#projects">See work</a>
          </div>
          <div className="client-strip" aria-label="Client types">
            <span>Working with</span>
            <strong>Main Contractors</strong>
            <strong>Developers</strong>
            <strong>Principal Contractors</strong>
            <strong>Project Managers</strong>
          </div>
        </div>
        <div className="hero-media">
          <img src="/assets/slide-1.png" alt="HQ Construct scaffold access at a construction site" />
          <div className="radius-card">
            <strong>24/7</strong>
            <span>responsive scaffold service</span>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Company metrics">
        <div>
          <strong>2014</strong>
          <span>Company formed</span>
        </div>
        <div>
          <strong>13+ yr</strong>
          <span>Management experience</span>
        </div>
        <div>
          <strong>CISRS</strong>
          <span>Carded scaffold teams</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Client support</span>
        </div>
      </section>

      <section className="intro-band">
        <div>
          <p className="section-label">Built for commercial sites</p>
          <h2>Access that helps the project move, not just the scaffold stand.</h2>
        </div>
        <p>
          HQ Construct supports contractors from tender advice through to safe handover, preparing scaffold schedules, method statements and practical sequencing so site teams can keep trades moving and budgets visible.
        </p>
      </section>

      <section className="section" id="services">
        <div className="section-head">
          <p className="section-label">01 / What we do</p>
          <h2>A complete scaffold access package, run by one team.</h2>
          <p>
            From early design advice to inspections and alterations, the access package sits with a team that understands construction sequencing, public risk and contractor expectations.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-head">
          <p className="section-label">02 / Recent works</p>
          <h2>Commercial scaffold works across active construction environments.</h2>
          <p>
            A selection of HQ Construct site imagery, reframed for a higher-end project presentation. Full project sheets can be issued with tender returns or pre-qualification packs.
          </p>
        </div>
        <div className="project-gallery">
          <img className="wide-image" src="/assets/slide-2.png" alt="HQ Construct scaffolded building elevation" />
          {projects.map((project) => (
            <article className="project-tile" key={project.title}>
              <img src={project.image} alt={project.alt} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-study">
        <div className="case-copy">
          <p className="section-label">Case study</p>
          <h2>Early scaffold advice that keeps tender, budget and site programme aligned.</h2>
          <p>
            HQ Construct assists with access strategy before mobilisation, helping contractors understand scaffold scope, temporary works interfaces and buildability issues before they become expensive site changes.
          </p>
        </div>
        <div className="case-media">
          <img src="/assets/home-4.png" alt="HQ Construct project banner showing scaffold and construction work" />
        </div>
        <dl className="case-facts">
          <div>
            <dt>Base</dt>
            <dd>Unit 9, J2 Business Park, Bury</dd>
          </div>
          <div>
            <dt>Package</dt>
            <dd>Scaffolding, access and project support</dd>
          </div>
          <div>
            <dt>Clients</dt>
            <dd>Main contractors, developers, commercial sites</dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>24 hours, 7 days a week</dd>
          </div>
        </dl>
      </section>

      <section className="section process" id="process">
        <div className="section-head">
          <p className="section-label">03 / How we run a package</p>
          <h2>No uncertainty between tender, erection and weekly site control.</h2>
          <p>
            The same commercial logic carries through the job: price what is needed, plan what is buildable and keep the scaffold record clean.
          </p>
        </div>
        <div className="process-grid">
          {process.map((item) => (
            <article key={item.title}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <blockquote>
          “We aim to provide the best possible service and advice for our clients, carried out in a safe manner to enable contractors to achieve programmed targets.”
        </blockquote>
      </section>

      <section className="safety" id="safety">
        <div>
          <p className="section-label">04 / Compliant by default</p>
          <h2>Safety paperwork, trained labour and inspection discipline from day one.</h2>
          <p>
            HQ Construct operates with a complete safety management system, external professional support and a proactive health and safety culture across scaffold erection, alteration and dismantling.
          </p>
          <div className="compliance-grid">
            {compliance.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="tag-stack" aria-hidden="true">
          <img src="/assets/green-tag.png" alt="" />
          <img src="/assets/red-tag.png" alt="" />
        </div>
      </section>

      <section className="section areas" id="areas">
        <div className="section-head">
          <p className="section-label">05 / Where we work</p>
          <h2>Bury base. North West reach. UK project capability.</h2>
          <p>
            Based in Bury, HQ Construct supports commercial scaffold packages across Greater Manchester, the North West and wider UK projects where planned access and reliable supervision are required.
          </p>
        </div>
        <div className="area-list">
          {areas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-details">
          <p className="section-label">06 / Get a price</p>
          <h2>Send the drawings. HQ will price the access.</h2>
          <p>
            Scaffold enquiry, tender package, programme issue or urgent site support: send the scope and HQ Construct will come back with the right questions and a buildable route forward.
          </p>
          <div className="contact-list">
            <a href="tel:08444458276">08444 458276</a>
            <a href="tel:07752323271">07752 323271</a>
            <a href="mailto:scaffolding@hqconstruct.com">scaffolding@hqconstruct.com</a>
            <span>Unit 9, J2 Business Park, Bury BL9 7NY</span>
          </div>
        </div>
        <form className="quote-form">
          <h3>Quote request</h3>
          <p>Drawings welcome. Anything missing, we will come back with a question, not a guess.</p>
          <div className="form-grid">
            <label>
              First name
              <input name="first-name" type="text" />
            </label>
            <label>
              Last name
              <input name="last-name" type="text" />
            </label>
            <label>
              Company
              <input name="company" type="text" placeholder="Main contractor / PM" />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" placeholder="Best number to reach you" />
            </label>
            <label className="full">
              Email
              <input name="email" type="email" placeholder="you@company.com" />
            </label>
            <label>
              Site location
              <input name="site-location" type="text" placeholder="Postcode or area" />
            </label>
            <label>
              Package
              <select name="package" defaultValue="">
                <option value="" disabled>Select package</option>
                <option>Commercial scaffolding</option>
                <option>Temporary works access</option>
                <option>Industrial support</option>
                <option>Public protection</option>
              </select>
            </label>
            <label className="full">
              Scope & programme
              <textarea name="scope" rows={4} />
            </label>
          </div>
          <button type="submit">Send enquiry</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <img src="/assets/hqconstruct-logo.png" alt="" />
          <h2>HQ Construct Ltd</h2>
          <p>Scaffolding, access and project support for main contractors, developers and commercial site teams.</p>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#services">Commercial scaffolding</a>
          <a href="#services">Scaffold schedules</a>
          <a href="#services">Temporary works access</a>
          <a href="#safety">Safety management</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#areas">Areas</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:08444458276">08444 458276</a>
          <a href="mailto:scaffolding@hqconstruct.com">scaffolding@hqconstruct.com</a>
          <span>Bury BL9 7NY</span>
        </div>
      </footer>
    </main>
  );
}
