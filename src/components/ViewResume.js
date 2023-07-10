import React from 'react';

function ViewPDFButton() {
    const handleViewPDF = (e) => {
      e.preventDefault();
      window.open('./assets/JLResume.pdf', '_blank');
    };
  
    return (
      <a to='ResumePDF' target="_blank" onClick={handleViewPDF} className="btn btn-primary px-4 py-3">
        <div className="d-inline-block bi bi-download me-2"></div>
        Download Resume
      </a>
    );
  }

export default ViewPDFButton;
