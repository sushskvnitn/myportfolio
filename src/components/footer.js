import React from 'react'
import {GrResume} from 'react-icons/gr';
import {FaCopyright} from 'react-icons/fa';

function footer() {
    return (
        <div className='sticky-bottom' id='footer'>
            
            <footer id="footer" className="grey lighten-4 text-center text-lg-start" >
  <div className="footer-copyright text-center p-3 grey lighten-1 text-black-50">
    <FaCopyright/> 2021 Copyright  :
    <a className="text" href="/">
     <GrResume/>  myportfolio.com
    </a>
  </div>

</footer>
        </div>
    )
}

export default footer
