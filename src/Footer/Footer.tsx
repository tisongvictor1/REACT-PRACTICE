
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>ForexMastery</h3>
          <p>
            We help traders understand the market and become consistently profitable through simple education.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@forexmastery.com</p>
          <p>Phone: +234 814 808 1001</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ForexMastery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;