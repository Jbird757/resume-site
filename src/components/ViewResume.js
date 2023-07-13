import React from 'react';

function ViewPDFButton() {
    const handleViewPDF = (e) => {
      e.preventDefault();
      window.open('JLResume.pdf', '_blank');
    };
  
    return (
      <div to='ResumePDF' target="_blank" onClick={handleViewPDF} className="btn-2 btn-primary-2 px-4 py-3">
        <div className="d-inline-block bi bi-download me-2"></div>
        Download Resume
      </div>
    );
  }

export default ViewPDFButton;
