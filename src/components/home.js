import React, { useState,useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import {Parallax} from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import Aos from "aos";
import "aos/dist/aos.css"
function Home() {
  const [Progress, setProgress] = useState(0);
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <>
    <ParallaxProvider>

    <section id="Home"  style={{paddingBottom:'3rem'}}>

      <LoadingBar
        color="#FFFF00"
        progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
       {/*<img
        className="img-fluid"
        src="https://images.unsplash.com/photo-1569427994399-0fa9b9adf9e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YmxhY2ssc3VuLG1vb258fHx8fHwxNjM5Mjk0MTUy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
        type="image"
        alt="..."
        style={{
          position: "absolute",
          width: "100%",
          height: "154%",
          objectFit: "cover",
          zIndex: "-1",
          opacity: "50%",
        }}
      />*/}
      <div
        className="card d-flex justify-content-center"
        style={{
          fontFamily: "Roboto Mono, monospace",
          fontSize: "30px",
          paddingTop: "30px",
          color: "white",
          background: "none",
          textAlign: "center",
          zIndex: 1
        }}
      >
        <div className="container py-5" >
          <div data-aos='flip-right'>
            <h1 style={{}}>
            I'm
              <span
                style={{ color: "red", fontWeight: "bold", marginLeft: "5px" }}
              >
                <Typewriter
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={55}
                  delaySpeed={1000}
                  words={["developer","student", "sushant"]}
                />
              </span>
            </h1>
          </div>
          <div className="container">
            <Parallax  speed={-20} className="d-none d-lg-block"
  rotate={[158,-180]} scale={[ 1.5,0.2]} >


            <div
            className="row text-center d-flex justify-content-center shadow p-3 mb-5 bg-body rounded">
              <div
                className="col-xl-3 col-sm-6 mb-5"
                style={{
                  color: "red",
                  marginLeft: "10px",
                  width: "22rem",
                  height: "18rem",
                }}
              >
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://i.postimg.cc/4dXvghtX/IMG-20211106-214519-447.jpg" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    alt=""
                    width="130"
                    className="img-fluid rounded-circle img-thumbnail shadow-sm"
                  />
                  <br />
                  <span className="small text-uppercase text-muted">
                    sushant kogurwar
                  </span>
                  <ul className="social mb-0 list-inline mt-4">
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/sushant-kogurwar-2002/"
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
                  </ul>
                </div>
                </div>

            </div>
          </Parallax>
          <Parallax scale={[0.75, 1.1]}
                  easing="easeInQuad"
            >
          <div
          className="d-none d-sm-block d-md-none  row text-center d-flex justify-content-center shadow p-3 mb-5 bg-body rounded">
            <div
              className="col-xl-3 col-sm-6 mb-5"
              style={{
                color: "red",
                marginLeft: "10px",
                width: "22rem",
                height: "18rem",
              }}
            >
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://i.postimg.cc/4dXvghtX/IMG-20211106-214519-447.jpg" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
                  alt=""
                  width="130"
                  className="img-fluid rounded-circle img-thumbnail shadow-sm"
                />
                <br />
                <span className="small text-uppercase text-muted">
                  sushant kogurwar
                </span>
                <ul className="social mb-0 list-inline mt-4">
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/sushant-kogurwar-2002/"
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
                </ul>
              </div>
              </div>

          </div></Parallax>
          </div>

        </div>
        <div>
      <iframe src="https://embed.lottiefiles.com/animation/83087" title="coder" frameBorder="0"style={{pointerEvents: 'none'}}  ></iframe>
        </div>
        <Parallax  speed={-8} >
        <div className="card-body text-monospace" data-aos="zoom-in-up">
            I'm a student with a focus on technical development. <br />
            I'm hardworking, diligent, and <br /> dedicated—all qualities I put
            forward in everything I do
        </div>
      </Parallax>
      </div>
    </section>
    </ParallaxProvider>
    </>
  );
}

export default Home;
