import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import threejs from '../assets/threejs.png'
import php from '../assets/php.png'
import laravel from '../assets/laravel.png'
import sql from '../assets/sql.png'
import git from '../assets/git.png'
import adobe from '../assets/adobe.png'
import blender from '../assets/blender.png'
import figma from '../assets/figma.png'



export default function Skills ()  {
    return (
    <>
        <h1 className='red-title'>Mes compétences</h1>
        <div className='front-back'>
            <div className="front">
                <h2 className='skills-category'>Front-end</h2>
                <div className='tools'>
                    <div>
                        {/* {isDayMode ? <img src={html} alt="Light" /> : <img src={htmlnoir} alt="Dark" />} */}
                        <img src={html} alt="HTML" />
                        <p>HTML</p>
                    </div>
                    <div>
                        <img src={css} alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div>
                        <img src={js} alt="JS" />
                        <p>JS</p>
                    </div>
                    <div>
                        <img src={react} alt="React" />
                        <p>React</p>
                    </div>
                    <div>
                        <img src={threejs} alt="Threejs" />
                        <p>Three.js</p>
                    </div>
                </div>
                <div>
                    <p>Le développement front-end est ma spécialité, après avoir étudié le HTML, CSS et JS pendant mes études, je suis en phase d’apprentissage sur React ainsi que Three.js pour intégrer des éléments en 3D de façon interactif  dans les sites web.</p>
                </div>
            </div>

            <div className="front">
                <h2 className='skills-category'>Back-end</h2>
                <div className='tools'>
                    <div>
                        <img src={php} alt="PHP" />
                        <p>PHP</p>
                    </div>
                    <div>
                        <img src={laravel} alt="Laravel" />
                        <p>Laravel</p>
                    </div>
                    <div>
                        <img src={sql} alt="Sql" />
                        <p>SQL</p>
                    </div>
                    <div>
                        <img src={git} alt="git" />
                        <p>GIT</p>
                    </div>
                </div>
                <div>
                    <p>Le back-end n'est pas mon domaine principal, mais je dispose des compétences en PHP, en SQL et en Laravel. Je suis également capable d'utiliser GIT pour collaborer sur des projets.</p>
                </div>
            </div>

            <div className="front">
                <h2 className='skills-category'>Design</h2>
                <div className='tools'>
                    <div>
                        <img src={adobe} alt="adobe" />
                        <p>Adobe</p>
                    </div>
                    <div>
                        <img src={blender} alt="blender" />
                        <p>Blender</p>
                    </div>
                    <div>
                        <img src={figma} alt="figma" />
                        <p>Figma</p>
                    </div>
                </div>
                <div>
                    <p>Le design est quelque chose de primordial selon moi. Je maîtrise les bases de certains logiciels Adobe (PhotoShop, Illustrator, Première Pro, In Design) et j’apprends de mon côté Blender pour élaborer de la modélisation 3d et Figma pour créer les maquettes des futures sites Internets  </p>
                </div>
            </div>
    
        </div>
    </>
    )
};
