import { useState } from 'react'
import emailjs from 'emailjs-com'
import SectionTitle from '../components/SectionTitle'
import {
  companyProfile,
  stats,
  gallery,
  safetyBadges,
  complianceList,
  businessHighlights,
} from '../data/siteContent'

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const posterServices = [
  {
    icon: '🚨',
    title: 'Dangerous Goods Consultant',
    desc: 'Import / Export Consultant',
    meta: 'Classification | Documentation | IATA | IMDG Compliance',
  },
  {
    icon: '📦',
    title: 'Freight Forwarding',
    desc: 'Custom Clearance',
    meta: 'Air / Sea / Land | CHA Coordination | Regulatory Support',
  },
  {
    icon: '🧪',
    title: 'Packing Service for Dangerous Goods',
    desc: 'Inner & Outer',
    meta: 'UN Approved Packaging | Labelling | Marking | Repacking',
  },
  {
    icon: '📦',
    title: 'Suppliers of UN Approved Packages',
    desc: 'Boxes / Drums / Jerricans & Hazard Labels',
    meta: 'UN Certified Packaging | All Classes | Labels & Handling Marks',
  },
  {
    icon: '🏭',
    title: 'Warehousing / Storage',
    desc: 'General & Temperature Control',
    meta: 'Dedicated DG Storage | Inventory Management',
  },
  {
    icon: '🚚',
    title: 'Loading & Unloading Contracts',
    desc: 'Hand / Forklift / Crane',
    meta: 'Trained Manpower | Safe Handling of DG Cargo',
  },
  {
    icon: '🧱',
    title: 'Palletization (wooden / plastic)',
    desc: 'Export Standard Pallets',
    meta: 'ISPM 15 Certified Wooden Pallets',
  },
  {
    icon: '📦',
    title: 'Wooden Crates, Boxes & Plywood Boxes',
    desc: 'Custom Fabrication',
    meta: 'DG Compliant | Export Worthy',
  },
  {
    icon: '🚛',
    title: 'Road Transportation',
    desc: 'Mumbai, Pune, Vapi etc.',
    meta: 'DG Compliant Vehicles | Trained Drivers | GPS Tracking',
  },
  {
    icon: '🏷️',
    title: 'Dangerous Goods Packaging & Labelling',
    desc: 'UN-Certified Packaging Solutions',
    meta: 'Compliant Labels | Secure Packing | Documentation Support',
  },
]

const dangerBadgeList = [
  '💥 Explosives',
  '🔥 Flammable',
  '🧪 Oxidizer',
  '☠️ Toxic',
  '🧪 Corrosive',
  '☢️ Radioactive',
  '⚠️ Miscellaneous',
];

