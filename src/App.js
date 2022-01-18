import "./App.css";
import Navbar from "./components/navbar";
import Socialmedia from "./components/socialmedia";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/contact";
import About from "./components/about";
import Home from "./components/home";
import React, { useState ,useEffect} from "react";
import LoadingBar from 'react-top-loading-bar'
import Footer from "./components/footer";
import Projects from "./components/projects";
import RingLoader from "react-spinners/RingLoader";
import { Typewriter } from 'react-simple-typewriter';
import "react-simple-typewriter/dist/index";

import { Fragment } from 'react';
import ScrollButton from './components/ScrollButton';
function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
      setLoading(true)
      setTimeout(()=>{
      setLoading(false);
    },4000)
},[])
  const [progress, setProgress] = useState(0)
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()
  window.addEventListener('mousemove',(e) =>{
  setCursorX(e.pageX)
  setCursorY (e.pageY)

})
  return (
<>
    <div className="app">{
      loading?
      <>
     
      <div  className="loader"
      >
       <br /><br />
       
              <div>
            <h1 style={{}}> Hello_   
            <span style={{color :"red",fontWeight : "bold",marginLeft:"10px",
          }}>
              <Typewriter
               loop
               cursor
               cursorStyle="|"
               typeSpeed ={80}
               deleteSpeed ={100}
               delaySpeed={100}
               words={['welcome','नमस्ते','స్వాగతం']}
              />
            </span>
             </h1>
        </div>
        
        <RingLoader color={'#DAA520'} loading={loading} size={100}/></div>
        </>
      :



      
      <div className="display img-fluid">

     <div className="cursor" style={{left:cursorX + "px",top:cursorY + "px"}}> </div>
    <LoadingBar
        color='#DAA520'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Router>      <Fragment>
      <ScrollButton />
    </Fragment>
          <Navbar> </Navbar>
          <Switch>
            <Route path="/about" >
              <About />
              <Fragment>
      <ScrollButton />
    </Fragment>
              <Footer></Footer>
            </Route>
            <Route path="/socialmedia">
              <Socialmedia />
              <Fragment>
      <ScrollButton />
    </Fragment>
              <Footer></Footer>
            </Route>
            <Route path="/contact" >
              <Contact />
              <Footer></Footer>
            </Route>
            <Route path="/projects">
              <Projects />
              <Footer></Footer>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
     </div>
    }
      </div>
      </>
  );
}

export default App;
