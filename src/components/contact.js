import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import IframeResizer from 'iframe-resizer-react'
function Contact() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>


<h1 className="contact3 font-weight-bold" >Contact us</h1>
     <div id="contact" className="container"  >

 
      <div className="contact3 py-5">
  <div className="row no-gutters">
    <div className="container" data-aos="fade-right" >
      <div className="row">
      <IframeResizer src="https://embed.lottiefiles.com/animation/81967"  frameBorder="0" title="animatedicons" scrolling="no"  style={{pointerEvents:"none"}} > </IframeResizer>
                
        <div className="col-lg-6">
          <div className="contact-box ml-3">
            
            <form className="mt-4"  method="POST" action="https://formsubmit.co/4kstatus.ssk@gmail.com"  >
              <div className="row">
                <div className="col-lg-12" data-aos="flip-up">
                  <div className="form-group mt-2">
                    <input className="form-control" required type="name" name="name" placeholder="name"/>
                    
                  </div>
                </div>
                <div className="col-lg-12" data-aos="flip-up">
                  <div className="form-group mt-2">
                  <input className="form-control" type="email" name="email" placeholder="Email Address"/>
                  </div>
                </div>

                <div className="col-lg-12" data-aos="flip-up">
                  <div className="form-group mt-2">
                    <input className="form-control" rows="3"  type="text" name="text" placeholder="message"></input>

                  </div>
                </div>
                <div className="col-lg-12">

                  {/* disable captcha  */}
                 <input type="hidden" name="_captcha" value="false"/>

                  {/* template for email received  */}
                <input type="hidden" name="_template" value="table"/>
                <input type="hidden" name="_next" value="https://sushantportfolio.netlify.app/"/>
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
