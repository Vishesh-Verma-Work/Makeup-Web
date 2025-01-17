import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Services Section */}
        <div className="footer__column">
          <h3 className="footer__heading">Our Services</h3>
          <ul className="footer__list">
            <li>Bridal Makeup</li>
            <li>Party Makeup</li>
            <li>Hairstyling</li>
            <li>Makeup Classes</li>
            <li>Photo Shoot Makeup</li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer__column">
          <h3 className="footer__heading">Follow Us</h3>
          <ul className="footer__socials">
            <li>
              <a href="https://www.instagram.com/mak.eoverbyakanksha?igsh=MXExM2wzcGxzZ2dubw==" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer__column">
          <h3 className="footer__heading">Contact Us</h3>
          <ul className="footer__list">
            <li>Email: info@makeupartist.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Location: New York, USA</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2025 Makeup Artist. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
