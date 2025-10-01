import React, { useState } from "react";

const Contact: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav className="topnav">
          <h1 className="active">Anna Wallström</h1>

          <section
            id="myLinks"
            style={{ display: menuOpen ? "block" : "none" }}
          >
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

      <main className="aboutmain">
        <section className="content">
          <article className="portrait">
            <img
              src="images/self-portrait/self-portrait.jpg"
              srcSet="images/self-portrait/self-portrait-500.jpg 500w, images/self-portrait/self-portrait-768.jpg 768w"
              sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, 1200px"
              alt="Portrait"
            />
          </article>
          <article className="text-box">
            <h2 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
              About me
            </h2>
            <p>
              Hi, I'm Anna, a passionate Java developer with a strong foundation
              in computer science. I recently graduated with a degree in Java
              Fullstack, where I focused on honing my skills in software
              development, problem-solving, and application design.
              <br />
              <br />
              With a deep interest in programming, I've spent countless hours
              mastering Java, along with exploring web and mobile development
              technologies. I'm always eager to learn new tools and frameworks
              to stay ahead of the curve and build innovative, scalable
              solutions.
              <br />
              <br />
              I approach every project with a combination of creativity,
              precision, and a commitment to writing clean, maintainable code.
              Whether working independently or as part of a team, I believe that
              communication, collaboration, and continuous learning are the keys
              to success.
              <br />
              <br />
              When I'm not coding, you'll find me exploring new tech trends,
              solving coding challenges, or working on personal projects to
              sharpen my skills further.
              <br />
              <br />
              I'm excited to take on new challenges and look forward to
              contributing to exciting, impactful projects.
            </p>
          </article>
        </section>
      </main>

      <footer>Anna Wallström, 2025</footer>
    </>
  );
};

export default Contact;
