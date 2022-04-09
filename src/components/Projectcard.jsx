import React from "react";
import Card from "./card.module.css";
const projectcard = (props) => {
  return (
    <div>
      <div
        className="container card-body m-1 my-2 " id={Card.card}
        style={{
          width: "20rem",
          backgroundColor: "#212429",
          margin: "auto",
          
        }}
        data-aos-delay="1000"
        data-aos="fade-right"
      >
        <img
          src={props.img}
          height="300"
          width="300"
          className="img-fluid"
          alt="..."
        />
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text-123">{props.data}</p>
        <a href={props.srclink} className="btn btn-light text-dark">
          see my project
        </a>
      </div>
    </div>
  );
};

export default projectcard;
