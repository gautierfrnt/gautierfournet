import React from 'react'; 
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { useState } from 'react'

export default function MesProjets() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`App ${theme}`} data-theme={theme}>
            <div className="noise"></div>
            <div className="container">  
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Contact />
            </div>
        </div>
        
    )
}
