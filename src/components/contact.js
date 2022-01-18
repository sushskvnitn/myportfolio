import React from "react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function contact() {
  return (
    <> <div id="contact" style={{
      display: 'grid',
      placeItems: 'center'}}>
      <div
        classname="card"
        style={{
          display: 'grid',
          placeItems: 'center',
          width: "400px",
          color: "black",
          padding: "20px",
          backgroundColor: "white",
          borderRadius:"5px",
          textAlign: "center",
          textJustify:"auto"
        }}
      >
        <br /><br /><br /><h2 className="text-center ">contact</h2><br />
        <img
          style={{
            padding: "10px",
            borderRadius:"5px",
          }}
          src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29udGFjdHx8fHx8fDE2MzkyOTQyOTI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
          classname="card-img-top"
          alt="images"
        />
        <div classname="card-body">
         
          <p classname="card-text">
            <p>
              
              mail us to :
              <a
                className="black-text"
                href="https://gmail.google.com"
                rel="noreferrer"
              >
                4kstatus.ssk@gmail.com
              </a>
              <br />
            </p>
          </p>
        </div>
        <div classname="card-body">
          <p classname="card-link">
            {" "}
            message us on <FaLinkedin /> linkedin :{" "}
            <a
              className="black-text"
              href="https://www.linkedin.com/in/sushant-kogurwar-2002/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/sushant-kogurwar-2002/
            </a>
          </p>
          <br />

          <p classname="card-link">
            {" "}
            message on <FaInstagramSquare />
            instagram :{" "}
            <a
              className="black-text"
              href="https://www.instagram.com/sushant_since_2002/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/<br/>sushant_since_2002/
            </a>
          </p>
          <br />
        </div>
      </div>
      </div>
    </>
  );
}

export default contact;
