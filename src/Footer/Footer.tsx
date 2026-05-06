import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>ForexMastery</h3>
          <p>
            We help traders understand the market and become consistently
            profitable through simple education.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:support@forexmastery.com">
              support@forexmastery.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+2348148081001">+234 814 808 1001</a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ForexMastery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;