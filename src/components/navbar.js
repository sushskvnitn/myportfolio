import React from "react";
import { Link } from "react-scroll";
import { FaFileAlt } from "react-icons/fa";
// import { TiSocialInstagram } from "react-icons/ti";
import { IoIosContacts, IoIosHome } from "react-icons/io";
import { IoAlbumsSharp } from "react-icons/io5";
import {GiSkills} from "react-icons/gi";
// import Image from "./logo.png";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg fill "
        style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#00181a",zIndex:"1",color:"#d5ca4c" }} data-aos-delay="500"
      >
        <Link className="navbar-brand" to="/">
        <img src="https://i.postimg.cc/sDpnYSvg/12322.png" alt="" className="sticky-top mx-3 img-fluid"  height="50" width="50"/>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false" style={{ color:"#d6ca4a" }}
          aria-label="Toggle navigation"
        >
        <MenuIcon/>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item  mx-3  ">
              <Link
                className="nav-link navhov mx-2 "
                to="Home" smooth={true} duration={1500}
                
              >
                <IoIosHome /> Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mx-3 ">
              <Link
                className="nav-link navhov mx-2"
                to="about" smooth={true} duration={1000}
                
              >
                <FaFileAlt /> About
              </Link>
            </li>

            <li className="nav-item mx-3 ">
              <Link
                className="nav-link navhov mx-2 "
                to="skills" smooth={true} duration={1000}
                
              >
                <GiSkills /> Skills
              </Link>
            </li>

            <li className="nav-item  mx-3 ">
              <Link
                className="nav-link navhov mx-2"
                to="projects" smooth={true} duration={1500}
                
              >
                <IoAlbumsSharp /> projects
              </Link>
            </li>
                     {/* <li className="nav-item ">
              <Link
                className="nav-link navhov mx-2"
                to="social" smooth={true} duration={1500}
                
              >
                <TiSocialInstagram /> social media
              </Link>
            </li> */}
            <li className="nav-item  mx-3 ">
              <Link
                className="nav-link navhov mx-2"
                to="contact" smooth={true} duration={1500}
                
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
