import React from 'react';
import { ReactComponent as Dots } from '../assets/dots.svg';
import ProfilePic from '../assets/Lowry_Jay_Background_Removed.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-5 bg-dark">
        <div className="container px-5 pb-5">
            <div className="row gx-5 align-items-center">
                <div className="col-xxl-5">
                    <div className="text-center text-xxl-start">
                        <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Development &middot; Deployment &middot; Implement</div></div>
                        
                        <h1 className=" fw-bolder"><span className="text-gradient d-inline">At the midpoint between man and mainframe</span></h1>
                        <div className="fs-3 fw-light text-light mb-5">I work with people to create inspired software solutions</div>
                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                            <Link className="btn-2 btn-primary-2 btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to='/Resume'>Resume</Link>
                            <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/Projects">Projects</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-7">
                    <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                        <div className="profile bg-gradient-primary-to-secondary">
                            <img className="profile-img" src={ProfilePic} alt="..." />
                            <div className="dots-1">
                                <Dots />
                            </div>
                            <div className="dots-2">
                                <Dots />
                            </div>
                            <div className="dots-3">
                                <Dots />
                            </div>
                            <div className="dots-4">
                                <Dots />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;