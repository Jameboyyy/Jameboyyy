import React, {useEffect, useState} from 'react';
import './projects.css';

const Projects = () => {

    const [projects, setProjects] =useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/projects')
        .then(response => response.json())
        .then(data => setProjects(data.docs)) 
        .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="projects__container">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__list">
                {projects.map(project => (
                <div key={project.id} className="project__item">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
