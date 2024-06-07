import React from 'react';
import headshot from '../assets/1-3.jpg'
import './landscape.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faMouse, faHandPointer } from '@fortawesome/free-solid-svg-icons';
const Landscape = () => {
    return (
        <>
            <div id="landscape__section">
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
                        I am a recent Computer Science graduate from CSUF, with a keen interest in creating engaging and innovative Website and Mobile Front End Applications. 
                        </h2>
                        <h2 className="based">
                            <FontAwesomeIcon className="map__pin" icon={faMapPin}/>
                            Anaheim, California</h2>
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
                    <div className="scroll__indicator">
                    <FontAwesomeIcon className="scroll__icon" icon={faMouse}/>
                    <FontAwesomeIcon className="scroll__icon mobile" icon={faHandPointer}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landscape;
