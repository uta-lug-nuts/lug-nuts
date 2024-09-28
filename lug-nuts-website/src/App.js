import React, { useEffect, useState } from 'react';
import './App.css';
import { scroller } from 'react-scroll';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Videos from './Videos';
import Resources from './Resources';
import TerminalCommands from './TerminalCommands';
import Donut from './Donut';

import JeremiahPhoto from './assets/images/Jeremiah.png';
import BetimPhoto from './assets/images/Betim.jpg';
import BrettPhoto from './assets/images/Brett.png';

// Removed gsap imports
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Removed gsap registration
// gsap.registerPlugin(ScrollTrigger);

function useScrollToTopOrSection() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    
    // Adjust the navbar height to 0 to avoid section clipping
    const navbarHeight = 0;

    if (location.pathname === '/') {
      if (section) {
        scroller.scrollTo(section, {
          duration: 600, // Scroll duration
          smooth: 'easeInOutCubic',  // Smooth easing
          offset: -navbarHeight, // Ensure correct alignment
        });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
}

function App() {
  const [officers] = useState([
    {
      name: 'Jeremiah Pitts',
      role: 'President',
      photo: JeremiahPhoto,
      description: 'Jeremiah is passionate about Linux and open-source software. He oversees club operations and organizes workshops.',
    },
    {
      name: 'Betim Hodza',
      role: 'Co-President',
      photo: BetimPhoto,
      description: 'Betim specializes in system administration and cybersecurity. He oversees club operations and organizes workshops.',
    },
    {
      name: 'Brett Boggs',
      role: 'Event Coordinator',
      photo: BrettPhoto,
      description: 'Brett specializes in social engineering and cybersecurity. She helps with event planning and technical sessions.',
    },
  ]);

  const tips = [
    'Tip: Use "cd -" to quickly jump back to the previous directory.',
    'Command: "sudo apt-get update" to refresh package sources.',
    'Tip: Use "ls -a" to show hidden files.',
    'Command: "grep -i" for case-insensitive search in files.',
    'Quote: "Talk is cheap. Show me the code." - Linus Torvalds',
  ];

  // Pick a random tip or command
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  useEffect(() => {
    // Removed all GSAP animation logic
  }, []);

  return (
    <Router>
      <ScrollHandler />
      <div className="bg-gruvboxBg text-gruvboxFg min-h-screen">
        {/* Navigation */}
        <nav className="fixed w-full bg-gruvboxBg text-gruvboxFg p-4 shadow-lg z-50">
          <ul className="flex justify-between sm:justify-center flex-wrap space-x-8">
            <li className="flex-grow sm:flex-grow-0">
              <Link to="/?section=home" className="cursor-pointer">Home</Link>
            </li>
            <li className="flex-grow sm:flex-grow-0">
              <Link to="/?section=whatwedo" className="cursor-pointer">What We Do</Link>
            </li>
            <li className="flex-grow sm:flex-grow-0">
              <Link to="/?section=officers" className="cursor-pointer">Officers</Link>
            </li>
            <li className="flex-grow sm:flex-grow-0">
              <Link to="/terminal-commands" className="cursor-pointer">Terminal Commands</Link>
            </li>
            <li className="flex-grow sm:flex-grow-0">
              <Link to="/videos" className="cursor-pointer">Videos</Link>
            </li>
            <li className="flex-grow sm:flex-grow-0">
              <Link to="/resources" className="cursor-pointer">Resources</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home officers={officers} randomTip={randomTip} />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/terminal-commands" element={<TerminalCommands />} />
        </Routes>
      </div>
    </Router>
  );
}

function ScrollHandler() {
  useScrollToTopOrSection();
  return null;
}

export default App;

function Home({ officers, randomTip }) {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([]);

  const handleCommand = (e) => {
    e.preventDefault();
    let output = '';
    if (terminalInput === 'ls') {
      output = 'Projects  Workshops  Events  Officers';
    } else if (terminalInput === 'meow') {
      output = `
        /\\_/\\  
       ( o.o ) 
        > ^ <
      `;
    } else if (terminalInput.startsWith('echo ')) {
      output = terminalInput.replace('echo ', '');
    } else {
      output = 'Command not found. Try "ls", "meow", or "echo"';
    }
    setTerminalOutput([...terminalOutput, `> ${terminalInput}`, output]);
    setTerminalInput('');
  };

  return (
    <>
      {/* Homepage Section */}
      <div id="home" className="section min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="text-center mb-6">
          <div className="header-art text-gruvboxGreen text-center mb-6 z-50">
            {`
    ______   ________  ________       _______  ________  ________  ________ 
  //      \\ /    /   \\/        \\    //   /   \\/    /   \\/        \\/        \\
 //       //         /       __/   //        /         /        _/        _/
//        //         /       / /   /         /         //       //-        / 
\\________/\\________/\\________/    \\__/_____/\\________/ \\______/ \\________/  
            `}
          </div>
          <h1 className="text-4xl font-bold text-gruvboxYellow mb-4 z-50">LUG Nuts</h1>
          <p className="text-xl z-50">Welcome to the official Linux User Group of UTA. Dive into Linux, open-source, and cybersecurity with us!</p>
          <p className="text-xl text-gruvboxOrange mt-4 mb-4 z-50">
            LUG Nuts is the official Linux User Group at The University of Texas at Arlington, fostering a community of students interested in Linux,
            open-source software, and system administration. Our group is open to everyone, from Linux newcomers to seasoned sysadmins.
          </p>
          <div className="mt-8 z-50">
            <pre className="bg-gruvboxOrange p-6 text-center rounded shadow-md max-w-4xl z-50">
              {`
# Welcome to the Linux User Group at UTA
echo "LUG Nuts at UTA"
echo "Explore. Learn. Hack."
sudo apt-get install knowledge
              `}
            </pre>
          </div>
        </div>
      </div>

      {/* Terminal Simulation Section */}
      <div className="section flex items-center justify-center bg-gruvboxBg text-gruvboxFg px-8 py-8 relative z-20">
        <div className="terminal bg-gruvboxFg text-gruvboxBg p-6 rounded w-full max-w-md">
          <div className="terminal-output">
            {terminalOutput.map((output, index) => (
              <div key={index} className="mb-2 text-gruvboxYellow">{output}</div>
            ))}
          </div>
          <form onSubmit={handleCommand}>
            <label className="block text-gruvboxYellow">Type a command:</label>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              className="w-full bg-transparent border-b-2 border-gruvboxYellow text-gruvboxYellow focus:outline-none"
              placeholder="e.g., ls, meow, echo Hello"
            />
          </form>
        </div>
      </div>

      {/* Events & Workshops Section */}
      <div id="whatwedo" className="section min-h-screen flex items-center justify-center bg-gruvboxGreen text-gruvboxFg px-4 sm:px-8 py-16 relative z-10">
        <div className="text-center z-10">
          <h2 className="text-3xl font-bold mb-8">Events & Workshops</h2>
          <p className="text-xl mb-6">
            Join us for regular workshops covering topics like:
          </p>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>System Administration and Linux Shell Scripting</li>
            <li>Networking, Firewalls, and Security</li>
            <li>Kernel Configuration and Optimization</li>
            <li>Linux Certifications: LPIC-1, RHCSA, and more</li>
            <li>Collaborative Open-Source Projects</li>
          </ul>
          <div className="mt-8">
            <pre className="bg-gruvboxOrange p-6 text-center rounded shadow-md max-w-4xl">
              {`
# Example Linux Workshop Command
sudo systemctl restart apache2
echo "Restarting the Apache server..."
              `}
            </pre>
          </div>
        </div>
      </div>

      {/* Officers Section */}
      <div id="officers" className="section min-h-screen flex flex-col items-center justify-center bg-gruvboxRed z-10 px-4 sm:px-8 py-16">
        <div className="text-center text-gruvboxFg max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Meet the Officers</h2>
          <div className="officer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.map((officer, index) => (
              <div key={index} className="mt-10 flex flex-col items-center text-center">
                <img
                  src={officer.photo}
                  alt={officer.name}
                  className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover mb-4 shadow-lg"
                />
                <h3 className="text-2xl font-bold">{officer.name}</h3>
                <p className="text-gruvboxYellow">{officer.role}</p>
                <p className="text-sm">{officer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Donut and Tips */}
      <div className="floating-elements absolute bottom-[-150px] left-0 right-0 z-40">
        <div className="flex justify-between items-center">
          {/* Donut positioned outside 'home' */}
          <div className="donut-container relative ml-8 text-xs"> {/* Made text smaller here */}
            <Donut />
          </div>

          {/* Informational Text Box */}
          <div className="information-box mr-8 text-sm"> {/* Made the tip text smaller here */}
            <h3 className="text-xl font-bold mb-2">Tip of the Day</h3>
            <p className="text-base">{randomTip}</p>
          </div>
        </div>
      </div>
    </>
  );
}
