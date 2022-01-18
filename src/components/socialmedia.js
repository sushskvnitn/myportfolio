import React ,{useState} from "react";
import {FaGithub,FaLinkedin,FaHackerrank,FaStar} from 'react-icons/fa';
import LoadingBar from 'react-top-loading-bar'
function Socialmedia() {
  const [Progress, setProgress] = useState(0)
  return (

<>
<LoadingBar
        color='#FFFF00'
        progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
 <div className="container">
      <div className="container d-flex justify-content-center content-wrap"style={{width:" 23 rem"}}>
        <div className="card text-dark mb-3" >
          <div className="card-header bg-warning"><b><FaGithub/> GITHUB PROFILE</b></div>
          <div className="card-body">
            <h5 className="card-title">sushskvnitn</h5>
            <img className="img-fluid"
              src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
              heigth="200px" 
              width="200px"
              alt=""
            />
            <p className="card-text">
            some of my projects on web development  i have added some of them to projects of<br/> section
            </p>
            <a
              href="https://github.com/sushskvnitn"
              className="btn btn-warning"
              role="button"
              data-bs-toggle="button"
              onClick={() => setProgress(100)}
            >
              get to my profile
            </a>
          </div>
        </div>
      </div>
      <br />

      <div className="container d-flex justify-content-center content-wrap"style={{width:" 23 rem"}}>
        <div className="card text-dark mb-3" >
          <div className="card-header bg-warning"><b><FaLinkedin/> linkedin PROFILE</b></div>
          <div className="card-body">
            <h5 className="card-title">sushant kogurwar</h5>
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="" height="200px" width="200px" className="img-fluid"
            />
            <p className="card-text">
              Here my linked in profile see more details here whtever i have written there are skills
            </p>
            <a
              href="https://www.linkedin.com/in/sushant-kogurwar-2002/"
              className="btn btn-warning"
              role="button"
              data-bs-toggle="button"
              onClick={() => setProgress(100)}
            >
              get to my profile
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="container d-flex justify-content-center content-wrap" style={{width:" 23 rem"}}>
        <div className="card text-dark mb-3" >
          <div className="card-header bg-warning"><b><FaHackerrank/> HACKERRANK PROFILE</b></div>
          <div className="card-body">
            <h5 className="card-title">sushant kogurwar</h5>
            <img className="img-fluid"
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" heigth="200px" width="200px"
              alt=""
            />
            <p className="card-text">
              hello ,Im <FaStar/><FaStar/><FaStar/><FaStar/> <FaStar/> coder in c ++ and im practicing more so lets check out more here
            </p>
            <a
              href="https://www.hackerrank.com/Sushantkogurwar"
 className="img-fluid btn btn-warning"
            
              role="button"
              data-bs-toggle="button"
              onClick={() => setProgress(100)}
            >
              get to my profile
            </a>
          </div>
        </div>
      </div>
      </div>

   </>
  );
}

export default Socialmedia;