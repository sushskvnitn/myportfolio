import React,{useState, useEffect} from "react";
import { BsFillBarChartLineFill } from "react-icons/bs";
function Footer() {
const [counter, setcounter] = useState(0);
 function visitorcount() {
  fetch('https://api.countapi.xyz/update/sushantportfolio.vercel.app/sushport/?amount=1')
	.then(res => res.json())
	.then(res => {
		setcounter(res.value);
	})
} 
useEffect(() => {
  visitorcount();
}, []);
  return (
    <>
      <div className="container ">
        <footer
          className="text-center text-dark"
          style={{ backgroundColor: "#f1f1f1", zIndex: 1 }}
        >
          <div className="container pt-4">
            <div className="display-5 lead" > <kbd id="counter "
            >
           <BsFillBarChartLineFill/>  views : {counter}
            </kbd></div>
            <section className="mb-4">
              <a
                id="footicon"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.facebook.com/sushant.kogurwar"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                id="footicon"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.instagram.com/sushant_since_2002/"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                id="footicon"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/sushant-kogurwar-2002/"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                id="footicon"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/sushskvnitn"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center text-dark p-3"
            style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a
              className="text-dark"
              href="https://sushantportfolio.vercel.app/"
            >
              sushantportfolio.vercel.app
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
