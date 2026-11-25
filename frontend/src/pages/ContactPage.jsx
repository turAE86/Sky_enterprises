import { useState } from 'react'
import emailjs from 'emailjs-com'
import { companyProfile } from '../data/siteContent'

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function ContactPage() {
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
    <main className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="container content-section contact-page-layout">
        <div className="contact-card large-contact-card">
          <h3>Company Details</h3>
          <ul>
            <li><strong>Email:</strong> {companyProfile.contact.primaryEmail}</li>
            <li><strong>Phone:</strong> {companyProfile.contact.primaryPhone}</li>
            <li><strong>Alternate Email:</strong> {companyProfile.contact.secondaryEmail}</li>
            <li><strong>Alternate Phone:</strong> {companyProfile.contact.secondaryPhone}</li>
            <li><strong>Address:</strong> {companyProfile.address}</li>
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
      </section>
    </main>
  )
}
