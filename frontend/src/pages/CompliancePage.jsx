import SectionTitle from '../components/SectionTitle'
import { complianceList, safetyBadges } from '../data/siteContent'

export default function CompliancePage() {
  return (
    <main className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <SectionTitle eyebrow="Compliance" title="Safer Shipping, Safer Handling, Safer Business" />
        </div>
      </section>

      <section className="container content-section">
        <div className="info-panel">
          <p>
            We handle dangerous and regulated goods with focused operational discipline, trained manpower,
            and documented safety procedures that meet international standards.
          </p>
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
