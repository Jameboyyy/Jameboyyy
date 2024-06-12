import React from 'react';
import Landscape from '../sections/landscape';
import Projects from '../sections/projects';
import Blogs from '../sections/blogs';
import Contact from '../sections/contact';
import Footer from '../components/footer';

const Homepage = () => {
  return (
    <>
      <section id="landscape">
        <Landscape />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
