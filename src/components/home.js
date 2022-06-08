import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import Aos from "aos";
import "aos/dist/aos.css";
// import Wave from 'react-wavify'
function Home() {
  const [Progress, setProgress] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
   

      <section id="Home" style={{ paddingBottom: "3rem" }}>
        <LoadingBar
          color="#FFFF00"
          progress={Progress}
          onLoaderFinished={() => setProgress(0)}
        />
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
            <div data-aos="flip-right"className="d-none d-sm-block ">
             <h1 style={{color:"white",paddingLeft:"42rem",position:"absolute"}}>
              I'm
                <span
                  style={{
                    color: "red",
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
                    words={["developer", "student", "sushant"]}
                  />
                </span>
              </h1>
            </div>
            <div data-aos="flip-right" className="d-sm-none">
             <h1 style={{color:"white"}}>
              I'm
                <span
                  style={{
                    color: "red",
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
                    words={["developer", "student", "sushant"]}
                  />
                </span>
              </h1>
            </div>
             <iframe
              src="https://embed.lottiefiles.com/animation/89966"
              title="coder" className="d-none d-sm-block "
              frameBorder="0" id="me"
              style={{ pointerEvents: "none", width: "100%" }}
            ></iframe>

            <div className="container d-sm-none">
              <div className="row text-center d-flex justify-content-center shadow p-3 mb-5  rounded hidden" >
                <div
                  className="col-xl-3 col-sm-6 mb-5 bgmi"
                  style={{
                    width: "22rem",
                    height: "22rem",
                  }}
                >
                  <div className="rounded shadow-sm py-5 px-4 ">
                    <img
                      src="https://i.postimg.cc/4dXvghtX/IMG-20211106-214519-447.jpg"
                      data-aos="fade-zoom-in"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      alt=""
                      width="130"
                      className="img-fluid rounded-circle img-thumbnail shadow-sm"
                    />
                    <br />
                    <h6 className="small text-uppercase ">
                      sushant kogurwar
                    </h6>
                    <ul className="social mb-0 list-inline mt-4">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/sushant-kogurwar"
                          onClick={() => setProgress(100)}
                          className="social-link"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://www.instagram.com/sushant_since_2002/"
                          onClick={() => setProgress(100)}
                          className="social-link"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://github.com/sushskvnitn"
                          onClick={() => setProgress(100)}
                          className="social-link"
                        >
                          <FaGithub />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://leetcode.com/Kogurwarsushant/"
                          onClick={() => setProgress(100)}
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

                  


          <div>
          
          {/* <Wave fill='#FFFFFF'
        paused={false}
       style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '68%',
          zIndex: '-1',
       }}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.075,
          points: 6
        }}
  /> */}
           
          </div>
      <div className="d-none d-lg-block">
      <br /><br /><br /><br />
      </div>    <br /><br />
          <div className=" text-monospace my-5" data-aos="zoom-in-down">
            I'm a student with a focus on technical development. <br />
            I'm hardworking, diligent, and <br /> dedicated—all qualities I put
            forward in everything I do
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
