import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cv: React.FC = () => {
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
        <h2 className="techrubric">Excerpts from my CV</h2>
        <section>
          <div className="posts">
            <article className="cv-individual-posts">
              <h3>Cognitive skills</h3>
              <h4>Leadership and organization</h4>
              <ul>
                <li>
                  Managed groups of 5-30 people for both year-long periods and
                  shorter projects
                </li>
                <li>
                  {" "}
                  Had overall responsibility for the quality of the groups'
                  final product
                </li>
                <li>Worked closely with people in other positions</li>
              </ul>
              <br />
              <h4>Administration and responsibility</h4>
              <ul>
                <li>Planned long- and short-term activities</li>
                <li>
                  Evaluated activities and reported results in writing and
                  orally
                </li>
                <li>
                  Responsible for contact with external parties and between
                  subgroups
                </li>
                <li>
                  Planned repertoire and gigs for the competitive choir La
                  Cappella
                </li>
              </ul>
            </article>
            <article className="cv-individual-posts">
              <h3>Previous experience</h3>
              <h4>Customer service and technical support</h4>
              <h5>Ortivus MobiMed AB</h5>
              <ul>
                <li style={{ listStyleType: "none" }}>
                  Areas of responsibility:
                </li>
                <li>Customer Support and Communication</li>
                <li>Troubleshooting</li>
                <li>Technical Support</li>
                <li>Escalation Management</li>
                <li>Product Documentation and Knowledge Base</li>
                <li>Product Feedback and Reporting</li>
                <li>Training and Education</li>
              </ul>
              <br />
              <h4>Customer service/logistics</h4>
              <h5>Akademiska Sjukhuset, Uppsala</h5>
              <ul>
                <li style={{ listStyleType: "none" }}>
                  Areas of responsibility:
                </li>
                <li>
                  Ordering products for customers throughout the hospital area
                </li>
                <li>
                  Delivery of products to customers throughout the hospital area
                </li>
                <li>Cleaning of customer areas</li>
                <li>
                  Ordering products for the logistics department's own warehouse
                </li>
                <li>
                  Adjusting warehouse standards in accordance with changes in
                  the business
                </li>
                <li>Continuous contact with customers</li>
                <li>
                  Continuous evaluation and implementation of improvement
                  proposals
                </li>
                <li>Invoice management</li>
                <li>
                  At times with short notice and a high need for follow-up
                </li>
              </ul>
            </article>
            <article className="cv-individual-posts">
              <h3>Education</h3>
              <h4>Fullstack Java Programmer</h4>
              <h5>Stockholms Tekniska Institut</h5>
              <p>2024-2026</p>
              <br />
              <h4>Masters Program in Musicology</h4>
              <h5>Uppsala University</h5>
              <p>2021-2025</p>
            </article>
            <article className="cv-individual-posts">
              <h3>Hobbies</h3>
              Singing in choir <br />
              Acting <br />
              Fencing <br />
              Dancing
            </article>
          </div>
        </section>
      </main>

      <footer>Anna Wallström, 2025</footer>
    </>
  );
};

export default Cv;
