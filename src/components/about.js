import React, { useEffect } from "react";
import CoderIntro from "./coderintro";
import Aos from "aos";
import "aos/dist/aos.css";
export default function CustomizedTimeline() {
  // const current = new Date();
  // var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // var monthName=months[current.getMonth()];
  // const date = `${monthName}  ${current.getFullYear()}`;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const experience = [
    //     Amazon ML School 2023 - menteeAmazon ML School 2023 - mentee
    // Amazon · ApprenticeshipAmazon · Apprenticeship
    // Sep 2023 - Present · 1 moSep 2023 - Present · 1 mo
    // Remote · RemoteRemote · Remote
    // Exploring machine learning with Amazons ml experts
    {
      title: "Deputy Manager @ICICI Bank ",
      description: "Full time",
      position: "Deputy Manager - Information Security ",
      duration: `July 2024 - Present `,
      details: [
        "Exploring machine learning with Amazons ml experts",
        "Learning about the latest advancements in the field of machine learning and how to apply them to solve real-world problems.",
      ],
    }, {
      title: "Amazon ML School 2023",
      description: "Apprenticeship",
      position: "Mentee",
      duration: `Sep 2023 - Oct 2023`,
      details: [
        "Exploring machine learning with Amazons ml experts",
        "Learning about the latest advancements in the field of machine learning and how to apply them to solve real-world problems.",
      ],
    },
    {
      title: "Freelancer",
      position: "Full stack Developer",
      description: "Freelancer.com || Linkedin || Upwork",
      duration: `Jul 2022 - Nov 2023`,
      details: [
        "Developed and maintained code for in-house and client websites utilizing HTML5, CSS3, Javascript, React js, Flask, and Mern Stack.",
        "Tested front-end code in multiple browsers to ensure cross-browser compatibility.",
        "Coordinated closely with other developers and digital producers to expedite projects.",
        "Clients included from freelancer.com,linkedin ,etc .",
      ],
    },
    {
      title: "ACM Student Chapter, VNIT",
      position: "Project Head",
      description: "ACM Student Chapter, VNIT",
      duration: `Jul 2022 - Sep 2023`,
      location: "Nagpur, Maharashtra, India",
      details: [
        "Worked on the development of the official website of ACM Student Chapter, VNIT.",
        "Conducted various workshops on Web Development, Competitive Programming, etc.",
        "Arranged various events like Hackathons, coding contests, etc.",
      ],
    },
    {
      title: "CSE Student council, VNIT",
      position: "Associate Department Representative",
      description: "CSE Student council",
      duration: `Jul 2022 - Sep 2023`,
      location: "Nagpur, Maharashtra, India",
      details: [
        "Arranged different events like fresher's party, farewell party,department gatherings, etc.",
        "Worked with the team of 20+ members as a representative.",
        "Provided guidance to the juniors regarding academics and other activities.",
      ],
    },
  ];

  return (
    <section id="about" style={{ paddingBottom: "3rem" }}>
      <>
        <CoderIntro />
        <h1 className="align-center text-centern text-black contact3 font-weight-bold">
          {" "}
          Experience{" "}
        </h1>
        <div className="  ">
          <main class="CV-page">
            <div class="CV-grid">
              {" "}
              <div class="CV-grid-column">
                <div class="CV-jobs">
                  {experience.map((exp, index) => (
                    <section class="CV-timeline CV-job">
                      <h3 class="CV-timeline-heading" data-aos="fade-left">
                        <span class="CV-timeline-heading-title">
                          {exp.title}
                        </span>
                        <br />
                        {exp.position && <span>&#8211;</span>}
                        <span class="CV-timeline-heading-location">
                          {exp.position}
                        </span>
                        <small class="CV-timeline-heading-duration">
                          {exp.duration}
                        </small>
                      </h3>
                      <ul class="CV-timeline-details" data-aos="fade-left">
                        {exp.description && (
                          <li class="CV-job-timeline-item">
                            {exp.description}
                          </li>
                        )}
                        {exp.details &&
                          exp.details.map((detail, index) => (
                            <li class="CV-job-timeline-item1">{detail}</li>
                          ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    </section>
  );
}

// import React, { useEffect } from "react";
// import CoderIntro from "./coderintro";
// import Aos from "aos";
// import "aos/dist/aos.css";
// export default function CustomizedTimeline() {
//   const current = new Date();
//   var months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   var monthName = months[current.getMonth()];
//   const date = `${monthName}  ${current.getFullYear()}`;

//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);
//   const experience = [
//     {
//       title: "ACM Student Chapter, VNIT",
//       position: "Project Head",
//       description: "ACM Student Chapter, VNIT",
//       duration: `Jul 2022 - ${date}`,
//       location: "Nagpur, Maharashtra, India",
//     },
//     {
//       title: "CSE Student council, VNIT",
//       position: "Associate Department Representative",
//       description: "CSE Student council",
//       duration: `Jul 2022 - ${date}`,
//       location: "Nagpur, Maharashtra, India",
//     },
//     {
//       title: "Freelancer",
//       position: "Full stack Developer",
//       duration: `Jul 2022 - ${date}`,
//       details: [
//         "Developed and maintained code for in-house and client websites utilizing HTML5, CSS3, Javascript, React js, Flask, and Mern Stack.",
//         "Tested front-end code in multiple browsers to ensure cross-browser compatibility.",
//         "Coordinated closely with other developers and digital producers to expedite projects.",
//         "Clients included from freelancer.com,linkedin ,etc .",
//       ],
//     },
//   ];

//   return (
//     <section id="about" style={{ paddingBottom: "3rem" }}>
//       <>
//         <CoderIntro />
//         <h1 className="align-center text-centern text-black contact3 font-weight-bold">
//           Experience
//         </h1>
//         <div className="  ">
//           <main class="CV-page">
//             <div class="CV-grid">
//               {experience.map((exp, index) => (
//                 <div class="CV-grid-column">
//                   <div class="CV-jobs">
//                     <section class="CV-timeline CV-job">
//                       <h3 class="CV-timeline-heading">
//                         <span class="CV-timeline-heading-title">
//                           {exp.title}
//                         </span>
//                         &#8211;
//                         <span class="CV-timeline-heading-location">
//                           {exp.position}
//                         </span>
//                         <small class="CV-timeline-heading-duration">
//                           {exp.duration}
//                         </small>
//                       </h3>
//                       <ul class="CV-timeline-details">
//                         <li class="CV-job-timeline-item">{exp.description}</li>
//                         {exp.details &&
//                           exp.details.map((detail, index) => (
//                             <li class="CV-job-timeline-item">{detail}</li>
//                           ))}
//                       </ul>
//                     </section>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </main>
//         </div>
//       </>
//     </section>
//   );
// }
