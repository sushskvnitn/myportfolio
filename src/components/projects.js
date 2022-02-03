import React, { useState,useEffect } from "react";
import LoadingBar from "react-top-loading-bar";


import Aos from "aos";
import "aos/dist/aos.css"

function Projects() {
  const [Progress, setProgress] = useState(0);
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <><div id="projects">
      <br /><br /><br /><h2 className="text-center ">
       <kbd>Projects</kbd> </h2><br /><br /><br />
      <LoadingBar
        color="#ff0000"
        progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
      
      <div>
        <div className="container d-flex flex-wrap">
          
          <div className="container card-body"  style={{width:"20rem"}} data-aos="fade-right"
          >
            <img
              src="https://source.unsplash.com/300x300/?macbook"
              height="300"
              width="300"
              className="img-fluid"
              alt="..."
            />
            <h5 className="card-title">textconvo</h5>
            <p className="card-text">project 1 :text converter app</p>
            <a
              href="https://sushskvnitn.github.io/my-app/"
              onClick={() => setProgress(100)}
              className="btn btn-warning"
            >
              see my project
            </a>
          </div>
          <div className="container card-body"  style={{width:"20rem"}} data-aos="fade-right">
            <img
              src="https://source.unsplash.com/300x300/?notes"
              height="300"
              width="300"
              className="img-fluid"
              alt="..."
            />
            <h5 className="card-title">keep notes</h5>
            <p className="card-text">project 2 :keep notes app</p>
            <a
              href="https://sushskvnitn.github.io/keepnote/"
              onClick={() => setProgress(100)}
              className="btn btn-warning"
            >
              see my project
            </a>
          </div>

          <div className="container card-body" style={{width:"20rem"}}  data-aos="fade-right">
            <img
              src="https://source.unsplash.com/300x300/?laptop"
              height="300"
              width="300"
              className="img-fluid"
              alt="..."
            />
            <h5 className="card-title">mecoder</h5>
            <p className="card-text">project 3 :simple html css js app</p>
            <a
              href="https://sushskvnitn.github.io/mecoder/"
              onClick={() => setProgress(100)}
              className="btn btn-warning"
            >
              see my project
            </a>
          </div>
          <div className="container card-body" style={{width:"20rem"}} data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1585435557343-3b092031a831?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9jdG9yfHx8fHx8MTY0MDMzMTg3NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              height="300"
              width="300"
              className="img-fluid"
              alt="..."
            />
            <h5 className="card-title">health assistant </h5>
            <p className="card-text">
              project 4 :Here Html css js health assistant app <br /> including
              api fetching for diseases info and other
            </p>
            <a
              href="https://sushskvnitn.github.io/health-assistant/"
              onClick={() => setProgress(100)}
              className="btn btn-warning"
            >
              see my project
            </a>
          </div>
          <div className="container card-body" style={{width:"20rem"}}  data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1604915384518-262d981d5677?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c25ha2V8fHx8fHwxNjM5Mjk0OTA1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              height="300"
              width="300"
              className="img-fluid"
              alt="..."
            />
            <h5 className="card-title">snake game</h5>
            <p className="card-text">
              project 5 :play snake game made with javascript .
            </p>
            <a
              href="https://sushskvnitn.github.io/snakegame.github.io/"
              onClick={() => setProgress(100)}
              className="btn btn-warning"
            >
              see my project
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Projects;
