import energcuma from '../assets/energcuma.png'
import js from '../assets/js.png'
import threejs from '../assets/threejs.png'
import figma from '../assets/figma.png'
import adobe from '../assets/adobe.png'
import video from '../assets/ENERGCUMA.mp4'

export default function Projet1 () {
    return (
    <>
        <div className='projet-flex'>
            <h1 className="red-title">Energcuma :</h1>
            <div className='projet-tools'>
                <img src={js} alt="" />
                <img src={threejs} alt="" />
                <img src={figma} alt="" />
                <img src={adobe} alt="" />
            </div>
        </div>

        <div className='description'>
            <div className='left'>
                <p>Energcuma est mon premier site web qui a été conçu avec HTML, CSS, Javascript, GSAP, THREE.JS et Lenis dans le but de promouvoir une marque fictive de boisson énergisante. L'inspiration pour ce projet est née lorsqu'il a fallu créer l'identité visuelle de cette marque lors d'un cours d'esthétique. Ce site web a été créé dans le cadre du festival MMI en 
                en trois semaines dans le cadre d'un projet personnel pour découvrir l'univers fascinant de la 3D et du développement créatif.</p>
                <div>
                <a className="button" href="https://energcumafinale.vercel.app/" target="_blank" rel="noreferrer">Voir le projet</a>
                </div>
            </div>
            <div className='right'>
                <img src={energcuma} alt="" />
            </div>
        </div>

        <div className='video'>
            <video src={video} autoPlay loop muted></video>
        </div>
    </>
    )
};
