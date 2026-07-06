import LocalTime from './LocalTime';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-text" aria-hidden="true">
        Design&nbsp;·&nbsp;Design
      </div>
      <div className="hero-orb" aria-hidden="true" />

      <div className="hero-inner">
        <h1 className="hero-name">
          <span className="line">
            <span className="word" data-text="Sabhyata">
              Sabhyata
            </span>
            <span className="word word-delay" data-text="Aryal">
              Aryal
            </span>
            <span className="hero-star">✦</span>
          </span>
        </h1>

        <div className="hero-role">
          <span className="role-text">UI/UX Designer</span>
        </div>

        <p className="hero-sub">
          Creating intuitive, human-centred digital experiences, from early wireframes and research
          to polished, interactive Figma prototypes.
        </p>

        <div className="hero-cta-row">
          <a href="#work" className="btn-primary magnetic" data-cursor="link">
            <span>View My Work</span>
            <span className="btn-arrow">→</span>
          </a>
          <a href="#contact" className="btn-outline magnetic" data-cursor="link">
            <span>Get In Touch</span>
          </a>
        </div>

        <div className="hero-meta">
          <div>
            <span className="meta-k">Based</span>
            <span className="meta-v">Kathmandu, NP</span>
          </div>
          <div>
            <span className="meta-k">Local</span>
            <LocalTime />
          </div>
          <div>
            <span className="meta-k">Focus</span>
            <span className="meta-v">Product · UX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
