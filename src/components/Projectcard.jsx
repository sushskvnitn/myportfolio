import React from "react";
import Card from "./card.module.css";
import PreviewIcon from '@mui/icons-material/Preview';
const projectcard = (props) => {
  return (
    <div>
      <div
        className="container card-body m-1 my-2 rounded " id={Card.card}
        style={{
          width: "20rem",
          backgroundColor: "#212429",
          margin: "auto",
          
        }}
        data-aos="fade-right"
      >
      <div className="d-flex justify-content-center" >
        <img
          src={props.img}
          height="250"
          width="250"
          className="img-fluid rounded"
          alt="..."
        />
        </div>
        <h5 className="card-title text-white">{props.title}</h5>
        <p className="card-text-123  text-white">{props.data}</p>
        <br />
        <div className="d-flex justify-content-end " style={{marginTop:"-2rem"}}>
        <a href={props.srclink} className="btn btn-light text-dark">
          <PreviewIcon/>
        </a>
        </div>
      </div>
    </div>
  );
};

export default projectcard;
