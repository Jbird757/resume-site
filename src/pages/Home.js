import React, { useEffect } from 'react';
//Components
import Header from '../components/HomeHeader';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        document.title = 'Jay Lowry - Developer and Tech Enthusiast';
    }, []);

    return (
        <div className="d-flex flex-column h-100">
            <div className="flex-shrink-0">
            <Header />
            <About />
            </div>
            <Footer />
        </div>
    )
};

export default Home;