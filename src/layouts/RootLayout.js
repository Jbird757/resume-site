import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                    <div className="container px-5">
                        <a className="navbar-brand" href="index.html">
                            <span className="fw-bolder text-primary">Meet Me</span>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='/'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='/Resume'>Resume</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="projects.html">
                                        Projects
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}