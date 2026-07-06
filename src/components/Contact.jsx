import { contactLinks } from '../data/content';

export default function Contact() {
  return (
    <section id="contact">
      <p className="section-label" style={{ color: 'var(--accent)' }}>
        05 · Let&apos;s Connect
      </p>
      <h2 className="contact-headline">
        Have a project <br />
        <em>in mind?</em>
      </h2>
      <p className="contact-sub">
        Open to internships, freelance design projects, and collaborations.
        <br />
        Let&apos;s build something great together.
      </p>

      <div className="contact-links">
        {contactLinks.map(({ href, icon, label }) => (
          <a key={href} href={href} className="contact-link magnetic" data-cursor="link">
            <span>{icon}</span> {label}
          </a>
        ))}
      </div>

      <p className="footer-note">
        © Sabhyata Aryal · Kathmandu, Nepal · Designed &amp; built with care
      </p>
    </section>
  );
}
