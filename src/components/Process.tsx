import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Image, Rocket, BarChart2, FileText } from 'lucide-react';

const steps = [
  {
    icon: <Search />,
    title: "Business Analysis",
    description: "Understanding your brand, goals, and target audience."
  },
  {
    icon: <PenTool />,
    title: "Strategy Development",
    description: "Creating a customized digital marketing plan."
  },
  {
    icon: <Image />,
    title: "Content Creation",
    description: "Producing high-quality visuals and engaging content."
  },
  {
    icon: <Rocket />,
    title: "Campaign Launch",
    description: "Running marketing campaigns across selected platforms."
  },
  {
    icon: <BarChart2 />,
    title: "Optimization",
    description: "Monitoring performance and optimizing campaigns."
  },
  {
    icon: <FileText />,
    title: "Reporting",
    description: "Providing detailed performance reports and insights."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" style={{ padding: '8rem 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="section-title">Our Strategic <span style={{ color: 'var(--primary-orange)' }}>Work Process</span></h2>
          <p className="section-subtitle">
            A proven, results-driven system to take your brand from concept to conversion.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="process-step"
            >
              <div className="step-number">{index + 1}</div>
              <div>
                <div style={{ color: 'var(--primary-orange)', marginBottom: '0.75rem' }}>
                  {React.cloneElement(step.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
