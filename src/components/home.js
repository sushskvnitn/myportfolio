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
              <div
                style={{
                  color: "red",
                  fontSize: "24px",
                  fontWeight: "600",
                  textAlign: "center",
                  padding: "20px",
                  position: "relative",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <div
                  className="glitch"
                  style={{
                    position: "relative",
                    color: "red",
                    fontWeight: "600",
                    fontSize: "24px",
                  }}
                >
                  <Typewriter
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    delaySpeed={4000}
                    words={[
                      "'Hey, I’m Sushant, crafting code with care, innovating as a dev, safeguarding everywhere!'",
                    ]}
                  />
                </div>
              </div>
              <div className=" codesx mt-5">
                <iframe
                  src="https://lottie.host/embed/d9b38946-8171-4651-8c32-8ea2ecdabc64/QNR7Ncl4Q4.lottie"
                  frameBorder="0"
                  title="animatedicons"
                  scrolling="no"
                  style={{ pointerEvents: "none", height: "13rem" }}
                ></iframe>
                <a
                  className="btn rounded-circle btn-danger p-1 shake"
                  target="_blank"
                  href="https://linktr.ee/Sushantsk"
                  rel="noreferrer"
                  aria-label="Visit my Linktree"
                ></a>
              </div>
            </div>

            <div data-aos="flip-right" className="d-sm-none">
              <h1 style={{ color: "white", fontSize: "26px" }}>
                I'm a
                <span
                  className="cursorr"
                  style={{
                    color: "#ff0000",
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
                    words={[
                      "Developer",
                      "Pentester",
                      "Ethical Hacker",
                      "CSE Engineer",
                      "Bug Hunter",
                      "Red Teamer",
                      "Coder",
                      "Threat Hunter",
                    ]}
                  />
                </span>
              </h1>
            </div>
            <div className="container d-sm-none">
              <div className="row text-center d-flex justify-content-center p-3 mb-5 rounded">
                <div
                  className="col-xl-3 col-sm-6 mb-5 "
                  style={{
                    width: "22rem",
                    height: "22rem",
                  }}
                >
                  <div className="rounded-sm py-5 px-4" >
                    <img
                      src="https://i.postimg.cc/fyjQ3k6t/IMG-1741.jpg"
                      data-aos="fade-zoom-in"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      alt="Sushant Kogurwar"
                      width="130"
                      className="img-fluid rounded-circle img-thumbnail" style={{
                    backgroundColor:"#ff0000"
                  }}
                    />
                    <br />
                    <h6 className="small text-uppercase my-4 glitch1">
                      Sushant Kogurwar
                    </h6>
                    <ul className=" mb-0 list-inline mt-4">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/sushant-kogurwar"
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin style={{ color: "white" }} />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://www.instagram.com/sushant_since_2002/"
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram style={{ color: "white" }} />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://github.com/sushskvnitn"
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub style={{ color: "white" }} />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://leetcode.com/Kogurwarsushant/"
                          className="social-link"
                          target="_blank"
                          rel=" noreferrer"
                        >
                          <SiLeetcode style={{ color: "white" }} />
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
              <div className="w-50">
                <span style={{ fontSize: "18px" }}>
                  I'm a passionate cybersecurity enthusiast and software
                  developer with a strong computer science background.
                  Experienced in full-stack development and security, I focus on
                  ethical hacking and penetration testing. Currently a Deputy
                  Manager II at ICICI Bank's Information Security Group, I work
                  on attack surface management and red teaming. Always learning,
                  I'm working towards OSCP certification and building projects
                  to demonstrate key security concepts like the OWASP Top 10 and
                  SANS 25 vulnerabilities.
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
