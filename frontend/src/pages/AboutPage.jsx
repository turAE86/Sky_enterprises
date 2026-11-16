import SectionTitle from '../components/SectionTitle'
import { companyProfile, businessHighlights, stats } from '../data/siteContent'

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <SectionTitle eyebrow="About Us" title="Trusted Logistics Partner for Safe Cargo Movement" />
        </div>
      </section>

      <section className="container content-section">
        <div className="content-grid two-col">
          <div>
            <p>{companyProfile.about}</p>
            <p>{companyProfile.mission}</p>
          </div>
          <div className="info-panel">
            <h3>Our Vision</h3>
            <p>{companyProfile.vision}</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div className="stat-box" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container content-section">
        <SectionTitle eyebrow="Why We Stand Out" title="Operational Excellence with Compliance at the Core" align="center" />
        <div className="highlight-grid">
          {businessHighlights.map((item) => (
            <div className="highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
