import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import Aos from "aos";
import "aos/dist/aos.css";

import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

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
      "latex",
      "C",
      "HTML5",
      "CSS3",
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
    ];
    const bigScreen = window.matchMedia("(min-width: 421px)");
    const radius = bigScreen.matches ? 261 : 120;
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
    <div id="skills" className="category bg-black container text-white ">
    <div id="samples">
    <br /> <br />  
    <ParallaxProvider>
 <Parallax speed={20}>
 <h1 className="verti contact3 " >   <pre>      </pre>skills</h1></Parallax>
</ParallaxProvider>
</div>
      <div className="tag-cloud-container d-flex justify-content-center">
        <div className="tagcloud"></div>
      </div>
    </div>
    </>

  );
};

export default Skills;
