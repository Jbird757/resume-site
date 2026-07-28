import React from "react";
import ViewPDFButton from './ViewResume';
import resumeData from '../data/resume.json';

const Contents = () => {  
    return (
        <div className="container bg-dark px-4 my-3">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
            </div>
            <div className="row gx-0 justify-content-center">
                <div className="col-lg-12 col-xl-10 col-xxl-10">
                    <section>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h2 className="text-primary-2 fw-bolder mb-0">Experience</h2>
                            <ViewPDFButton />
                        </div>
                        {resumeData.experience.map((exp) => (
                            <div key={exp.id} className="bg-dark-2 card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-dark p-4 rounded-4">
                                                <div className="text-primary-2 fw-bolder mb-2">{exp.period}</div>
                                                <div className="text-light small fw-bolder">{exp.role}</div>
                                                <div className="small text-light fw-light">{exp.company}</div>
                                                <div className="small text-light fw-light">{exp.location}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="text-light" style={{ whiteSpace: 'pre-line' }}>
                                                {exp.description}
                                                {exp.notableEvents && (
                                                    <>
                                                        <br /><br />
                                                        <strong>Notable Events:</strong> {exp.notableEvents}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    <section>
                        <h2 className="text-secondary-2 fw-bolder mb-4">Education</h2>
                        {resumeData.education.map((edu) => (
                            <div key={edu.id} className="bg-dark-2 card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-dark p-4 rounded-4">
                                                <div className="text-secondary-2 fw-bolder mb-2">{edu.period}</div>
                                                <div className="mb-2">
                                                    <div className="small text-light fw-bolder">{edu.institution}</div>
                                                    <div className="small text-light fw-light">{edu.location}</div>
                                                </div>
                                                <div className="fst-italic">
                                                    <div className="small text-light fw-light">{edu.degree}</div>
                                                    <div className="small text-light fw-light">{edu.field}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="text-light">
                                                {edu.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    <div className="pb-5"></div>

                    <section>
                        <div className="bg-dark-2 card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                            <i className="bi bi-tools"></i>
                                        </div>
                                        <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                                        {resumeData.skills.map((skill, index) => (
                                            <div key={index} className="col">
                                                <div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">{skill}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-0">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                            <i className="bi bi-code-slash"></i>
                                        </div>
                                        <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages & Technologies</span></h3>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {resumeData.languagesAndTech.map((tech, index) => (
                                            <div key={index} className="col">
                                                <div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">{tech}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contents;