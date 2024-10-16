import React from "react";
import ViewPDFButton from './ViewResume';

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
                            <ViewPDFButton></ViewPDFButton>
                        </div>
                        <div className="bg-dark-2 card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="row align-items-center gx-5">
                                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div className="bg-dark p-4 rounded-4">
                                            <div className="text-primary-2 fw-bolder mb-2">2023-Present</div>
                                            <div className="text-light small fw-bolder">Cloud Infrasstructure Engineer</div>
                                            <div className="small text-light fw-light">Brigham Young University</div>
                                            <div className="small text-light fw-light">Provo, UT</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="text-light">
                                            As a cloud infrastructure engineer, I helped manage the networks and resources in AWS and Azure. I mostly worked on cloud account and user management, and in my down time 
                                            when not fulfilling customer orders I worked on automating our internal processes using Python and the AWS CLI to increase speed of tasks and decrease the time of tedious processes. 
                                            My most used tools in this position were Python, Terraform, IAM, and Microsoft Entra. I also had to be framiliar with a wide variety of AWS and Azure services, as I regularly 
                                            helped our customers (who were mostly developers) troubleshoot problems.
                                            <br></br><br></br>
                                            <strong>Notable Events:</strong> I earned my AWS Solutions Architect certification while working here. I also had the opportunity to lead a team to research 
                                                AWS Control Tower for use in our organization. I not only gained knowledge and skills related to cloud engineering, but also gained valueable experience 
                                                working with a team in industry. 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark-2 card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="row align-items-center gx-5">
                                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div className="bg-dark p-4 rounded-4">
                                            <div className="text-primary-2 fw-bolder mb-2">2023</div>
                                            <div className="text-light small fw-bolder">Quality Assurance Engineer (Intern)</div>
                                            <div className="small text-light fw-light">Church of Jesus Christ of Latter-day Saints</div>
                                            <div className="small text-light fw-light">Riverton, UT</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="text-light">
                                            I worked as a front-end quality assurance engineer, which meant that my work was primarily in the UI of the sites I tested,
                                            although I also made extensive use of AWS features such as Lambda, DynamoDB, and CloudWatch. I was also responsible for bundling code and deploying
                                            to our test environments in Microsoft Azure. Outside of my main assignment, I often needed to work with the business analysts 
                                            and developers together to help resolve misunderstandings and improve communication, which improved efficiency greatly within my team.
                                            <br></br><br></br>
                                            <strong>Notable Events:</strong> I took this internship opportunity to proactively explore career paths. I talked to many people in different 
                                            roles about their careers, and it was here that I decided that going into management would be a rewarding career path.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark-2 card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="row align-items-center gx-5">
                                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div className="bg-dark p-4 rounded-4">
                                            <div className="text-primary-2 fw-bolder mb-2">2021-2023</div>
                                            <div className="text-light small fw-bolder">Help Desk Technician</div>
                                            <div className="small text-light fw-light">BYU Department of Physics and Astronomy</div>
                                            <div className="small text-light fw-light">Provo, UT</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="text-light">
                                            I worked as a Level 2 Help Desk Technician for over two years. During this time, my responsibilities covered many areas, 
                                            including software troubleshooting and licensing, networking, hardware troubleshooting, and inventory and data management. 
                                            Most importantly, I gained valuable communication and negotiation skills in this client-facing position. <br></br><br></br>
                                            <strong>Notable Events:</strong> I completely redesigned the inventory management system twice, each time increasing accuracy 
                                            and productivity appreciably.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark-2 card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="row align-items-center gx-5">
                                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div className="bg-dark p-4 rounded-4">
                                            <div className="text-primary-2 fw-bolder mb-2">2018-2020</div>
                                            <div className="text-light small fw-bolder">Volunteer Representative</div>
                                            <div className="small text-light fw-light">Church of Jesus Christ of Latter-day Saints</div>
                                            <div className="small text-light fw-light">Vietnam and Cambodia</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="text-light">
                                            I devoted nearly two years of my life to volunteering in Vietnam, Cambodia, and later Houston, TX. I primarily helped individuals overcome 
                                            the challenges in their lives and live more meaningfully though the principles taught by Jesus Christ. I studied Vietnamese religiously 
                                            and became fluent, and I also learned a bit of Khmer and Spanish. Other responsibilities during this time included leading free English
                                            and music classes and acting in what would be considered in a company to be a project manager role with other volunteers. I was also in charge 
                                            of managing the finances of the entire Vietnam Volunteer Chapter for a few months.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                    <h2 className="text-secondary-2 fw-bolder mb-4">Education</h2>
                    <div className="bg-dark-2 card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="row align-items-center gx-5">
                                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div className="bg-dark p-4 rounded-4">
                                            <div className="text-secondary-2 fw-bolder mb-2">2023 - 2025</div>
                                            <div className="mb-2">
                                                <div className="small text-light fw-bolder">Brigham Young University</div>
                                                <div className="small text-light fw-light">Provo, UT</div>
                                            </div>
                                            <div className="fst-italic">
                                                <div className="small text-light fw-light">Masters</div>
                                                <div className="small text-light fw-light">Information Systems Management</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="text-light">
                                            After being in the Information Systems undergraduate major for a year, I applied to the Information Systems Management integrated master's program, to which I was also accepted. 
                                            In this program I am focusing on the management track, taking classes such as strategic management, communication for leaders, and tech management, while continuing to develop my technical 
                                            skills in classes such as data structures, web development, and business technology infrastructure.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark-2 card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="row align-items-center gx-5">
                                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div className="bg-dark p-4 rounded-4">
                                            <div className="text-secondary-2 fw-bolder mb-2">2017 - 2025</div>
                                            <div className="mb-2">
                                                <div className="small text-light fw-bolder">Brigham Young University</div>
                                                <div className="small text-light fw-light">Provo, UT</div>
                                            </div>
                                            <div className="fst-italic">
                                                <div className="small text-light fw-light">Bachelors</div>
                                                <div className="small text-light fw-light">Information Systems</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="text-light">
                                            I started at BYU as a freshman in 2017 but took a break to volunteer in Southeast Asia (See above). I returned to school in 2021, and soon 
                                            after was accepted into the Information Systems undergraduate program. I will graduate in 2025 and simultaneously earn a bachelor's and master's degree in IS. While at 
                                            BYU, I participated in several clubs, including the Association for Information Systems (AIS), Association for Computational Mathematics (ACM) and 
                                            the Aviation club.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="pb-5"></div>
                    <section>
                        <div className="bg-dark-2 card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                        <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">Project Management</div></div>
                                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">Data Analytics</div></div>
                                        <div className="col"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">Software Development</div></div>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3">
                                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">Network Security</div></div>
                                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">Communication and Negotiation</div></div>
                                        <div className="col"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">Creative Problem Solving</div></div>
                                    </div>
                                </div>
                                <div className="mb-0">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                        <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages & Technologies</span></h3>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">HTML/CSS</div></div>
                                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">Python</div></div>
                                        <div className="col"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">React</div></div>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3">
                                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">C++</div></div>
                                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">SQL</div></div>
                                        <div className="col"><div className="d-flex align-items-center bg-light fw-bolder rounded-4 p-3 h-100">And more...</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
};

export default Contents;