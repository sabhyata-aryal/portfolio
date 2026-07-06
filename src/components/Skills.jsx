import { skills } from '../data/content';

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label fade-up">03 · Expertise</p>
      <h2 className="section-title fade-up">
        Design <em>Skills</em>
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.title} className="skill-block fade-up">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-block-title">{skill.title}</h3>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
