"use client";

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, MessageCircle } from "lucide-react";


interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  serviceInterest: string;
  message: string;
}


const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceInterest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Form submitted:', formData);

      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        serviceInterest: '',
        message: ''
      });

      alert('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <div className="subtitle">
            <span className="badge-icon">
              <MessageCircle size={18} />
            </span>
            Get In Touch
          </div>
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-subtitle">
            Ready to transform your space? Get in touch with our team of expert craftsmen
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <h3 className="form-title">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+971 50 123 4567"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="serviceInterest">Service Interest</label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="furniture">Custom Furniture</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                <span className="btn-icon">
                  <Send size={20} className="btn-icon" />

                </span>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3 className="info-title">Get in Touch</h3>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div className="info-content">
                  <h4>Call Us</h4>
                  <p>+971 50 123 4567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div className="info-content">
                  <h4>Email Us</h4>
                  <p>info@deltafurniture.ae</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div className="info-content">
                  <h4>Visit Us</h4>
                  <p>Al Quoz Industrial Area, Dubai</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Clock size={20} /></div>
                <div className="info-content">
                  <h4>Working Hours</h4>
                  <p>Sun - Thu: 8AM - 6PM</p>
                </div>
              </div>

            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-icon">
                  <MapPin size={44} className="info-icon" />

                </div>
                <h4>Interactive Map Coming Soon</h4>
                <p>Al Quoz Industrial Area, Dubai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;