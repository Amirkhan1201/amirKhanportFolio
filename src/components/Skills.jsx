import { motion } from 'framer-motion';
import './Skills.css';

const skillIcons = {
  "React.js": <svg viewBox="-11.5 -10.23174 23 20.46348" width="24" height="24"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>,
  "JavaScript (ES6+)": <svg viewBox="0 0 630 630" width="22" height="22"><rect width="630" height="630" fill="#f7df1e"/><path d="m423.2 492.1c12.6 20.9 20.9 35.9 42.1 35.9 19.3 0 31.5-9.3 31.5-31.5v-254.4h-64.3v245.4c0 10.5-5.3 14.8-14.8 14.8-7 0-11.9-3.5-17.5-10.5l-24.5 21.3zm-192.5-43c22.4 14 47.6 23.1 76.3 23.1 35.7 0 58.1-15.4 58.1-44.8 0-25.2-16.1-36.4-55.3-53.2-30.8-13.3-51.1-28.7-51.1-60.9 0-29.4 22.4-51.1 57.4-51.1 25.2 0 46.2 8.4 64.4 23.8l-20.3 25.2c-15.4-11.2-34.3-17.5-44.1-17.5-16.8 0-26.6 9.8-26.6 22.4 0 18.2 13.3 25.2 46.2 39.2 37.8 16.8 60.2 35 60.2 68.6 0 35.7-25.9 57.4-65.1 57.4-28 0-54.6-10.5-76.3-26.6l21.7-24.2z"/></svg>,
  "HTML5": <svg viewBox="0 0 512 512" width="22" height="22"><path fill="#e34f26" d="M107.644 471.266L43.414 74.451h425.172l-64.23 396.815-148.358 41.155z"/><path fill="#f16529" d="M256 449.626l123.633-34.298 54.498-336.852H256z"/><path fill="#fff" d="M256 223.364H161.76l-6.425-42.662H256V136.04H98.986l19.277 127.974H256zm0 131.782l-.46.126-53.111-14.331-3.396-22.564h-42.348l6.787 45.13 89.28 24.775.448-.126z"/></svg>,
  "CSS3": <svg viewBox="0 0 512 512" width="22" height="22"><path fill="#1572b6" d="M107.644 471.266L43.414 74.451h425.172l-64.23 396.815-148.358 41.155z"/><path fill="#33a9dc" d="M256 449.626l123.633-34.298 54.498-336.852H256z"/><path fill="#fff" d="M256 223.364H161.76l-6.425-42.662H256V136.04H98.986l19.277 127.974H256zm0 131.782l-.46.126-53.111-14.331-3.396-22.564h-42.348l6.787 45.13 89.28 24.775.448-.126z"/></svg>,
  "Redux Toolkit": <svg viewBox="0 0 128 128" width="22" height="22"><path fill="#764abc" d="M113.8 59.2c-3.3-6.5-7.8-12.2-13.3-16.7-7-5.7-15.5-9-24.6-9.4-9.4-.4-18.7 2.2-26.3 7.5-6.2 4.3-11 10.3-13.8 17.3-3.2 8-3.8 17-.1 25.4 3.6 8.4 10.2 15 18.5 18.9 8.3 3.9 17.8 4.6 26.6 1.8 1.9-.6 3.1-2.6 2.5-4.5-.6-1.9-2.6-3.1-4.5-2.5-7 2.2-14.7 1.6-21.3-1.5-6.6-3.1-11.9-8.4-14.8-15s-3-14.1-.1-21c2.9-6.9 7.6-12 13.5-15.8 6-3.9 13.1-5.9 20.3-5.6 7.2.3 14.1 3 19.8 7.8 4.6 3.8 8.3 8.6 11 14l-14.2 8.2c-1.7 1-2.3 3.2-1.3 4.9 1 1.7 3.2 2.3 4.9 1.3l17.7-10.2c1.4-.8 2.2-2.3 2.1-3.9-.1-1.6-1.1-3-2.6-3.6z"/></svg>,
  "Material UI": <svg viewBox="0 0 24 24" width="22" height="22"><path fill="#007fff" d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm-10 2.5v4.5l10 5 10-5v-4.5l-10 5-10-5z"/></svg>,
  "MongoDB": <svg viewBox="0 0 24 24" width="22" height="22"><path fill="#47a248" d="M12.55 1.1c-.2-.4-.4-.8-.55-1.1-.15.3-.35.7-.55 1.1C9.6 4.2 5.5 7.4 5.5 13c0 4.1 2.8 7.4 5.9 8.5l.35 2.5h.5l.35-2.5c3.1-1.1 5.9-4.4 5.9-8.5 0-5.6-4.1-8.8-5.95-11.9zM12.3 20.3h-.6V5.6c.1.2.2.4.3.5.1-.1.2-.3.3-.5z"/></svg>,
  "Express.js": <svg viewBox="0 0 24 24" width="22" height="22"><text x="12" y="16" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="currentColor">ex</text></svg>,
  "Next.js": <svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="11" fill="#000" stroke="#fff" strokeWidth="1"/><path fill="#fff" d="M9 7h1.6l5.4 8V7h1.4v10h-1.5L10.4 9.2V17H9z"/></svg>,
  "TypeScript": <svg viewBox="0 0 24 24" width="22" height="22"><rect width="24" height="24" rx="3" fill="#3178c6"/><text x="13.5" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#fff">TS</text></svg>,
  "Node.js": <svg viewBox="0 0 256 296" width="22" height="22"><path fill="#339933" d="M128 0l110.641 63.923v127.846L128 255.692 17.359 191.769V63.923L128 0zm0 30.923L42.179 80.5v135l85.821 49.577 85.821-49.577v-135L128 30.923zm0 36.308l58.154 33.577v67.154L128 201.538l-58.154-33.577v-67.154L128 67.23z"/></svg>,
  "REST APIs": <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7h-9m3 10H4m10-5a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  "Postman": <svg viewBox="0 0 512 512" width="22" height="22"><path fill="#ff6c37" d="M0 256c0 141.4 114.6 256 256 256s256-114.6 256-256S397.4 0 256 0 0 114.6 0 256zm279.1-137.9c16.3 0 29.5 13.2 29.5 29.5 0 16.3-13.2 29.5-29.5 29.5-16.3 0-29.5-13.2-29.5-29.5 0-16.3 13.2-29.5 29.5-29.5zm-88.6 0c16.3 0 29.5 13.2 29.5 29.5 0 16.3-13.2 29.5-29.5 29.5-16.3 0-29.5-13.2-29.5-29.5 0-16.3 13.2-29.5 29.5-29.5z"/></svg>,
  "Git": <svg viewBox="0 0 256 256" width="22" height="22"><path fill="#f05032" d="M239.54 111.97L144.03 16.46a24.08 24.08 0 00-34.06 0L86.6 39.83l31.42 31.42a20 20 0 0122.9 3.93l18.49-18.49a12 12 0 0116.97 17l-21.41 21.41a20 20 0 01-3.13 21.84l-29.6 29.6a20 20 0 01-28.28 0l-5.66-5.66a20 20 0 010-28.28l12.1-12.1a24 24 0 000-33.94L66.72 49.37 16.46 99.63a24.08 24.08 0 000 34.06l95.51 95.51a24.08 24.08 0 0034.06 0l93.51-93.51a24.08 24.08 0 000-33.72z"/></svg>,
  "GitHub": <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
  "VS Code": <svg viewBox="0 0 24 24" width="22" height="22"><path fill="#007acc" d="M17.5 2.5l-11 5.5v9l11 5.5 4.5-2.5v-13l-4.5-2.5zM7.5 16V8l8.5 4-8.5 4z"/></svg>
};

