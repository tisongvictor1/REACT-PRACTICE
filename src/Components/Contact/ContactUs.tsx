
import"./ContactUs.css"

const ContactUs = () => {
  return (
    <div>
      
      
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>We’re here to help you grow as a trader.</p>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Your Message"></textarea>

        <button>Send Message</button>

        <div className="social">
          <span>Google</span>
          <span>LinkedIn</span>
          <span>Twitter</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactUs
