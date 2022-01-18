import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Contact() {
  
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <> <div id="contact" className="container" data-aos="zoom-out-up" >


      <div className="contact3 py-5">
  <div className="row no-gutters"><h1> <kbd className=" text-center">Contact us </kbd></h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="card-shadow">
            <img alt="" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" className="img-fluid"/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-box ml-3">
            
            <form className="mt-4"  method="POST" action="https://formsubmit.co/4kstatus.ssk@gmail.com"  >
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" required type="name" name="name" placeholder="name"/>
                    
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                  <input className="form-control" type="email" name="email" placeholder="Email Address"/>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" rows="3"  type="text" name="text" placeholder="message"></input>

                  </div>
                </div>
                <div className="col-lg-12">

                  {/* disable captcha  */}
                 <input type="hidden" name="_captcha" value="false"/>

                  {/* template for email received  */}
                <input type="hidden" name="_template" value="table"/>

                  {/* auto response to user */}
                 <input type="hidden" name="_autoresponse" value="your response has been received sucessfully .thank you,i will get back to you soon "/>
                  <button type="submit" value="Send Email" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default Contact;
