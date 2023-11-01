import React, { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Parcours from "./components/Parcours";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import F from "./components/F";
import style from './components/styles/style.css'


export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ReactLenis root>
      <div className={`App ${theme}`} data-theme={theme}>
        <div className="noise"></div>
        <div className="container">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <F />
          <About />
          <Skills />
          <Parcours />
          <Projets />
          <Contact />
        </div>
      </div>
    </ReactLenis>
  );
}
