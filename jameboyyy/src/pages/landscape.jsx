import React from 'react';
import Nav from '../components/nav'
import headshot from '../assets/1-3.jpg'
import './landscape.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Landscape = () => {
    return (
        <>
        <div id="landscape__page">
            <Nav />
                <div className="landscape__container">
                    <div className="landscape__left">
                        <h1 className="landscape__title">
                            Hi There!
                        </h1>
                        <h2 className="landscape__name">
                            My name is<br/>
                            <span className="highlight">James Cadavona</span>
                        </h2>
                        <h2 className="landscape__subtitle">I am a 
                            <span className='highlight'> Front End Developer</span>
                        </h2>
                        <h2 className="landscape__desc">
                            Based in California, I am a recent Computer Science graduate specializing in building exceptional web applications and innovative digital experiences.
                        </h2>
                        <Link className="contact__btn">Contact Me
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                    </div>
                    <div className="landscape__right">
                        <div className="headshot__container">
                            <img
                                src={headshot}
                                className="headshot__img"
                                alt= "Headshot"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landscape;
