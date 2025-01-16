import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import Aos from "aos";
import "aos/dist/aos.css";

// import { Parallax } from "react-scroll-parallax";
// import { ParallaxProvider } from "react-scroll-parallax";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const container = ".tagcloud";
    const data = [
      "ReactJS",
      "C++",
      "JavaScript",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "Mongoose",
      "Tailwindcss",
      "JSON",
      "Git",
      "Bootstrap",
      "Linux",
      "MySQL",
      "AWS",
      "React Native",
      "python",
      "flask",
      "Java",
      "PHP",
      "Pen testing",
      "Red teaming",
      "Risk Assessment",
      "App Security"
      

    ];
    const bigScreen = window.matchMedia("(min-width: 421px)");
    const radius = bigScreen.matches ? 150 : 120;
    const options = {
      radius: radius,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    };

    TagCloud(container, data, options);
  }, []);

  return (
    <>
      <div id="skills" className="category ">
        <div id="samples">
           <b>   <h1 className="font-weight-bold contact3" data-aos="zoom-in-up">
               skills
              </h1></b>
        </div>
        <div className="tag-cloud-container d-flex justify-content-center">
          <div className="tagcloud"></div>
        </div>
      </div>
    </>
  );
};

export default Skills;
