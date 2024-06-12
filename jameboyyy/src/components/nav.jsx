import React from 'react';
import './nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <div className="nav__left">
                    <div className="nav__heading">
                        <a href="/">jameboyyy</a>
                    </div>
                </div>
                <ol className="nav__right">
                    <ul className="nav__lists">
                        <li className="nav__list">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="nav__list">
                            <a href="#blogs">Blogs</a>
                        </li>
                        <li className="nav__list">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </ol>
            </div>
        </nav>
    );
}

export default Nav;
