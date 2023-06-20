import React, { useEffect } from 'react';
//Components
import Contents from '../components/ProjectContents';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        document.title = 'Jay Lowry - Projects';
    }, []);

    return (
        <div className="d-flex flex-column h-100 bg-light">
            <div className="flex-shrink-0">
            <Contents />
            </div>
            <Footer />
        </div>
    )
};

export default Home;