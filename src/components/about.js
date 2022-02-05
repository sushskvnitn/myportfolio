import React from "react";
import Particles from "react-tsparticles";


function about() {
  const particlesInit = (main) => {
    console.log("main");

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log("welcome");
    
  };

  
  return (<>
  <div id="about">

    <div  className="container " >
      <br /><br /><br />
      <h2 className="text-center ">ABOUT</h2>
      <div>
      <strong><kbd> Experience</kbd></strong>
          <br />
          <b>VNIT Nagpur</b>
          Technical Secretary <br />
          Company NameVNIT Nagpur
          <br />
          Dates Employed :Jul 2021 – Present
          <br />
          Employment Duration :4 mos
          <br />
          Location :Maharashtra, India
          <br />


      </div>
      <div>
      <kbd  >Education</kbd>
          <br />
          <h5>Visvesvaraya National Institute of Technology</h5>

          <br />
          Degree Name : Bachelor of Technology - BTechField Of Study Computer
          Science
          <br />
          Dates attended :2020  expected graduation :2024
          <br />
          <br />
      </div>
      <div>
      <kbd  >Skills & endorsements</kbd> 
          <br />
          C++
          <br />
          Cascading Style Sheets (CSS)  HTML
          <br />
           React.js
          <br />

          <br /><kbd  >Tools & Technologies</kbd>
          <br />
          Bootstrap
          <br />
          
          <br />
          Adobe Photoshop
          <br />
          Python (Programming Language)
          <br />
          JavaScript
          <br />
          git and GITHUB
          <br />

      </div>

     
      </div>
    </div>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{zIndex:-1}}
      options={{
   
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#fffff",
          },
          links: {
            color: "#ff0000",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1.8,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    </>
  );
}

export default about;
