import React from 'react';
import logo from '../assets/logo.png';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" style={{
      backgroundColor: '#1A1A1A',
      color: 'white',
      padding: '6rem 0 2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          marginBottom: '5rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--primary-orange)', display: 'inline-block', paddingBottom: '0.5rem' }}>
              ScaleUp Agency
            </h3>
            <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '1.1rem' }}>
              "We don't just post content. We build visibility, trust, and sales for your brand."
            </p>
            <div style={{ marginTop: '2rem' }}>
               <p style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#ccc' }}>
                 <Phone size={20} color="var(--primary-orange)" /> +91 9502625975
               </p>
               <p style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#ccc' }}>
                 <Mail size={20} color="var(--primary-orange)" /> hello@scaleuponline.in
               </p>
               <p style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#ccc' }}>
                 <MapPin size={20} color="var(--primary-orange)" /> HSR Layout, Bengaluru
               </p>
            </div>
          </div>

          {/* Quick Links / Services */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--primary-orange)', display: 'inline-block', paddingBottom: '0.5rem' }}>
              Our Services
            </h3>
            <ul style={{ color: '#aaa', lineHeight: '2.5' }}>
              <li>• Brand Promotion Through Reels</li>
              <li>• Social Media Optimization</li>
              <li>• Content Management</li>
              <li>• Website & Landing Pages</li>
              <li>• Professional Shooting & Editing</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--primary-orange)', display: 'inline-block', paddingBottom: '0.5rem' }}>
              Get in Touch
            </h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" placeholder="Your Name" style={inputStyle} />
              <input type="email" placeholder="Your Email" style={inputStyle} />
              <textarea placeholder="Tell us about your brand" rows={4} style={inputStyle}></textarea>
              <button type="submit" className="btn" style={{ width: '100%', padding: '1rem' }}>Send Message</button>
            </form>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <p>&copy; {new Date().getFullYear()} ScaleUp Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const inputStyle = {
  padding: '0.8rem 1rem',
  borderRadius: '5px',
  border: '1px solid #333',
  backgroundColor: '#222',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
  width: '100%'
};

export default Footer;
