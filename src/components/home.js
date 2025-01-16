import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import Aos from "aos";
import "aos/dist/aos.css";
import "./birdanime.scss";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=12X4Zna7yD5DPZ026dkzsJpExE5H2jp9u";
    link.download = "Sushant_Kogurwar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
    

      <section id="Home" style={{ paddingBottom: "3rem" }}>
        <div
          className="card d-flex justify-content-center"
          style={{
            fontFamily: "Roboto Mono, monospace",
            fontSize: "30px",
            paddingTop: "30px",
            color: "white",
            background: "none",
            textAlign: "center",
          }}
        >
          <div className="container py-5">
            <div data-aos="flip-right" className="d-none d-sm-block ">
              {/* #37dfa3 */}
        
              <div className=" codesx mt-5">
                <iframe
                  src="https://embed.lottiefiles.com/animation/82423"
                  frameBorder="0"
                  title="animatedicons"
                  scrolling="no"
                  style={{ pointerEvents: "none", height: "13rem" }}
                >
                  {" "}
                </iframe>
                <a
                  className="btn rounded-circle btn-danger p-1 shake"
                  target="_blank"
                  href="https://linktr.ee/Sushantsk"
                  rel="noreferrer"
                >
                  {" "}
                </a>
              </div>
            </div>

            <div data-aos="flip-right" className="d-sm-none">
              <h1 style={{ color: "white" }}>
                I'm
                <span
                  className="cursorr"
                  style={{
                    color: "#d6ca4a",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                >
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={55}
                    delaySpeed={1000}
                    words={["Developer", "CyberSecurity Professional", "Ethical Hacker"]}
                  />
                </span>
              </h1>
            </div>

            <div className="container d-sm-none">
              <div className="row text-center d-flex justify-content-center  p-3 mb-5  rounded hidden">
                <div
                  className="col-xl-3 col-sm-6 mb-5 bgmi"
                  style={{
                    width: "22rem",
                    height: "22rem",
                  }}
                >
                  <div className="rounded -sm py-5 px-4 ">
                    <img
                      src="https://i.postimg.cc/fyjQ3k6t/IMG-1741.jpg"
                      data-aos="fade-zoom-in"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      alt=""
                      width="130"
                      className="img-fluid rounded-circle img-thumbnail -sm"
                    />
                    <br />
                    <h6 className="small text-uppercase ">sushant kogurwar</h6>
                    <ul className="social mb-0 list-inline mt-4">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/sushant-kogurwar"
                          className="social-link"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://www.instagram.com/sushant_since_2002/"
                          className="social-link"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://github.com/sushskvnitn"
                          className="social-link"
                        >
                          <FaGithub />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://leetcode.com/Kogurwarsushant/"
                          className="social-link"
                        >
                          <SiLeetcode />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: "100%" }} className="d-none d-sm-block">
            <h3
              className="  d-flex justify-content-center "
              data-aos="zoom-in-down"
            >
              <br />
              <br />
              <br /> <br />
              <br />
              <br />
              <br />
              <div className="w-50">
                <span>
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={55}
                    delaySpeed={1000}
                    words={[
                      "I am a passionate cybersecurity enthusiast and software developer with a strong background in computer science. With experience in full-stack web development and a focus on security, I am actively exploring ethical hacking, penetration testing, and securing applications. Currently working as a Deputy Manager II in the Information Security Group at a top Indian bank, I am involved in attack surface management and red teaming activities. Always eager to learn, I am preparing for certifications like OSCP and developing projects to illustrate critical security concepts like the OWASP Top 10 and SANS 25 vulnerabilities."   ]}
                  />
                </span>
              </div>
            </h3>
            <button
              className="btn btn-danger-gradiant mt-3 text-dark border-0 px-3 py-2"
              onClick={downloadFile}
            >
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
