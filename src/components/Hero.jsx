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
          MERN Stack Developer with 3.7 years of experience building scalable, high-performance web applications across fintech, banking, and e-commerce. I build responsive UIs with React.js, Next.js and TypeScript, and robust backends with Node.js, Express.js and MongoDB — from database design and REST APIs to secure JWT authentication. Proven track record of optimizing performance and delivering end-to-end features in Agile teams.
        </p>

        <div className="hero-btns">
          <a href="#experience" className="btn primary-btn">
            View Experience
          </a>
          <a href="#contact" className="btn secondary-btn">
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1S3JTjxcJoIg7vNBFV8TWt0K2zhpz48pp/view?usp=sharing"
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
            <h4>MERN</h4>
            <p>Full Stack</p>
          </div>
        </div>
      </div>

      <div className="hero-img-container floating">
        <img src="/profile.jpg" alt="Amir Khan J" className="profile-img" />
      </div>
    </section>
  );
}