import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import './Footer.css'

function Footer() {
    const form = useRef();
    const [success, setSuccess ] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_hiu6etj", "template_7nvfdd9", form.current, "u1nV6gEWm-HRWbKDm").then(
            (result) => {
                setSuccess(s => !s)
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };
    return (
        <div className="contact">
            <h3>Mes coordonnées :</h3>
            <p><a className="mailto" href="mailto:louisbw78@gmail.com">louisbw78@gmail.com</a></p>
            <h3>Formulaire :</h3>
            {success && <p>Votre message à bien été envoyé</p>}
            {!success && <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" required></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required></input>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Que souhaitez-vous dire ?" required></textarea>
                <input className="submit" type="submit" value="Envoyer"></input>
            </form>}
        </div>
    )
}

export default Footer