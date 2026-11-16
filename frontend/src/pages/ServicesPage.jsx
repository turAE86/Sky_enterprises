import SectionTitle from '../components/SectionTitle'
import { serviceGroups, complianceList, safetyBadges } from '../data/siteContent'

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <SectionTitle eyebrow="Our Services" title="Comprehensive Logistics and Dangerous Goods Solutions" />
        </div>
      </section>

      <section className="container content-section">
        <div className="services-grid page-services-grid">
          {serviceGroups.map((service) => (
            <article className="service-panel" key={service.title}>
              <div className="icon-pill">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container content-section">
        <SectionTitle eyebrow="Compliance" title="Safety and Regulatory Standards" />
        <div className="info-panel">
          <ul className="compliance-list">
            {complianceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="badge-grid">
            {safetyBadges.map((badge) => (
              <span className="badge" key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
