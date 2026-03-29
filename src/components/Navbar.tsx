import React from 'react';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      boxShadow: '0 2px 20px rgba(0,0,0,0.05)'
    }}>
      <div className="container nav-container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.8rem 2rem'
      }}>
        <motion.div 
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img src={logo} alt="ScaleUp Logo" style={{ height: '60px', width: 'auto' }} />
        </motion.div>
        
        <ul className="nav-links" style={{ 
          display: 'flex', 
          gap: '2.5rem',
          fontWeight: '600',
          fontSize: '0.95rem',
          color: '#1A1A1A'
        }}>
          <li><motion.a whileHover={{ color: 'var(--primary-orange)' }} href="#about">About</motion.a></li>
          <li><motion.a whileHover={{ color: 'var(--primary-orange)' }} href="#services">Services</motion.a></li>
          <li><motion.a whileHover={{ color: 'var(--primary-orange)' }} href="#process">Process</motion.a></li>
          <li><motion.a whileHover={{ color: 'var(--primary-orange)' }} href="#contact">Contact</motion.a></li>
        </ul>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="btn"
        >
          Get Started
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
