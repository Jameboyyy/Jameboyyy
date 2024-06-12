import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_civ4wxd', 'template_1wusypd', form.current, 'ueBmTbL0hk1p1gFTW')
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset(); 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div id="contact__container">
            <h1 className="contact__title">Contact</h1>
            <div className="contact__card">
                <form ref={form} className="contact__form" onSubmit={sendEmail}>
                    <div className="contact__form-group">
                        <label htmlFor="name" className="contact__label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="contact__input"
                            required
                        />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="email" className="contact__label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="contact__input"
                            required
                        />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="message" className="contact__label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="contact__textarea"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="contact__button">Send</button>
                </form>
                <div className="contact__info">
                    <h2>Get in Touch</h2>
                    <p>If you have any questions, feel free to reach out via the form on the left. I'm always happy to connect and assist with any inquiries you may have.</p>
                    <p>Looking forward to hearing from you!</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
