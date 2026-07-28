import React from 'react';
import tflogo from '../assets/terraform.png';
import Homelab from '../assets/homelab.jpg';
import Website from '../assets/This website2.png';
import SchoolProject from '../assets/School Project.png';
import projectsData from '../data/projects.json';

const imageMap = {
    Website,
    tflogo,
    SchoolProject,
    Homelab
};

const Contents = () => {
    return (
        <div>
            <section className="py-3">
                <div className="container px-3 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-11">
                            {projectsData.map((project, index) => (
                                <div key={project.id} className={`card overflow-hidden shadow rounded-4 border-0 ${index !== projectsData.length - 1 ? 'mb-5' : ''}`}>
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="p-5">
                                                <h2 className="fw-bolder">
                                                    {project.title}{' '}
                                                    {project.githubUrl && (
                                                        <a className="text-gradient" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                            <i className="bi bi-github"></i>
                                                        </a>
                                                    )}
                                                </h2>
                                                <p>{project.description}</p>
                                            </div>
                                            <img className="img-fluid project-picture" src={imageMap[project.imageKey]} alt={project.imageAlt} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Have questions or want to chat?</h2>
                        <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="https://www.linkedin.com/in/jay-lowry/" target="_blank" rel="noopener noreferrer">
                            Contact me on LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contents;