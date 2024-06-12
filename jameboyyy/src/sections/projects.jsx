import React, { useEffect, useState } from 'react';
import './projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const apiUrl = process.env.REACT_APP_PAYLOAD_API_URL;

    useEffect(() => {
        console.log('REACT_APP_PAYLOAD_API_URL:', apiUrl);
        if (apiUrl) {
            fetch(`${apiUrl}/projects`)
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched Projects:', data.docs);
                    setProjects(data.docs);
                })
                .catch(error => console.error('Error fetching projects:', error));
        } else {
            console.error('API URL is not defined');
        }
    }, [apiUrl]);

    return (
        <div className="projects__container">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__list">
                {projects.map(project => (
                    <div key={project.id} className="project__item">
                        {project.layout && project.layout.map(block => (
                            block.blockType === 'mediaBlock' && block.media && (
                                <img 
                                    key={block.id}
                                    src={block.media.url} 
                                    alt={block.media.alt} 
                                    className="project__image"
                                />
                            )
                        ))}
                        <div className="project__header">
                            <h2>{project.title}</h2>
                            <span className="project__date">{new Date(project.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="project__content">
                            {project.hero && project.hero.richText && project.hero.richText.map((block, index) => (
                                <p key={index}>{block.children[0].text}</p>
                            ))}
                        </div>
                        <div className="project__links">
                            {project.hero && project.hero.links && project.hero.links.map(link => (
                                <a 
                                    key={link.id}
                                    href={link.link.url} 
                                    target={link.link.newTab ? '_blank' : '_self'} 
                                    className="project__link"
                                    rel="noopener noreferrer"
                                >
                                    {link.link.label}
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
