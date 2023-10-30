import React from 'react'; 
import energcuma from '../assets/energcuma.png';
import edn from '../assets/E-DN.png';
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
                    <h1 className="red-title">Mes projets :</h1>
                    <div className='projet-img'>
                        <a href="./projetEnergcuma"><img className="img-projet" src={energcuma} alt="" /></a>
                        <a href="./projetEDN"><img className="img-projet" src={edn} alt="" /></a>
                    </div>
                <Contact />
            </div>
        </div>
        
    )
}
