import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <div className="nav__left">
                    <div className="nav__heading">
                        <Link>jameboyyy</Link>
                    </div>
                </div>
                <ol className="nav__right">
                    <ul className="nav__lists">
                        <li className="nav__list">
                            <Link>Projects</Link>
                        </li>
                        <li className="nav__list">
                            <Link>Blogs</Link>
                        </li>
                        <li className="nav__list">
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </ol>
            </div>
        </nav>
    );
}

export default Nav;
