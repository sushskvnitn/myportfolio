import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import Projectcard from "./Projectcard";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  const [Progress, setProgress] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="projects">
        <br />
        <br />
        <br />
        <h2 className="text-center ">
          <kbd data-aos="zoom-in-up">Projects</kbd>{" "}
        </h2>

        <h4 data-aos="fade-right" className=" text-center">
          Here are some of the projects <br /> I have done using HTML , CSS
          ,Javascript and React with lot
          <br /> of animations and features with their hosting on different
          platforms{" "}
        </h4>

        <LoadingBar
          color="#ff0000"
          progress={Progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <div>
          <div className="container d-flex flex-wrap">
            <Projectcard
              title="videochitchat"
              data="project :video chat application"
              img="https://source.unsplash.com/300x300/?videocall"
              srclink="https://videochitchat.netlify.app"
            ></Projectcard>
            <Projectcard
              title="DSA"
              data="repo : My DSA practice "
              img="https://source.unsplash.com/300x300/?coding"
              srclink="https://github.com/sushskvnitn/dsa-practice"
            ></Projectcard>
            <Projectcard
              title="health assistant "
              data=" project : health assistant app including
              api fetching for diseases info and other"
              img="https://images.unsplash.com/photo-1585435557343-3b092031a831?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9jdG9yfHx8fHx8MTY0MDMzMTg3NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              srclink="https://sushskvnitn.github.io/health-assistant/"
            ></Projectcard>
            <Projectcard
              title="mecoder"
              data="project :simple html css js app"
              img="https://source.unsplash.com/300x300/?laptop"
              srclink="https://sushskvnitn.github.io/mecoder/"
            ></Projectcard>
            {/* <Projectcard
              title="text converter"
              data="project :text converter app"
              img="https://source.unsplash.com/300x300/?macbook"
              srclink="https://sushskvnitn.github.io/my-app/"
            ></Projectcard> */}
            <Projectcard
              title="keep notes"
              data="project :keep notes app"
              img="https://source.unsplash.com/300x300/?notes"
              srclink="https://sushskvnitn.github.io/keepnote/"
            ></Projectcard>
            <Projectcard
              title="snake game"
              data="project :play snake game made with javascript ."
              img="https://images.unsplash.com/photo-1604915384518-262d981d5677?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c25ha2V8fHx8fHwxNjM5Mjk0OTA1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              srclink="https://sushskvnitn.github.io/snakegame.github.io/"
            ></Projectcard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
