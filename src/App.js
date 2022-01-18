import "./App.css";
import Navbar from "./components/navbar";
import Socialmedia from "./components/socialmedia";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/contact";
import About from "./components/about";
import Home from "./components/home";
import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/footer";
import Projects from "./components/projects";
import RingLoader from "react-spinners/RingLoader";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";

// import { Fragment } from "react";
// import ScrollButton from "./components/ScrollButton";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const [progress, setProgress] = useState(0);
 
  return (
    <>
      <div className="app">
        {loading ? (
          <>
            <div className="loader">
              <br />
              <br />

              <div>
                <h1 style={{}}>
                 
                  Hello_
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      marginLeft: "10px",
                    }}
                  >
                    <Typewriter
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={80}
                      deleteSpeed={100}
                      delaySpeed={100}
                      words={["welcome", "नमस्ते", "స్వాగతం"]}
                    />
                  </span>
                </h1>
              </div>

              <RingLoader color={"#DAA520"} loading={loading} size={100} />
            </div>
          </>
        ) : (
          <div className="display img-fluid">

            <LoadingBar
              color="#DAA520"
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
            
              <div>
               <Navbar/><Home/><About /><Socialmedia />  <Projects /> <Contact /><Footer/>
               </div>
    
          </div>
        )}
      </div>
    </>
  );
}

export default App;
