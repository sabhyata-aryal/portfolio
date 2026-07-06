import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services">
      <p className="section-label fade-up">04 · What I Offer</p>
      <h2 className="section-title fade-up">
        <em>Services</em>
      </h2>

      <div className="services-list">
        {services.map((service) => (
          <div key={service.num} className="service-row fade-up">
            <span className="service-num-big">{service.num}</span>
            <div className="service-body">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="service-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}
