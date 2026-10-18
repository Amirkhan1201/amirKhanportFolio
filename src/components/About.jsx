import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About <span>Me</span>
      </motion.h2>

      <div className="about-container">
        {/* Left Side: Dev Persona Card */}
        <motion.div 
          className="about-card terminal-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">amir.config.js</span>
          </div>
          <div className="terminal-body">
            <p><span className="keyword">const</span> <span className="variable">developer</span> = &#123;</p>
            <p className="indent"><span className="property">name</span>: <span className="string">"Amir Khan J"</span>,</p>
            <p className="indent"><span className="property">role</span>: <span className="string">"MERN Stack Developer"</span>,</p>
            <p className="indent"><span className="property">location</span>: <span className="string">"Chennai, India"</span>,</p>
            <p className="indent"><span className="property">expertise</span>: <span className="string">["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "TypeScript"]</span>,</p>
            <p className="indent"><span className="property">focus</span>: <span className="string">"Scalable MERN Stack Web Applications"</span></p>
            <p>&#125;;</p>
          </div>
        </motion.div>

        {/* Right Side: Engaging Story & Philosophy */}
        <motion.div 
          className="about-card story-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Who Is Amir</h3>
          <p>
            I’m a MERN Stack Developer based in Chennai with 3.7 years of experience building scalable, high-performance web applications across fintech, banking, and e-commerce domains.
          </p>
          <p>
            From crafting responsive UIs with React.js and Next.js to designing MongoDB schemas and building secure RESTful APIs with Node.js and Express.js, I handle applications end-to-end with a strong focus on clean architecture, security and performance.
          </p>
          
          <div className="about-highlights-grid">
            <div className="highlight-box">
              <h4>⚡ MERN Execution</h4>
              <p>Building end-to-end features across MongoDB, Express.js, React.js and Node.js.</p>
            </div>
            <div className="highlight-box">
              <h4>🏦 Enterprise Portals</h4>
              <p>Developing secure, high-performance interfaces for banking, fintech, and e-commerce platforms.</p>
            </div>
            <div className="highlight-box">
              <h4>🔗 APIs &amp; Databases</h4>
              <p>Designing MongoDB schemas, REST APIs, JWT authentication and Express middleware.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}