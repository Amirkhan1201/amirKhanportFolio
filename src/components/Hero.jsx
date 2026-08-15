import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content animate-fade-in">
        <h3>Hello, I'm</h3>
        <h1>Amir Khan J</h1>
        <h2>Full-Stack Developer</h2>
        <p>
          Full-Stack Developer with 3.8 years of expertise building scalable, high-performance web applications across fintech, banking, and e-commerce domains. Proficient in crafting responsive UI using React.js and developing robust backend architecture with Node.js, Express.js, and RESTful APIs. Proven track record of optimizing application performance and delivering end-to-end features in fast-paced agile environments.
        </p>

        <div className="hero-btns">
          <a href="#experience" className="btn primary-btn">
            View Experience
          </a>
          <a href="#contact" className="btn secondary-btn">
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1ZI0AYThLl9axQ9pgfdad8iY5RdwsHC6j"
            download="Amir_Khan_Resume.pdf"
            className="btn outline-btn"
          >
            Resume 📄
          </a>
        </div>

        {/* Stats Section */}
        <div className="hero-stats">
          <div className="stat-item">
            <h4>3.8</h4>
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