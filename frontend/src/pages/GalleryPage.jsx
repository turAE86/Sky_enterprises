import SectionTitle from '../components/SectionTitle'
import { gallery } from '../data/siteContent'

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <SectionTitle eyebrow="Gallery" title="Our Logistics Operations" />
        </div>
      </section>

      <section className="container content-section">
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
