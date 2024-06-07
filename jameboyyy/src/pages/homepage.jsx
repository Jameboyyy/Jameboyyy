import React from 'react';
import Nav from '../components/nav';
import Landscape from '../sections/landscape';
import Projects from '../sections/projects';
import Blogs from '../sections/blogs';
import Contact from '../sections/contact';
import Footer from '../components/footer';

const Homepage = () => {
    return (
        <>
            <Nav/>
            <Landscape/>
            <Projects/>
            <Blogs/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Homepage;
