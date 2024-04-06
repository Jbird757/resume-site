import React from 'react'
import GPTLogo from '../assets/ChatGPT_logo.svg'
import tflogo from '../assets/terraform.png'
import Homelab from '../assets/homelab.jpg'
import Website from '../assets/This website2.png'
import SchoolProject from '../assets/School Project.png'
//import { Link } from 'react-router-dom'

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
                                                I made this website both to be a companion to my resume and to showcase much of what I have learned during my years in school and in the workforce. The goal for this website was not only to create 
                                                a website, but to do it in a way that used professional-grade best practices in hosting, security, and redundancy. This site is hosted serverlessly on AWS, and previous versions of the site were hosted on a 
                                                configured virtual machine. This website is completely automated using Terraform and GitHub Actions. Technologies that I learned or expanded my knowledge of as part of this project: React, GitHub Actions, 
                                                Terraform, serverless web services, AWS and AWS CLI, security through OIDC, firewall and web server management, and more. Click on the GitHub logo to view the repository.
                                            </p>
                                        </div>
                                        <img className="img-fluid project-picture" src={ Website } alt="This website" />
                                    </div>
                                </div>
                            </div>
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">Terraform Serverless Website Module   <a className="text-gradient" href="https://github.com/Jbird757/AWS-Serverless-Static-Website-TF-Module.git"><i className="bi bi-github"></i></a></h2>
                                            <div className="fs-5 fw-light text-muted mb-2">(Under Construction)</div>
                                            <p>
                                                My next project is a Terraform Module that sets up an entire serverless website on AWS complete with encryption and security best practices. I noticed when I was building my personal site that I couldn't find a 
                                                module that fit what I needed to do, especially since S3 Bucket ACLs are deprecated and CloudFront OAC is the new standard, so I decided to make my own. I hope that others besides me can benefit from this module, 
                                                and I would love it if you checked it out at the GitHub link above.
                                            </p>
                                        </div>
                                        <img className="img-fluid project-picture" src={ tflogo } alt="Terraform Logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">School Projects   <a className="text-gradient" href="https://github.com/Jbird757"><i className="bi bi-github"></i></a></h2>
                                            <p>
                                                During my time as a college student, I have had the opportunity to take a variety of classes, including classes in web development, cybersecurity, AWS and 
                                                cloud management, and much more. While not all of these classes included projectson GitHub, many did, so feel free to look around and explore the things that I've done 
                                                all the way to my graduate studies (more impressive) from freshman year (much less impressive).
                                            </p>
                                        </div>
                                        <img className="img-fluid project-picture" src={ SchoolProject } alt="Colab Notebook" />
                                    </div>
                                </div>
                            </div>
                            <div className="card overflow-hidden shadow rounded-4 border-0">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">HomeLab</h2>
                                            <p>
                                                In addition to the above projects, I have a project that is ongoing and will forever be ongoing. I manage my home network and run several 
                                                machines that I built myself for different purposes. Currently I have set up a file server running TrueNAS Scale, and a "compute" or systems 
                                                server running several VMs and Docker containers for services like PiHole and monitoring and updating services like WatchTower and Portainer. 
                                                I plan to expand this in the future to include many more useful services and eventually take most of my personal data out of the cloud.
                                            </p>
                                        </div>
                                        <img className="img-fluid project-picture" src={ Homelab } alt="My File Server" />
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
                        <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="https://www.linkedin.com/in/jay-lowry/">Contact me on LinkedIn</a>
                        {/* <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/Contact">Contact me</Link> */}
                    </div>
                </div>
            </section>
        </div>
      );
  };
  
  export default Contents;