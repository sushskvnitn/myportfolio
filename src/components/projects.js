import React, { useEffect,useState} from "react";
import Projectcard from "./Projectcard";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [projectype,setprojecttype]=useState(true)
  return (
    <>   
      <div id="projects">
        <br />
        <br />
        <br />
        <h2 className="font-weight-bold contact3" data-aos="zoom-in-up">
        {projectype ?" Personal" : "Freelance" } Projects
        </h2>

        <h4 data-aos="fade-right " className=" text-center bold lead">
          Here are some of the projects <br /> I have done using HTML , CSS
          ,Javascript and React with lot
          <br /> of animations and features with their hosting on different
          platforms 
          <div className="">
          {projectype ? (
  <button
    className="btn text-light btn-sm"
    style={{
      background:
        "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,24,26,1) 35%, rgb(235, 4, 4) 100%)",
    }}
    onClick={() => setprojecttype(false)}
  >
    Personal Projects
  </button>
) : (
  <button
    className="btn text-light btn-sm"
    style={{
      background:
        "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,24,26,1) 35%, rgb(203, 0, 0) 100%)",
    }}
    onClick={() => setprojecttype(true)}
  >
    Freelance Projects
  </button>
)}

          </div>
        </h4> 
        <div> 
          {projectype ? 
          <div className="container d-flex flex-wrap">
    <Projectcard
              title=" Multi Threaded  server "
              data="project :Developed a multi-threaded web server capable of handling HTTP requests in my operating systems course, leveraging mutex locks and condition variables to ensure thread synchronization and prevent race conditions.
Implemented the scheduling algorithms like first come first server(FCFS) and Shortest File First (SFF) for scheduling of the requests using Linked List data structure
"
              img="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              srclink="https://bit.ly/3O4HRPB"
            ></Projectcard>
             <Projectcard
              title="Python Applications"
              data="My github repo about python progeamming and machine learning."
              img="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              srclink="https://github.com/sushskvnitn/all_abt_python"
            ></Projectcard>
              <Projectcard
              title="Laundry Management System"
              data=" project : Laundry Management System api fetching for diseases info and other"
              img="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              srclink="https://github.com/sushskvnitn/laundry_shop/"
            ></Projectcard>
            <Projectcard
              title="videochitchat"
              data="project :video chat application"
              img="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              srclink="https://videochitchat.netlify.app"
            ></Projectcard> 
            <Projectcard
              title="DSA"
              data="repo : My DSA practice "
              img="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              srclink="https://github.com/sushskvnitn/dsa-practice"
            ></Projectcard>
        

          </div>
          :
          <div className="container d-flex flex-wrap">
          <Projectcard
              title="Sarc hospital website"
              data="project :Developed a hospital website, featuring detailed hospital information, services, and a secure login system with JWT authentication for doctors. Patients can book appointments, receive emails with PDF attachments containing unique token numbers, and use them when visiting the hospital. To send these emails, I utilized the SendinBlue npm package in Node.js for reliable and efficient delivery. "
              img="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              srclink="https://github.com/sushskvnitn/hospital-project"
            ></Projectcard>
            <Projectcard
              title="salvexploration website"
              data="project : Fixed bugs for the client that i got on freelancer.com "
              img="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              srclink="https://salvexploration.com/"
            ></Projectcard> 
            <Projectcard
              title="OWN website"
              data="project :Developed the React based project for the OWN service provider company. The website is fully responsive and has a clean and modern design. The website is hosted on Netlify and the domain is provided by GoDaddy. The website is fully functional and has a contact form that sends emails to the company's email address. The website is also integrated with Google Analytics to track the website's performance. "
              img="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              srclink="https://ownprojectfrontend.netlify.app/"
            ></Projectcard> 
             <Projectcard
              title="PopularPG website"
              data="project : Worked On React + django based projects with my colleagues. The website is fully responsive and has a clean and modern design "
              img="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              srclink="https://github.com/sushskvnitn/popularpg2.0"
            ></Projectcard>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default Projects;
