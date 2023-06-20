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
        <div class="d-flex flex-column h-100">
            <div class="flex-shrink-0">
            <Header />
            <About />
            </div>
            <Footer />
        </div>
    )
};

export default Home;

/*
Questions:
To-do:
Finish Resume.js
Make Routes and pages for other pages
*/