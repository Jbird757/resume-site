import React, { useEffect } from 'react';
//Components
import Contents from '../components/ContactContent';
import Footer from '../components/Footer';

const Contact = () => {
    useEffect(() => {
        document.title = 'Jay Lowry - Contact';
    }, []);

    return (
        <div className="d-flex flex-column h-100">
            <div className="flex-shrink-0">
            <Contents />
            </div>
            <Footer />
        </div>
    )
};

export default Contact;