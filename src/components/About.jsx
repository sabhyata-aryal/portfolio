export default function About() {
  return (
    <section id="about">
      <p className="section-label fade-up">01 · About</p>
      <h2 className="section-title fade-up">
        About <em>Me</em>
      </h2>

      <div className="about-grid">
        <div className="fade-up">
          <div className="about-portrait-box tilt">
            <img
              src="https://i.postimg.cc/qRTVYhTv/portfolio-profile.png"
              alt="Portrait of Sabhyata Aryal"
              className="portrait-photo"
            />
          </div>

          <div className="about-details">
            <div className="detail-row">
              <span className="detail-label">Based in</span>
              <span className="detail-value">Kathmandu, Nepal</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Focus</span>
              <span className="detail-value">UI/UX Design</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Tools</span>
              <span className="detail-value">Figma · Canva · Git</span>
            </div>
          </div>
        </div>

        <div className="about-content fade-up">
          <h3 className="about-lede">
            Designing with <em>empathy</em>,<br />
            building with <em>code</em>.
          </h3>
          <p>
            I am an aspiring UI/UX designer specialising in crafting user-centred interfaces, from
            research and wireframing through to high-fidelity Figma prototypes.
          </p>
          <p>
            My background in code lets me design with real constraints in mind: performance, feasibility,
            and the small interaction details that make products feel alive. I care about typography,
            rhythm, and the quiet decisions that separate <em>good</em> from <em>considered</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
