import React from 'react'


function footer() {
    return (<>
<div className ="container ">

  <footer className ="text-center text-white" style={{backgroundColor: "#f1f1f1",zIndex:1}}>

  <div className ="container pt-4">

    <div style={{pointerEvents: "none"}} className="elfsight-app-c6afc8a6-31f1-4627-8cbc-3594062760df"></div>

    <section className ="mb-4">
      <a  id="footicon"
        className ="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.facebook.com/sushant.kogurwar"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className ="fab fa-facebook-f"></i
      ></a>





      <a  id="footicon"
        className ="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/sushant_since_2002/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className ="fab fa-instagram"></i
      ></a>


      <a  id="footicon"
        className ="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/in/sushant-kogurwar-2002/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className ="fab fa-linkedin"></i>
      </a>

      <a  id="footicon"
        className ="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com/sushskvnitn"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className ="fab fa-github"></i
      ></a>
    </section>

  </div>

  <div className ="text-center text-dark p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright:
    <a   className ="text-dark" href="https://sushantportfolio.vercel.app/">sushantportfolio.vercel.app</a>
  </div>

</footer>

</div>



</>
    )
}

export default footer
