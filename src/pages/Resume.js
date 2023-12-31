import React, { useEffect } from 'react';
//Components
import Contents from '../components/ResumeContents';
import Footer from '../components/Footer';

const Resume = () => {
    useEffect(() => {
        document.title = 'Jay Lowry - Experience';
    }, []);
    
    return (
        <div className="d-flex flex-column h-100 bg-dark">
            <div className="flex-shrink-0">
            <Contents />
            </div>
            <Footer />
        </div>
    )
};

export default Resume;