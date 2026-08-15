
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <p className="contact-desc">I'm currently looking for new opportunities. Let's connect!</p>
      <div className="contact-details">
        <a href="mailto:itsroiak@gmail.com" className="contact-pill">📧 itsroiak@gmail.com</a>
        <a href="tel:8608651201" className="contact-pill">📞 8608651201</a>
        <a href="https://linkedin.com/in/amir-khan-j" target="_blank" rel="noreferrer" className="contact-pill">🔗 LinkedIn Profile</a>
      </div>
    </section>
  );
}