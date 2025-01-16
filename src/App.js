import "./App.css";
import Navbar from "./components/navbar";
import Socialmedia from "./components/socialmedia";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/contact";
import About from "./components/about";
import Home from "./components/home";
import React, {useState, useEffect} from "react";
import Footer from "./components/footer";
import Projects from "./components/projects";
import "react-simple-typewriter/dist/index";
import Skills from "./components/skills";
import Terminal from "./components/Terminal";
// import Parallaxscroll from './components/parallaxscroll';
function App() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (<> < div className = "app" > {
    loading
      ? (<> 

      <Terminal/>
    
  </>)
      : (<div className="display img-fluid">
   
        <div>
        
          <div className="sticky-top">
            <Navbar/>
          </div>

          <Home/>
          <About/>
          <Skills/>
          <Projects/>
        
            <Socialmedia />
          <Contact  />
          <Footer/>
         {/* <Parallaxscroll/> */}
        </div></div>)
  } </div>

    </>);
}

export default App;
