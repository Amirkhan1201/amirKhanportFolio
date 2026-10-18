import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    company: "COMPUNET CONNECTIONS",
    role: "Software Engineer (MERN Stack)",
    period: "Jan. 2025 – Jun. 2026",
    location: "Chennai",
    points: [
      <>Developed full-stack modules for Raqamyah, a Saudi-based P2P lending platform, using <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong> and <strong>Node.js</strong>, along with <strong>Next.js</strong> and <strong>TypeScript</strong>.</>,
      <>Built <strong>RESTful APIs</strong> with <strong>Node.js</strong> and <strong>Express.js</strong> for loan, investment and KYC verification modules, following <strong>MVC architecture</strong>.</>,
      <>Designed <strong>MongoDB</strong> collections and <strong>Mongoose</strong> schemas for users, loans and investments, with validation and indexing for faster queries.</>,
      <>Implemented <strong>JWT-based authentication</strong> and <strong>Express middleware</strong> for request validation, role-based access and centralized error handling.</>,
      <>Developed the public website and investor/borrower dashboard with <strong>React.js</strong>, <strong>Redux Toolkit</strong> and <strong>Material UI</strong>, integrating backend APIs for real-time data.</>,
      <>Implemented <strong>server-side rendering (SSR)</strong> and dynamic routing with <strong>Next.js</strong> to improve page load speed and <strong>SEO</strong>.</>,
      <>Improved performance using lazy loading, code splitting and memoization (<strong>React.memo</strong>, <strong>useMemo</strong>, <strong>useCallback</strong>).</>
    ]
  },
  {
    company: "XERAGO",
    role: "Associate Developer",
    period: "Jan. 2024 – Jan. 2025",
    location: "Chennai",
    points: [
      <>Developed responsive banking UIs for Citi Ultima and Ujjivan Bank using <strong>React.js</strong>, with cross-browser compatibility and accessibility considerations.</>,
      <>Built Single Page Applications using <strong>React Router</strong> and contributed reusable <strong>React components</strong> for Ujjivan Bank's core platform.</>,
      <>Managed frontend development for EDM campaigns, image handling pipelines, and vanity URL systems; also contributed to a custom <strong>LMS platform</strong> for internal employee training.</>,
      <>Optimized frontend <strong>API consumption patterns</strong> to support efficient application performance and real-time data updates.</>
    ]
  },
  {
    company: "INNOPPL",
    role: "Junior Software Engineer",
    period: "Aug. 2022 – Sep. 2023",
    location: "Chennai",
    points: [
      <>Developed Shopify e-commerce solutions for Hold the Magic and Elite Shield using <strong>React.js</strong> and <strong>Shopify Liquid</strong>.</>,
      <>Built reusable and user-friendly UI components with form validation and responsive layouts.</>,
      <>Improved <strong>page speed</strong> through image optimization and <strong>lazy loading</strong> strategies.</>,
      <>Implemented mobile-responsive and <strong>SEO-friendly interfaces</strong> across e-commerce applications.</>
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Work <span>Experience</span>
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company} <span>| {exp.location}</span></h4>
              <span className="period">{exp.period}</span>
              <ul>
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}