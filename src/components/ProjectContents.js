import React from 'react';
import GPTLogo from '../assets/ChatGPT_logo.svg'
import { Link } from 'react-router-dom';

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
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder" href="https://github.com/Jbird757/resume-site">This Website   <a className="text-gradient" href="https://github.com/Jbird757/resume-site"><i className="bi bi-github"></i></a></h2>
                                            <p>
                                                I made this website both to be a companion to my resume and to prove to myself that web development was something that I can do outside of 
                                                class. In making this website, I taught myself React, a popular framework though new to me. To further enhance my learning, I did not take 
                                                any shortcuts when making this website, and manually configured everything from the machine it's running on to the CI/CD pipeline with Github Actions. 
                                                The most challenging parts of making this website were configuring Github Actions, another technology I taught myself, and importing Google Fonts, which 
                                                required the use of CORS.
                                            </p>
                                        </div>
                                        <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">ChatGPT How-To   <a className="text-gradient" href="https://github.com/Jbird757/resume-site"><i className="bi bi-github"></i></a></h2>
                                            <div className="fs-5 fw-light text-muted mb-2">(Under Construction)</div>
                                            <p>
                                                My next project is a website that teaches how to effectively interact with and use Large Language Models such as ChatGPT 3.5. This 
                                                idea came to me as I sat through a long company meeting that was hosted by supposed experts on the subject, and watched them get nearly 
                                                everything wrong. I realized that my experience and (relatively) long history of using ChatGPT successfully in many aspects of my life 
                                                may actually be less common and mundane than I thought. This website isn't intended to be technically impressive; this is a passion 
                                                project, and my passion is getting people informed and excited about new technology.
                                            </p>
                                        </div>
                                        <img className="img-fluid project-picture" src={ GPTLogo } alt="ChatGPT Logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">School Projects   <a className="text-gradient" href="https://github.com/Jbird757"><i className="bi bi-github"></i></a></h2>
                                            <p>
                                                During my time as a college student I have had the opportunity to take a variety of classes, including 3 web development classes where I 
                                                learned Python/Django, C#/ASP.net, and Vue. I have had experience with database design and technology, and extensive experience with 
                                                lower-level language coding in C and C++ to create services like parsers and data structures.
                                            </p>
                                        </div>
                                        <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="card overflow-hidden shadow rounded-4 border-0">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">HomeLab</h2>
                                            <p>
                                                In addition to the above projects, I have a project that is ongoing and will forever be ongoing. I manage my home network, and run several 
                                                machines that I built myself for different purposes. Currently I have set up a file server running TrueNAS core, and a "compute" or systems 
                                                server running several VMs and Docker Containers for services like PiHole, and monitoring and updating services like WatchTower and Portainer. 
                                                I plan to expand this in the future to include many more useful services and eventually take most of my data out of the cloud.
                                            </p>
                                        </div>
                                        <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Have questions or want to chat?</h2>
                        <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/Contact">Contact me</Link>
                    </div>
                </div>
            </section>
        </div>
      );
  };
  
  export default Contents;