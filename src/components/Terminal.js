import React, { useEffect, useState } from 'react';
import './TerminalProfile.css'; // Ensure the CSS file exists with proper styles

const TerminalProfile = () => {
  const [content, setContent] = useState('');
  const text = `Initializing portfolio...
  _____
  |     |
  | | | |
  |_____|
  __| |__
  
  SYSTEM STATUS: ONLINE
  Welcome to my portfolio. I am Sushant, a Developer and Ethical Hacker.`;

  useEffect(() => {
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        setContent((prev) => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, 20);
      }
    };

    typeWriter();

    // Random glitch effect
    const intervalId = setInterval(() => {
      const glitchElements = document.querySelectorAll('.glitch');
      glitchElements.forEach((element) => {
        element.style.transform = `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)`;
        setTimeout(() => {
          element.style.transform = 'none';
        }, 50);
      });
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [text]);

  // Format the content to replace newlines with actual line breaks
  const formattedContent = content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="terminal">
      <div className="window-title">root@system:~$ Portfolio.exe</div>

      <div className="content">
        <span className="prompt">{'>'}</span>
        {formattedContent}
      </div>

      <div className="cursor"></div>
    </div>
  );
};

export default TerminalProfile;
