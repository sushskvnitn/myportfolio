import React, { useEffect } from "react";
import {  FaHackerrank} from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import FacebookIcon from '@mui/icons-material/Facebook';
import Aos from "aos";
import "aos/dist/aos.css"

function Socialmedia() {
  // const [Progress, setProgress] = useState(0);
 useEffect(()=>{
   Aos.init({duration:2000})
 },[])

  return (
    <>
  <nav className="side-menu d-none d-sm-block float-left" 
          data-aos="fade-right"
          data-aos-duration={2000} 
          style={{
            position: "sticky",
           
          }}
          data-aos-delay={500}>
    <ul>
      <li><a    href="https://www.linkedin.com/in/sushant-kogurwar">linkedin<span><FaLinkedin/></span></a></li>
      <li><a   href="https://leetcode.com/Kogurwarsushant/">leetcode<span><SiLeetcode/></span></a></li>
      <li><a   href="https://www.hackerrank.com/Sushantkogurwar">Hackerrank<span><FaHackerrank/></span></a></li>
      <li><a   href="https://github.com/sushskvnitn">Github<span><FaGithub/></span></a></li>
      <li><a   href="https://www.instagram.com/sushant_since_2002/">instagram<span><FaInstagram/></span></a></li>
      <li><a   href="https://www.facebook.com/sushant.kogurwar">facebook<span><FacebookIcon/></span></a></li>
    </ul>
  </nav>
    </>
  );
}

export default Socialmedia;
