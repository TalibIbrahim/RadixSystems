import { FiLinkedin, FiTwitter, FiGithub, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-company">
            <h3 className="footer-title">radix systems<span className="footer-accent">.</span></h3>
            <p className="footer-desc">
              Delivering innovative software solutions that transform businesses and drive digital success.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn" className="footer-icon"><FiLinkedin /></a>
              <a href="#" aria-label="Twitter" className="footer-icon"><FiTwitter /></a>
              <a href="#" aria-label="GitHub" className="footer-icon"><FiGithub /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-list">
              <li><a href="#">Custom Software Development</a></li>
              <li><a href="#">Cloud Solutions</a></li>
              <li><a href="#">Mobile App Development</a></li>
              <li><a href="#">AI &amp; Machine Learning</a></li>
              <li><a href="#">IT Consulting</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <FiMapPin className="contact-icon" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li>
                <FiPhone className="contact-icon" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <FiMail className="contact-icon" />
                <a href="mailto:info@radixsystems.com">info@radixsystems.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Radix Systems. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
              