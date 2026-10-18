import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  { title: "Raqamyah", url: "https://raqamyah.com/en", desc: "Saudi-based P2P lending platform — full-stack MERN modules, REST APIs and investor dashboard." },
  { title: "Citi Ultima", url: "https://www.citibank.ae/credit-cards/travel/citi-ultima-credit-card", desc: "Banking UI for high-end travel credit card." },
  { title: "Ujjivan Bank", url: "https://www.ujjivansfb.bank.in/", desc: "Responsive banking interface." },
  { title: "Hold the Magic", url: "https://holdthemagic.com/", desc: "Shopify-based e-commerce platform." },
  { title: "Elite Shield", url: "https://www.eliteshield.com/", desc: "E-commerce application for premium gear." },
  { title: "Chocolat Moderne", url: "https://chocolatmoderne.com/", desc: "Premium chocolate e-commerce site." }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured <span>Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a href={proj.url} target="_blank" rel="noreferrer" className="view-btn">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}