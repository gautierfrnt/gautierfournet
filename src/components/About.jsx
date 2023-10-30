import React from 'react';
import cv from '../assets/cv.pdf';
import Person from "./Person"

export default function About () {

    return (
    <>
        <h1 className="red-title">Qui suis-je ?</h1>
        <div className="flex">
            <div className="presentation-left">
                <p>Bonjour ! Je m’appelle Gautier Fournet j’ai 19 ans et je suis actuellement en 2ème année de BUT Métiers du Multimédia et de l’Internet à l’IUT de Lens. </p>
                <p>Je suis passionné à la fois par le développement web et le webdesign. Je cherche d’ailleurs un stage de 2 mois dans ce domaine. </p>
                <p>Je compte ainsi poursuivre mon parcours dans le milieu du développement créatif. Si vous souhaitez accéder directement à mon CV pdf ou si vous voulez me contacter je vous laisse les liens adéquats ci-dessous !</p>
                <div>
                    <a className="button" href={cv} target="_blank" rel="noreferrer">CV</a>
                    <a className="button" href="https://www.linkedin.com/in/gautier-fournet-9a9643271/" target="_blank" rel="noreferrer">Linkedin</a>
                </div>
            </div>
            <div className='presentation-right'>
                <Person />
            </div>
        </div>
    </>
    );
};
