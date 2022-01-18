import React from "react";

function about() {
  return (<>
        <img className="img-fluid" src="https://source.unsplash.com/1600x900/?black,planets" type="image" alt="..." style={{
                    position:"absolute",
                    width:"100%",
                    height:"130%",
                    objectFit:"cover",
                    zIndex:"-1",
                    opacity:"70%"
      }} />
    <div  className="container ">
        <p >
          <strong><h5 > Experience</h5></strong>
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
          <h5  >Education</h5>
          <br />
          <h5>Visvesvaraya National Institute of Technology</h5>

          <br />
          Degree Name : Bachelor of Technology - BTechField Of Study Computer
          Science
          <br />
          Dates attended :2020  expected graduation :2024
          <br />
          <br />
         <h5  >Skills & endorsements</h5> 
          <br />
          C++
          <br />
          Cascading Style Sheets (CSS)
          <br />
          HTML
          <br />
          <br /><h5  >Industry Knowledge</h5>
          <br />
          Web Development
          <br />
          <br /><h5  >Tools & Technologies</h5>
          <br />
          Bootstrap
          <br />
          React.js
          <br />
          Adobe Photoshop
          <br />
          Python (Programming Language)
          <br />
          JavaScript
          <br />
        </p>
     
    </div>
    </>
  );
}

export default about;
