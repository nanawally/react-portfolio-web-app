import React, { useState } from "react";

const Contact: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
})

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //submit logic
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <header>
        <nav className="topnav">
            <h1 className="active">Anna Wallström</h1>

            <section id="myLinks">
                <a href="index.html">Homepage</a>
                <a href="about.html">About Me</a>
                <a href="cv.html">My CV</a>
                <a href="tech.html">Technical Competence</a>
                <a href="contact.html">Contact Me</a>
            </section>

           <button
            className="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <i className="fa fa-bars"></i>
          </button>
        </nav>
    </header>

    <main>
        <div className="contact-main">
            <section className="contact-links">
                <h2>Links</h2>
                <article>
                    <a href="https://github.com/nanawally" target="_blank">Github home</a>
                </article>
                <article>
                    <a href="https://github.com/nanawally/Adventure-Game" target="_blank">Adventure Game</a>
                </article>
                <article>
                    <a href="https://github.com/nanawally/Home-Invasion-Game" target="_blank">Home Invasion Game</a>
                </article>
            </section>
            <section className="contact-links">
                <article>
                    <a href="tel:+46222222">Call me</a>
                </article>
                <article>
                    <a href="mailto:amj.wallstrom@gmail.com">Send me an email</a>
                </article>
            </section>
            <section>
                <h2 style={{fontFamily: "'Courier New', Courier, monospace" }}>Send a message</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}/>
                    <br/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}/>
                    <br/>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={4} cols={50} value={formData.message} onChange={handleChange}/>
                    <br/>
                    <input type="submit" value="Send"/>
                </form>
            </section>
        </div>
    </main>

    <footer>
        Anna Wallström, 2025
    </footer>
    </>
  );
};

export default Contact;
