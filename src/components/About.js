import React from 'react';

const About = () => {
    return (
    <section className="bg-dark-2 py-5">
        <div className="container px-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                    <div className="text-center my-5">
                        <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                        <p className="lead fw-light text-white mb-4">I'm Jay Lowry, and I'm passionate about people-first technology to make a better world.</p>
                        <p className="text-light">
                            Growing up in a relatively small town in the Midwest, it was my understanding that if you wanted to do something in STEM, you would work as a mechanical engineer.
                            Fortunately for me, may journey has led me to have many experiences with many people, cultures, and professionals all around the world, and now I believe I've
                            finally found where I'm supposed to be - at the intersection between people and technology.
                            <br></br><br></br>
                            2nd Paragraph here
                            <br></br><br></br>
                            Technology has always been my hobby, but my real passion is knowing that I get to work with others who share my enthusiasm for educating, 
                            uplifting, and helping others engage with technology, and bring the world a little closer together.
                        </p>
                        <div className="d-flex justify-content-center fs-2 gap-4">
                            <a className="text-gradient" href="https://www.linkedin.com/in/jay-lowry/"><i className="bi bi-linkedin"></i></a>
                            <a className="text-gradient" href="https://github.com/Jbird757"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;