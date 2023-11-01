import React from 'react'; 
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { useState } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis';

export default function MesProjets() {
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
                    <Contact />
                </div>
            </div>
        </ReactLenis>
        
    )
}
