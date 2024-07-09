import React, { useEffect, useState } from 'react';
import sanityClient from '../sanityClient';
import './projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    sanityClient.fetch('*[_type == "post" && "Projects" in categories[]->title]{title, mainImage{asset->{url}}, publishedAt, links, body}')
      .then(data => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div id="projects__container">
      <h1 className="projects__title">Projects</h1>
      <div className="projects__list">
        {projects.map(project => (
          <div key={project._id} className="project__item">
            {project.mainImage && <img src={project.mainImage.asset.url} alt={project.title} className="project__image" />}
            <div className="project__header">
              <h2>{project.title}</h2>
              <span className="project__date">{new Date(project.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="project__content">
              {project.body && project.body.map((block, index) => (
                <p key={index}>{block.children[0].text}</p>
              ))}
            </div>
            <div className="project__links">
              {project.links && project.links.map(link => (
                <a key={link._key} href={link.url} target="_blank" rel="noopener noreferrer" className="project__link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
