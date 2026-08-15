import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    company: "COMPUNET CONNECTIONS",
    role: "Full Stack Developer",
    period: "Jan. 2025 – Jun. 2026",
    location: "Chennai",
    points: [
      <>Developed full-stack features for Raqamyah, a Saudi-based P2P lending platform, using <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>Express.js</strong>.</>,
      <>Developed and integrated <strong>REST APIs</strong> using <strong>Node.js</strong> and <strong>Express.js</strong> for frontend-backend communication, including asynchronous request handling, <strong>middleware integration</strong>, and JSON-based data exchange.</>,
      <>Built responsive and reusable <strong>React.js</strong> UI components using <strong>Material UI (MUI)</strong>, maintaining consistent layouts and responsive behavior across screen sizes.</>,
      <>Worked on frontend development with a focus on <strong>SEO</strong> and <strong>page-speed optimization</strong> to improve search visibility and overall web performance.</>,
      <>Optimized <strong>React</strong> application performance using lazy loading, code splitting, memoization, conditional rendering, <strong>React.memo</strong>, <strong>useMemo</strong>, and <strong>useCallback</strong>.</>,
      <>Collaborated with Product, QA, and Engineering teams to translate requirements into scalable full-stack features and participated in GitHub/Bitbucket pull-request workflows.</>
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