import React from 'react';
import { useRef, useEffect } from 'react';
import etoilerouge from '../assets/etoile_rouge.png'
import bonhomme from '../assets/bonhomme.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Parcours () {

    const Icon = useRef();
    const Icon2 = useRef();
    
    useEffect(() => {
    const myElement = Icon.current;
    const myElement2 = Icon2.current;
    
        gsap.to(myElement, {
            scrollTrigger: {
                trigger: myElement,
                start: "20px 100%",
                scrub: true,
                // markers: true
            },
            duration: 1,
            rotation: 360,
            ease: "none",
        });

        gsap.to(myElement2, {
            scrollTrigger: {
                trigger: myElement2,
                start: "20px 100%",
                scrub: true,
                // markers: true
            },
            duration: 1,
            rotation: -360,
            ease: "none",
        });
    }, []);


    return (
    <>
        <h1 className='red-title'>Mon parcours</h1>
        <div className='BUT'>
            <div className="flex-direction-column">
                <h2 className='title-formation'>BUT MMI <br/> <span className='date'>2022-2025</span></h2>
                <p>MMI (Métiers du Multimédia et de l'’Internet) est une formation pluridisciplinaire en 3 ans que j'ai suivi à l'’IUT de Lens. J’ai pu découvrir dans cette formation la communication, l’audiovisuel et surtout le web. En plus de me faire découvrir le monde passionnant du web, elle m’a permis d'expérimenter et de mettre à profit mes connaissances à travers de nouveaux langages de programmation.</p>
            </div>
            <div>
                <img className="moi" ref={Icon} src={bonhomme} alt="" />
            </div>
        </div>

        <div className='BAC'>
            <div>
                <img className="moi" ref={Icon2} src={etoilerouge} alt="" />
            </div>
            <div className='flex-direction-column'>
                <h2 className='title-formation'>LYCÉE SAINT-RIQUIER <br/> <span className='date'>2020-2022</span></h2>
                <p>Durant la période du Covid 19, j’ai passé ma 1ère et ma terminal au lycée Saint-Riquier à Amiens, classé actuellement 1er des lycées dans la Somme. J’ai pris comme spécialité Mathématiques, Physique-Chimie (que j’ai arrêté en terminale) et Numérique et Sciences Informatique (NSI). J’ai obtenu mon baccalauréat avec mention Bien.</p>
            </div>
        </div>
    </>
    );
};
