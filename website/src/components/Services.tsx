import React from 'react';
import { motion } from 'framer-motion';
import { Video, Share2, PenTool, Layout, Camera, BarChart } from 'lucide-react';

const servicesData = [
  {
    icon: <Share2 size={32} />,
    title: "Social Media Management",
    description: "Strategic management of social media platforms to build brand awareness.",
    features: ["End-to-End Handling", "Growth Optimization", "Platform Specific Strategy"]
  },
  {
    icon: <Video size={32} />,
    title: "Content Creation Expertise",
    description: "Professional video production and creative content tailored for social platforms.",
    features: ["Short-form (Reels/Shorts)", "Promotional Videos", "Video Editing & Post-production"]
  },
  {
    icon: <BarChart size={32} />,
    title: "Performance Marketing",
    description: "Targeted advertising campaigns designed to generate leads and traffic.",
    features: ["Meta Ads Management", "Lead Generation focus", "Conversion Optimization"]
  },
  {
    icon: <PenTool size={32} />,
    title: "Branding & Creative Design",
    description: "Developing strong visual identities including logos and brand guidelines.",
    features: ["Visual Identity Design", "Brand Guidelines", "Creative Assets"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" style={{ backgroundColor: '#fff', padding: '8rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="section-title">Our Digital <span style={{ color: 'var(--primary-orange)' }}>Marketing Services</span></h2>
          <p className="section-subtitle">
            We combine creativity, strategy, and performance marketing to deliver real growth.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ textAlign: 'left', padding: '2.5rem' }}
            >
              <div style={{ color: 'var(--primary-orange)', marginBottom: '1.5rem' }}>
                {service.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem', fontWeight: '800' }}>{service.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '2rem' }}>{service.description}</p>
              <ul style={{ padding: 0, margin: 0 }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '0.8rem', 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#444'
                  }}>
                    <span style={{ color: 'var(--primary-orange)', marginRight: '0.75rem' }}>•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
