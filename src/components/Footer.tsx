import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoLocationOutline, IoCallOutline, IoMailOutline, } from 'react-icons/io5';
import { Send, Settings } from "lucide-react";


interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Our Services",
      links: [
        { name: "Custom Furniture Manufacturing", href: "/services/custom-manufacturing" },
        { name: "Upholstery Services", href: "/services/upholstery" },
        { name: "Curtains & Blinds", href: "/services/curtains-blinds" },
        { name: "Furniture Paintwork", href: "/services/paintwork" },
        { name: "Textile Sourcing", href: "/services/textile-sourcing" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Delta Furniture", href: "/about" },
        { name: "Our Philosophy", href: "/philosophy" },
        { name: "Quality Standards", href: "/quality" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "/contact" }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <div className="logo">
            <span className="company-name">Delta Furniture</span>
          </div>
          
          <p className="company-description">
            Crafting luxury furniture with precision, care, and uncompromising quality since our inception.
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <IoLocationOutline className="contact-icon" />
              <div>
                <strong>Dubai, UAE</strong>
                <p>Premium Manufacturing District</p>
              </div>
            </div>
            
            <div className="contact-item">
              <IoCallOutline className="contact-icon" />
              <div>
                <strong>+971 XX XXX XXXX</strong>
                <p>24/7 Customer Support</p>
              </div>
            </div>
            
            <div className="contact-item">
              <IoMailOutline className="contact-icon" />
              <div>
                <strong>info@deltafurniture.ae</strong>
                <p>Get Your Quote Today</p>
              </div>
            </div>
          </div>
        </div>

        {footerSections.map((section, index) => (
          <div key={index} className="footer-section">
            <h3 className="links-title">{section.title}</h3>
            <ul className="footer-links">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-section newsletter">
          <h3 className="links-title">Stay Updated</h3>
          <p className="newsletter-description">
            Subscribe to our newsletter for the latest furniture trends and exclusive offers.
          </p>
          
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button type="button" aria-label="Subscribe to newsletter" className="subscribe-btn">
              <Send size={18} className="btn-icon" />
            </button>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
            <a href="#" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-left">
            <div className="logo-small">
              <div className='setting-icon'>
              <Settings size={24} />
            </div>

              <span>Delta Furniture</span>
            </div>
            <span className="copyright">© 2024 Delta Furniture. All rights reserved.</span>
          </div>
          
          <div className="footer-bottom-right">
            <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
            <a href="/terms" className="footer-bottom-link">Terms of Service</a>
            <span className="made-in">
              Made in <strong>Dubai</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;