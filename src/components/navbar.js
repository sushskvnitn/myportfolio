import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaFileAlt } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import LoadingBar from "react-top-loading-bar";
import { IoIosContacts, IoIosHome } from "react-icons/io";
import { IoAlbumsSharp } from "react-icons/io5";
import {animateScroll as scroll} from 'react-scroll'


export default function Navbar() {
  const [Progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar
        color="#FFFF00"
        progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <nav  onClick={()=>{
        scroll.scrollToTop()
      }}
        className="navbar sticky-top navbar-expand-lg navbar-dark " 
        style={{ fontFamily: "Lato, sans-serif", backgroundColor: "black" }}
      >
        <Link className="navbar-brand" to="/">
          MyPortFolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item justify-content-end ">
              <Link
                className="nav-link"
                to="Home" smooth={true} duration={1500}
                onClick={() => setProgress(100)}
              >
                <IoIosHome /> Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about" smooth={true} duration={1000}
                onClick={() => setProgress(100)}
              >
                <FaFileAlt /> About
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link"
                to="social" smooth={true} duration={1500}
                onClick={() => setProgress(100)}
              >
                <TiSocialInstagram /> social media
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link"
                to="projects" smooth={true} duration={1500}
                onClick={() => setProgress(100)}
              >
                <IoAlbumsSharp /> projects
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link"
                to="contact" smooth={true} duration={1500}
                onClick={() => setProgress(100)}
              >
                <IoIosContacts /> contact
              </Link>
            </li>

          </ul>
        </div>

      </nav>
    </>
  );
}
