import "./Hero.css";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content animate-fade-in">
        <h3>Hello, I'm</h3>
        
       {/* Cinematic Single-Run Typewriter Animation */}
        <TypeAnimation
          sequence={[
            'Amir Khan J', // Type your name
            1000,          // Wait 1s after finishing
          ]}
          wrapper="h1"
          cursor={true}    // Shows the blinking cursor
          repeat={0}       // Stops after one run (0 = no repeat)
          speed={10}       // Speed: Lower number = faster, higher = slower/smoother
          className="hero-typed-text"
        />

        <p>
          Full-Stack Developer with 3.7 years of expertise building scalable, high-performance web applications across fintech, banking, and e-commerce domains. Proficient in crafting responsive UI using React.js and developing robust backend architecture with Node.js, Express.js, and RESTful APIs. Proven track record of optimizing application performance and delivering end-to-end features in fast-paced agile environments.
        </p>

        <div className="hero-btns">
          <a href="#experience" className="btn primary-btn">
            View Experience
          </a>
          <a href="#contact" className="btn secondary-btn">
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1yMa1Dr8iFfHpBESOdIFw8oFyU3m_dVtq/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline-btn"
          >
            Resume 📄
          </a>
        </div>

        {/* Stats Section */}
        <div className="hero-stats">
          <div className="stat-item">
            <h4>3.7</h4>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h4>10+</h4>
            <p>Projects Built</p>
          </div>
          <div className="stat-item">
            <h4>Clean</h4>
            <p>Component Architecture</p>
          </div>
        </div>
      </div>

      <div className="hero-img-container floating">
        <img src="/profile.jpg" alt="Amir Khan J" className="profile-img" />
      </div>
    </section>
  );
}