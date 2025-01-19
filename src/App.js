import "./App.css";
import Navbar from "./components/navbar";
import Socialmedia from "./components/socialmedia";
import Contact from "./components/contact";
import About from "./components/about";
import Home from "./components/home";
import React, { useState, useEffect } from "react";
import Footer from "./components/footer";
import Projects from "./components/projects";
import RingLoader from "react-spinners/RingLoader";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import Skills from "./components/skills";

function App() {
  const [loading, setLoading] = useState(true);

  const handleAudioPlay = () => {
    const audio = document.getElementById('song');
    audio.play().catch((err) => {
      console.log("Audio play error:", err);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      handleAudioPlay(); // Attempt to play the audio once the page is loaded
    }, 4000);
  }, []);

  return (
    <>
      <div className="app">
        {loading ? (
          <div className="loader">
            <h1>
              <span style={{ color: "white" }}>Hello_ </span>
              <span style={{ color: "red", fontWeight: "bold" }}>
                <Typewriter
                  loop="loop"
                  cursor="cursor"
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={100}
                  delaySpeed={100}
                  words={["welcome ;", "नमस्ते;", "స్వాగతం;"]}
                />
              </span>
            </h1>
            <RingLoader color={"red"} loading={loading} size={100} />
          </div>
        ) : (
          <div className="display img-fluid">
            <audio
              id="song"
              src="https://github.com/Short-Zed/Movie-Responsive-Site/raw/main/X2Download.app%20-%20Binary%20Code%20-%20Interface%20Sound%20Effects%20_%20Sci-Fi%20Computer%20Beeps%20%26%20Data%20Processing%20Sounds%20(128%20kbps).mp3"
              type="audio/mp3"
              autoPlay
              style={{ display: "none" }}
            />
            <div>
              <div className="sticky-top">
                <Navbar />
              </div>

              <Home />
              <About />
              <Skills />
              <Projects />
              <Socialmedia />
              <Contact />
              <Footer />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
