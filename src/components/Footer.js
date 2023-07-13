import React from 'react';

const Footer = () => {
    return (
<footer className="bg-dark py-4 mt-auto">
  <div className="container px-5">
    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
      <div className="col-auto">
        <div className="small m-0 text-light">Copyright &copy; Jay Lowry 2023</div>
      </div>
      <div className="col-auto">
        <div className="d-flex justify-content-center fs-2 gap-4">
            <a className="text-gradient" href="https://www.linkedin.com/in/jay-lowry/"><i className="bi bi-linkedin"></i></a>
            <a className="text-gradient" href="https://github.com/Jbird757"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;