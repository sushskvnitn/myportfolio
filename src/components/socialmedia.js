import React, { useState,useEffect } from "react";
import { FaGithub, FaLinkedin, FaHackerrank, FaStar } from "react-icons/fa";
import LoadingBar from "react-top-loading-bar";
import IframeResizer from 'iframe-resizer-react'
import Aos from "aos";
import "aos/dist/aos.css"

function Socialmedia() {
  const [Progress, setProgress] = useState(0);
 useEffect(()=>{
   Aos.init({duration:2000})
 },[])

  return (
    <>
      <div id="social">
        <br />
        <br />
        <br />
        <h2 className="text-center ">
          <kbd>social media</kbd>
        </h2>
        <br />
        <br />
        <br />
        <LoadingBar
          color="#ff0000"
          progress={Progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <div className="container">
          <div
            className="container d-flex justify-content-center content-wrap"
            style={{ width: " 23 rem" }} id='box' data-aos="fade-up"
          >
            <div className="card text-dark mb-3" >
              <div className="card-header bg-warning"  >
                <b>
                  <FaGithub /> GITHUB PROFILE
                </b>
              </div>
              <div className="card-body">
                <h5 className="card-title">sushskvnitn</h5>
                <IframeResizer src="https://embed.lottiefiles.com/animation/81333 "  frameborder="0" title="animatedicons" scrolling="no"  style={{pointerEvents:"none"}} > </IframeResizer>
                <p className="card-text">
                  some of my projects on web development i have added some of
                  them to projects of
                  <br /> section
                </p>
                <a
                  href="https://github.com/sushskvnitn"
                  className="btn btn-warning"
                  role="button"
                  data-bs-toggle="button"
                  onClick={() => setProgress(100)}
                >
                  get to my profile
                </a>
              </div>
            </div>
          </div>

          <br />

          <div
            className="container d-flex justify-content-center content-wrap"
            style={{ width: " 23 rem" }} id='box' data-aos="fade-up"
          >
            <div className="card text-dark mb-3" >
              <div className="card-header bg-warning">
                <b>
                  <FaLinkedin /> linkedin PROFILE
                </b>
              </div>
              <div className="card-body">
                <h5 className="card-title">sushant kogurwar</h5>
                <IframeResizer src="https://embed.lottiefiles.com/animation/76044"  frameborder="0" title="animatedicons" scrolling="no"  style={{pointerEvents:"none"}} > </IframeResizer>
                <p className="card-text">
                  Here my linked in profile see more details here whtever i have
                  written there are skills
                </p>
                <a
                  href="https://www.linkedin.com/in/sushant-kogurwar-2002/"
                  className="btn btn-warning"
                  role="button"
                  data-bs-toggle="button"
                  onClick={() => setProgress(100)}
                >
                  get to my profile
                </a>
              </div>
            </div>
          </div>

          <br />

          <div
            className="container d-flex justify-content-center content-wrap"
            style={{ width: " 23 rem" }} id='box' data-aos="fade-up"
          >
            <div className="card text-dark mb-3" >
              <div className="card-header bg-warning">
                <b>
                  <FaHackerrank /> HACKERRANK PROFILE
                </b>
              </div>
              <div className="card-body">
                <h5 className="card-title">sushant kogurwar</h5>
                <IframeResizer src="https://embed.lottiefiles.com/animation/95118" className="img-fluid"  frameborder="0" title="animatedicons" scrolling="no"  style={{pointerEvents:"none"}} > </IframeResizer>
                
                <p className="card-text">
                  hello ,Im <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar /> <FaStar /> coder in c ++ and im practicing more so
                  lets check out more here
                </p>
                <a
                  href="https://www.hackerrank.com/Sushantkogurwar"
                  className="img-fluid btn btn-warning"
                  role="button"
                  data-bs-toggle="button"
                  onClick={() => setProgress(100)}
                >
                  get to my profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Socialmedia;
