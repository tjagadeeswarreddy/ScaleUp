import React from 'react';
import { motion } from 'framer-motion';
import { User, FileText, TrendingUp } from 'lucide-react';

const VisionCard = ({ icon: Icon, title, highlight }: { icon: any, title: string, highlight: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="feature-card"
  >
    <div style={{ color: 'var(--primary-orange)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
      <Icon size={48} strokeWidth={1.5} />
    </div>
    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', lineHeight: '1.4' }}>
      {title} <br />
      <span style={{ color: 'var(--primary-orange)' }}>{highlight}</span>
    </h3>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '8rem 0', backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center',
          marginBottom: '8rem' 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>About <span style={{ color: 'var(--primary-orange)' }}>ScaleUP</span></h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555' }}>
              ScaleUP is a digital marketing agency dedicated to helping brands grow through 
              strategic content, innovative campaigns, and performance-driven solutions.
            </p>
            <p style={{ fontSize: '1.1rem', marginTop: '2rem', color: '#777', fontStyle: 'italic' }}>
              Digital Marketing • Content Creation • Performance Growth
            </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             style={{
               background: 'var(--bg-light)',
               padding: '3rem',
               borderRadius: '30px',
               border: '1px solid #EEE',
               textAlign: 'center'
             }}
          >
            <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Why <span style={{ color: 'var(--primary-orange)' }}>ScaleUP</span>?</h3>
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--primary-orange)' }}></div>
                <p style={{ fontWeight: '700', margin: 0 }}>Result-Driven Approach</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--primary-orange)' }}></div>
                <p style={{ fontWeight: '700', margin: 0 }}>Data-Based Marketing</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--primary-orange)' }}></div>
                <p style={{ fontWeight: '700', margin: 0 }}>End-to-End Digital Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Our Vision & <span style={{ color: 'var(--primary-orange)' }}>Mission</span></h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <VisionCard icon={User} title="Build Powerful" highlight="Digital Brands" />
          <VisionCard icon={FileText} title="Deliver Measurable" highlight="Marketing Results" />
          <VisionCard icon={TrendingUp} title="Drive Growth Through" highlight="Creativity & Strategy" />
        </div>
      </div>
    </section>
  );
};

export default About;
