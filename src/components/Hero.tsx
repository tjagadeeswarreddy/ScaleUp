import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/hero-video.mp4';

const Hero: React.FC = () => {
  return (
    <section style={{
      padding: '8rem 0',
      backgroundColor: '#FFFFFF',
      overflow: 'hidden'
    }}>
      <div className="container hero-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        alignItems: 'center',
        gap: '4rem'
      }}>
        
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title" style={{ 
            fontSize: '3.5rem', 
            fontWeight: '900', 
            lineHeight: '1.1',
            marginBottom: '1.5rem', 
            color: '#1A1A1A'
          }}>
            We Build <span style={{ color: 'var(--primary-orange)' }}>Brands</span>.<br />
            We Grow <span style={{ color: 'var(--primary-orange)' }}>Businesses</span>.
          </h1>
          <p className="hero-subtitle" style={{ 
            fontSize: '1.25rem', 
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '2.5rem',
            maxWidth: '550px'
          }}>
            "We don’t just post content. We build visibility, trust, and sales for your brand."
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="btn" 
              style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
            >
              Start Growing Now
            </motion.a>
            <motion.a 
              whileHover={{ backgroundColor: '#f9f9f9' }}
              href="#services" 
              style={{ 
                fontSize: '1.1rem', 
                padding: '1rem 2.5rem', 
                borderRadius: '5px',
                fontWeight: '600',
                border: '2px solid #EEE',
                color: '#333'
              }}
            >
              See Our Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div className="phone-frame" style={{
            width: '280px',
            height: '560px',
            backgroundColor: '#000',
            borderRadius: '40px',
            border: '12px solid #222',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 50px 100px -20px rgba(0,0,0,0.15)',
            zIndex: 2
          }}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
