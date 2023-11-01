import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function NoPage() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ReactLenis root>
            <div className={`App ${theme}`} data-theme={theme}>
                <div className="noise"></div>
                <div className="container">  
                    <div className='center'>
                        <Navbar theme={theme} toggleTheme={toggleTheme} />
                        <h1 className="red-title">Erreur 404 <span>.</span><span>.</span><span>.</span></h1>
                    </div>
                </div>
            </div>
        </ReactLenis> 
    )
}
