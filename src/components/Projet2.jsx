import edn from '../assets/E-DN.png'
import wordpress from '../assets/wordpress.png'
import figma from '../assets/figma.png'
import video from '../assets/edn.mp4'

export default function Projet2 () {
    return (
    <>
        <div className='projet-flex'>
            <h1 className="red-title">E-DN :</h1>
            <div className='projet-tools'>
                <img src={wordpress} alt="" />
                <img src={figma} alt="" />
            </div>
        </div>

        <div className='description'>
            <div className='left'>
                <p>EDN est un site web qui a été conçu lors d'un projet scolaire où nous devons promouvoir un évènement fictif. Dans notre cas, on voulait promouvoir un évènement caritatif E-Sport. On avait comme contrainte d'utiliser Wordpress qui offrait peu de fonctionnalité comparé au code. Il fallait tout d'abord créer la maquette sur Figma pour ensuite le traduire en code Wordpress. J'ai été dans une équipe de 5, mon rôle dans ce projet scolaire était de coder l'intégralité du site en Wordpress. J'ai fais cette tâche avec Louis Bocquet, Tanguy Caruel était chargé de designer le site et Valentin Warlop et Lucas Chedhomme était chargé du contenu Multimédia </p>
                <div>
                <a className="button" href="" target="_blank" rel="noreferrer">Voir le projet</a>
                </div>
            </div>
            <div className='right'>
                <img src={edn} alt="" />
            </div>
        </div>

        <div className='video'>
            <video src={video} autoPlay loop muted></video>
        </div>
    </>
    )
};