export default function HomePage() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const templateParams = {
        from_name: formData.name,
        company: formData.company,
        email: formData.email,
        reply_to: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: [
          `Name: ${formData.name}`,
          `Company: ${formData.company || 'Not provided'}`,
          `Email: ${formData.email}`,
          `Phone: ${formData.phone}`,
          `Service: ${formData.service || 'Not specified'}`,
          '',
          'Message:',
          formData.message,
        ].join('\n'),
      }

      await emailjs.send(
        'service_qljnqky',
        'template_qt4twax',
        templateParams,
        'QnAPXHa8t5biScpMS'
      )

      setStatus({
        type: 'success',
        message: 'Your enquiry has been sent successfully. We will get back to you soon.',
      })
      setFormData(initialForm)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending the enquiry. Please try again or contact us directly.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-shell">
      <main className="poster-page">
        <section className="hero-poster" id="home">
          <div className="poster-grid">
            <div className="left-hero">
              <span className="hero-eyebrow"><h2>Dangerous goods &amp; Logistics</h2></span>
              <h1>SKY WAREHOUSE AND TRANSPORTS PVT. LTD.</h1>
              <p>Safe handling, global reach, and dependable cargo movement for every shipment.</p>
              <div className="hero-actions">
                <a className="primary-btn" href="#contact">Plan a Shipment <span aria-hidden="true">→</span></a>
                <a className="hero-link" href="/services">Explore services <span aria-hidden="true">↗</span></a>
              </div>
            </div>

            <div className="right-hero">
              <div className="hero-safety-card">
                <span>YOUR DANGEROUS</span>
                <span>GOODS LOGISTICS</span>
                <span>PARTNER</span>
              </div>
              <div className="hero-badge-box">
                <div className="checkmark">✓</div>
                <div>
                  <strong>COMPLIANCE</strong>
                  <strong>SAFETY</strong>
                  <strong>EFFICIENCY</strong>
                  <strong>WORLDWIDE</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-visual container" id="services">
          <div className="section-intro">
            <div>
              <span className="section-kicker">What we do</span>
              <h2>One reliable partner for every stage of your cargo journey.</h2>
            </div>
            <p>From compliant packaging to final-mile delivery, our team keeps complex logistics clear, safe, and moving.</p>
          </div>
          <div className="services-columns">
            <div className="poster-services-list">
              <h2>SERVICES WE OFFER:</h2>
              <div className="service-stack">
                {posterServices.map((service) => (
                  <div className="poster-service-item" key={service.title}>
                    <div className="mini-icon">{service.icon}</div>
                    <div className="service-copy">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <small>{service.meta}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="visual-collage">
              <div className="cargo-card cargo-1">
                <img src="https://m.media-amazon.com/images/I/61JYm9vhnyL._AC_UF350,350_QL80_.jpg" alt="Cargo ship at a port" />
              </div>
              <div className="cargo-card cargo-2">
                <img src="https://images.unsplash.com/photo-1571086291540-b137111fa1c7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Airplane ready for cargo transport" />
              </div>
              <div className="cargo-card cargo-3">
                <img src="https://images.pexels.com/photos/28520996/pexels-photo-28520996/free-photo-of-blue-freight-truck-on-desert-highway.jpeg" alt="Organized warehouse storage" />
              </div>
              <div className="cargo-card cargo-4">
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80" alt="Road freight truck transporting cargo" />
              </div>
              <div className="cargo-card cargo-5">
                <img src="https://images.unsplash.com/photo-1670121180530-cfcba4438038?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Cargo packed and ready for dispatch" />
              </div>
            </div>
          </div>
        </section>

        <section className="all-widgets container">
          <div className="danger-grid">
            {dangerBadgeList.map((item) => (
              <div className="danger-badge" key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="info-grid container">
          <div className="contact-strip">
            <div className="contact-box">
              <div className="circle-icon">👤</div>
              <div>
                <h3>Mr. Sumeet Yadav</h3>
                <p><a href="mailto:skywarehouse@gmail.com">skywarehouse@gmail.com</a></p>
                <p><a href="tel:+918828041865">+91 8828041865</a></p>
              </div>
            </div>
            <div className="contact-box">
              <div className="circle-icon">👤</div>
              <div>
                <h3>Mr. Sujeet Yadav</h3>
                <p><a href="mailto:sujeet.skygroup@gmail.com">sujeet.skygroup@gmail.com</a></p>
                <p><a href="tel:+918692918776">+91 8692918776</a></p>
              </div>
            </div>
          </div>

          <div className="address-block">
            <div className="location-pin"><a href="https://maps.app.goo.gl/EYErUBHMuRNxoFU47">📍</a></div>
            <div>
              <h3>ADDRESS:</h3>
              <p>Gala No. 10, Building No.18, Sahita Complex, Near Sakinaka Telephone Exchange Sakinaka Mumbai.</p>
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

        <section className="compliance-section" id="compliance">
          <div className="container compliance-wrap">
            <div className="compliance-copy">
              <SectionTitle eyebrow="Compliance" title="Your Dangerous Goods Logistics Partner" />
              <p>
                We provide secure and compliant handling for dangerous goods, supported by trained personnel,
                strict process controls, and established documentation standards for safe and transparent cargo movement.
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
            <div className="safety-widget">
              <div className="widget-panel">
                <h3>Why Choose Us</h3>
                <ul>
                  <li>Safe handling and secure warehousing</li>
                  <li>Route planning and regulatory support</li>
                  <li>Custom clearance and freight coordination</li>
                  <li>Dedicated DG cargo expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="business-highlights container">
          <SectionTitle eyebrow="Trust" title="Dedicated Support from Shipment Planning to Delivery" align="center" />
          <div className="highlight-grid">
            {businessHighlights.map((item) => (
              <div className="highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section container" id="gallery">
          <SectionTitle eyebrow="Our Work" title="Operations That Move Business Forward" align="center" />
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

        <section className="contact-section container" id="contact">
          <SectionTitle eyebrow="Contact" title="Request a Business Enquiry" />
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Company Details</h3>
              <ul>
                <li><strong>Contact 1:</strong> {companyProfile.contact.primaryEmail}</li>
                <li><strong>Phone 1:</strong> {companyProfile.contact.primaryPhone}</li>
                <li><strong>Contact 2:</strong> {companyProfile.contact.secondaryEmail}</li>
                <li><strong>Phone 2:</strong> {companyProfile.contact.secondaryPhone}</li>
                <li><strong>GST No:</strong> 23439042h343k450h023</li>
                <li><strong>Address:</strong> {companyProfile.address}</li>
                <li><strong><img src="/image-removebg-preview.png" alt="Company Logo" /></strong></li>
              </ul>
            </div>
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="input-row">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" />
              </div>
              <div className="input-row">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
              </div>
              <input type="text" name="service" value={formData.service} onChange={handleChange} placeholder="Service Needed" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="5" required></textarea>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="primary-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
