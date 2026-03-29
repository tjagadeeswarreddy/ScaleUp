import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <section style={{ padding: '8rem 0', backgroundColor: 'var(--primary-orange)', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>Ready to Scale Your Business?</h2>
            <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto 3rem', opacity: 0.9 }}>
              Scaleup is here to help you achieve powerful digital growth through strategic marketing and creative content.
            </p>
            <a href="#contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-orange)', fontSize: '1.5rem' }}>
              Let's Scale Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
