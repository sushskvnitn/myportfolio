import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";


function Home() {
  const [Progress, setProgress] = useState(0);
  return (
    <>
    <section id="Home"  style={{paddingBottom:'3rem'}}>
      <LoadingBar
        color="#FFFF00"
        progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <img
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
          <div>
            <h1 style={{}}>
            I'm
              <span
                style={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}
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
            <div 
            
            
            className="row text-center d-flex justify-content-center shadow p-3 mb-5 bg-body rounded">
              <div
                className="col-xl-3 col-sm-6 mb-5"
                style={{
                  color: "red",
                  marginLeft: "10px",
                  width: "20rem",
                  height: "18rem",
                }}
              >
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://i.postimg.cc/bwjRz6CN/myimg.png"
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
          </div>
        </div>
        <div className="card-body text-monospace">
          
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
