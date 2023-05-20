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
        <h2 className="font-weight-bold contact3" data-aos="zoom-in-up">
         Projects
        </h2>

        <h4 data-aos="fade-right " className=" text-center bold lead">
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
              title="Sarc hospital website"
              data="project :
I developed a hospital website as a freelancer, featuring detailed hospital information, services, and a secure login system with JWT authentication for doctors. Patients can book appointments, receive emails with PDF attachments containing unique token numbers, and use them when visiting the hospital. To send these emails, I utilized the SendinBlue npm package in Node.js for reliable and efficient delivery. "
              img="https://source.unsplash.com/300x300/?hospital"
              srclink="http://sanjeevanarc.com/"
            ></Projectcard>

            <Projectcard
              title="videochitchat"
              data="project :video chat application"
              img="https://source.unsplash.com/300x300/?videocall"
              srclink="https://videochitchat.netlify.app"
            ></Projectcard>
              <Projectcard
              title="Laundry Management System"
              data=" project : Laundry Management System api fetching for diseases info and other"
              img="https://source.unsplash.com/300x300/?laundry"
              srclink="https://github.com/sushskvnitn/laundry_shop/"
            ></Projectcard>

            <Projectcard
              title="DSA"
              data="repo : My DSA practice "
              img="https://source.unsplash.com/300x300/?coding"
              srclink="https://github.com/sushskvnitn/dsa-practice"
            ></Projectcard>
          
            <Projectcard
              title="snake game"
              data="project :play snake game made with javascript ."
              img="https://images.unsplash.com/photo-1604915384518-262d981d5677?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c25ha2V8fHx8fHwxNjM5Mjk0OTA1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              srclink="https://sushskvnitn.github.io/snakegame.github.io/"
            ></Projectcard>
            <Projectcard
              title="Python Applications"
              data="My github repo about python progeamming and machine learning."
              img="https://source.unsplash.com/300x300/?machinelearning"
              srclink="https://github.com/sushskvnitn/all_abt_python"
            ></Projectcard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
