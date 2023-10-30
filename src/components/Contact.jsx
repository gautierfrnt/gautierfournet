import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import cv from '../assets/cv.png'
import mail from '../assets/mail.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import cvpdf from '../assets/cv.pdf';
import FlashContact from './FlashContact'

export default function Contact () {
    const form = useRef();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bpl25xm', 'template_jvorhyq', form.current, 'TL560xq4WlMFu91I-')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                setIsFormSubmitted(true); 
                console.log('Email envoyé !');
            }, (error) => {
                console.log(error.text);
            });
        };

    return (
    <>
        <h1 className='red-title'>Contactez-moi !</h1>
        <div className="contact-flex">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Prénom' name='your_name' required/>
                <input type="email" placeholder='E-mail' name='your_email' required/>
                <textarea placeholder="Objets" name='message' required></textarea>
                
                <div>
                    <input type="submit" value="Envoyer"/>          
                </div>
                {isFormSubmitted && (
                    <p className="form-submit" style={{ color: 'green' }}>Le formulaire a été envoyé avec succès !</p>
                )}
            </form>
            <div className='flashcontact'>
                <FlashContact />
            </div>
        </div>

        <div className="contact_bottom">
            <div>
                <a href={cvpdf} target='_blank' rel="noreferrer"><img src={cv} alt="cv" /></a>
                <p>CV</p>
            </div>
            <div>
                <a href="mailto:gautier.fournet@gmail.com" target='_blank' rel="noreferrer"><img src={mail} alt="mail" /></a>
                <p>gautier.fournet@gmail.com</p>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/gautier-fournet-9a9643271/" target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
                <p>Linkedin</p>
            </div>
            <div>
                <a href="https://github.com/gautierfrnt" target='_blank' rel="noreferrer"><img src={github} alt="github" /></a>
                <p>Github</p>
            </div>
        </div>
    </>
    );
};