const loopSkills = [
  "MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "TypeScript",
  "JavaScript (ES6+)", "Redux Toolkit", "HTML5", "CSS3", "Material UI",
  "REST APIs", "Git", "GitHub", "Postman", "VS Code"
];

const skillsData = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Middleware", "MVC Architecture"] },
  { category: "Database", items: ["MongoDB", "Mongoose"] },
  { category: "State Management", items: ["Redux Toolkit", "Context API"] },
  { category: "UI Libraries", items: ["Material UI", "Tailwind CSS", "Bootstrap"] },
  { category: "Tools & Workflow", items: ["Postman", "Git", "GitHub", "Bitbucket", "VS Code"] }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technical <span>Skills</span>
      </motion.h2>

      {/* --- ICON-ONLY BLACK & WHITE LOGO LOOP --- */}
      <div className="logo-loop-container">
        <div className="logo-loop-track">
          {loopSkills.map((skill, index) => (
            <div key={`loop-1-${index}`} className="loop-icon-item">
              {skillIcons[skill]}
            </div>
          ))}
          {loopSkills.map((skill, index) => (
            <div key={`loop-2-${index}`} className="loop-icon-item">
              {skillIcons[skill]}
            </div>
          ))}
        </div>
      </div>

      {/* --- CATEGORIZED CARDS --- */}
      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <motion.div 
            key={index} 
            className="skill-category-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((skill, i) => (
                <div key={i} className="skill-tag">
                  <span className="skill-logo">
                    {skillIcons[skill] || <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>}
                  </span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}