import React, { useState } from "react";

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <section>
            <img src="images/hero-image/hero-image-smaller.png"
                srcSet="images/hero-image/hero-image-smaller-500.png 500w, images/hero-image/hero-image-smaller-768.png 768w"
                sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, 1200px" 
                alt="Main image" className="hero-image"/>
        </section>
        <section className="text-container">
            <p className="introduction">Hello, and thank you for visiting! I'm a newly graduated Java developer
                passionate about creating innovative software solutions. On this site, you'll find an overview of my
                technical skills, projects, and how I approach problem-solving. Whether you're interested in back-end
                systems, mobile apps, or full-stack development, I'm eager to bring your ideas to life with clean,
                efficient code. Feel free to explore and get in touch!</p>
        </section>
    </main>

    <footer>
        Anna Wallström, 2025
    </footer>
    </>
  );
};

export default Home;
