import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tech: React.FC = () => {
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
            <Link to="index.html">Homepage</Link>
            <Link to="about.html">About Me</Link>
            <Link to="cv.html">My CV</Link>
            <Link to="tech.html">Technical Competence</Link>
            <Link to="contact.html">Contact Me</Link>
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
        <h2 className="techrubric">Technical Competence</h2>

        <div className="keyword-filter-container">
          <label htmlFor="keywordFilter" style={{ color: "azure" }}>
            Choose subject:
          </label>
          <select id="keywordFilter">
            <option value="all">All</option>
            <option value="technicalunderstanding">
              Technical Understanding
            </option>
            <option value="webdevelopment">Web Development</option>
            <option value="mobiledevelopment">Mobile Development</option>
            <option value="optimization">Optimization</option>
            <option value="networking">Networking</option>
          </select>
        </div>

        <section>
          <div className="posts">
            <article
              className="post1"
              data-keywords="technicalunderstanding, problem-solving"
            >
              <img
                src="images/tech-images/img1.jpg"
                srcSet="images/tech-images/img1-500.jpg 500w, images/tech-images/img1-768.jpg 768w"
                sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, 1200px"
                alt="Image of a laptop"
              />
              <h3>General Competence and Development Environment</h3>
              <p>
                As a recent graduate in computer science with a focus on Java
                programming, I am proficient in developing software solutions
                using the latest tools and frameworks. I am highly skilled in
                utilizing development environments like Eclipse, IntelliJ, and
                Visual Studio Code, where I can quickly translate requirements
                into code that is efficient and scalable. Whether it's building
                robust back-end systems or crafting user-friendly applications,
                I am equipped to handle it all with precision and speed.
              </p>
            </article>
            <article
              className="post2"
              data-keywords="technicalunderstanding, system-architecture"
            >
              <img
                src="images/tech-images/img2.jpg"
                srcSet="images/tech-images/img2-500.jpg 500w, images/tech-images/img2-768.jpg 768w"
                sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, 1200px"
                alt="Image of a circuit board"
              />
              <h3>Technical Understanding and Problem-Solving</h3>
              <p>
                Beyond just writing code, I possess a strong understanding of
                how software interacts with hardware. My foundation in
                programming principles is complemented by an understanding of
                system architecture, data flow, and optimizing applications for
                performance. I approach challenges with a problem-solving
                mindset, debugging code and identifying solutions that align
                with both the hardware and the software, ensuring smooth
                integration and efficiency.
              </p>
            </article>
            <article
              className="post3"
              data-keywords="webdevelopment, javascript, react"
            >
              <img
                src="images/tech-images/img3.jpg"
                srcSet="images/tech-images/img3-500.jpg 500w, images/tech-images/img3-768.jpg 768w"
                sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, 1200px"
                alt="Image of code on a screen"
              />
              <h3>Web Development and Full-Stack Competence</h3>
              <p>
                While my primary expertise is in Java, I have also gained
                significant experience in web development. I am well-versed in
                both front-end and back-end technologies, including HTML, CSS,
                and JavaScript. Using JavaScript alongside frameworks like
                React.js and Node.js, I build interactive and dynamic user
                interfaces that complement my Java-based back-end systems. My
                ability to switch between front-end and back-end development
                allows me to contribute to every layer of a project.
              </p>
            </article>
            <article
              className="post4"
              data-keywords="mobiledevelopment, android, java"
            >
              <img
                src="images/tech-images/img4.jpg"
                srcSet="images/tech-images/img4-500.jpg 500w, images/tech-images/img4-768.jpg 768w"
                sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, 1200px"
                alt="Image of a hand holding a mobile phone"
              />
              <h3>Mobile Development and Android Experience</h3>
              <p>
                With a growing interest in mobile technology, I have started
                exploring Android development using Java and Kotlin. I am
                familiar with building mobile applications that provide seamless
                user experiences. From creating intuitive UI designs to ensuring
                performance optimization, I can develop apps that run smoothly
                across multiple devices. My mobile development skills are
                complemented by a solid foundation in Java, enabling me to craft
                efficient, high-performing apps.
              </p>
            </article>
            <article className="post5" data-keywords="optimization, java">
              <img
                src="images/tech-images/img5.jpg"
                srcSet="images/tech-images/img5-500.jpg 500w, images/tech-images/img5-768.jpg 768w"
                sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, 1200px"
                alt="Lines of green code on black background"
              />
              <h3>Code Structure and Optimization</h3>
              <p>
                My Java coding style is guided by best practices in software
                design, emphasizing clean, maintainable, and scalable code. I
                prioritize readability and organization, ensuring that my code
                can be easily understood and modified by other developers.
                Additionally, I focus on optimizing code to ensure efficient
                execution and memory management, using algorithms and data
                structures that meet performance requirements while minimizing
                resource usage.
              </p>
            </article>
            <article
              className="post6"
              data-keywords="networking, cloud-computing, java"
            >
              <img
                src="images/tech-images/img6.jpg"
                srcSet="images/tech-images/img6-500.jpg 500w, images/tech-images/img6-768.jpg 768w"
                sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, 1200px"
                alt="An aerial view of the Earth at night"
              />
              <h3>Global Connectivity and Networking</h3>
              <p>
                In today's interconnected world, I recognize the importance of
                networked systems and cloud computing. I am familiar with
                building Java applications that connect to remote servers and
                cloud platforms, utilizing APIs and web services for real-time
                communication. My understanding of networking protocols, along
                with the integration of distributed systems, allows me to
                develop applications that work seamlessly across the globe,
                enabling efficient data exchange and collaboration.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer>Anna Wallström, 2025</footer>
    </>
  );
};

export default Tech;
