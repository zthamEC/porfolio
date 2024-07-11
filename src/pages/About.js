import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import IMG from "../img/tam-2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>

      <section id="carton">
        <h1 className="fw-bold display-3 text-center ">
          <p>ABOUT</p>
        </h1>
        <div className="container ">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row ">
                <div className="col-lg-12 ">
                  <center>
                    {" "}
                    <div className="col-lg-6 text text-justify fw-bold">
                      <h2 className="text-dark text-center">About Me</h2>
                      <p>
                        <p>
                          I am fond of playing sports like Volleyball,
                          Football, including video game like Dota 2, Mobile Legends, Minecraft.
                          I also play some musical instruments like Piano, Guitar, Saxophone, and Violin. 
                          I'm currently a member of the Zions Choir at UCCP Mabinay Central Church.
                        </p>
                      </p>
                    </div>
                    <div className="col-lg-6 text text-justify fw-bold">
                    <h2 className="text-dark text-center">Academic Journey</h2>
                      <p>
                        <p>
                          I am currently a student at Central Philippines State
                          University, taking up Bachelor of Science in
                          Information Technology (BSIT). I finished my High School Years
                          at Mabinay National High School. Although I took the HUMSS strand,
                          I was always fond of doing computer related works. That was one of 
                          the reasons I took Information Technology even though it wasn't aligned
                          with the Academic Strand that I took.
                        </p>
                      </p>
                    </div>
                  </center>
                </div>
              </div>
              <center>
                <img src={IMG} alt="ZTHAM E. CABUGNASON" />
              </center>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <section id="about" className="">
        <div className="container mt-1">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center"></div>
          </div>
        </div>
      </section>
      <section id="info">
        <div class="section-heading text-center mb-1 ">
          <h1>
            <i>Educational Attainment</i>
          </h1>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h3>2008-2014</h3>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Mabinay Central School</h4>
                    <p className="text-secondary">
                      Brgy. Poblacion, Mabinay, Negros Oriental
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h3>2014-2020</h3>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>{" "}
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Mabinay National High School</h4>
                    <p className="text-secondary">
                      Brgy. Poblacion, Mabinay, Negros Oriental
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h3>2020-2024</h3>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>{" "}
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Central Philippines State University</h4>
                    <p className="text-secondary">
                      Brgy. Poblacion, Mabinay, Negros Oriental
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <section id="education" class="education"></section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href="">tam2x13@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
