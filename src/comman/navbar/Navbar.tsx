import { Link, Outlet } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <div style={{ width: "50px" }}>
                        <img src="brand-logo.jpeg" className="img img-fluid" alt="Logo" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/course">Course</Link>
                            </li>
                        </ul>
                    </div> */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/#home">Home</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/#about">About Us</HashLink>
                            </li>
                            {/* <li className="nav-item">
                                <HashLink className="nav-link" to="/service">Service</HashLink>
                            </li> */}
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/#course">Course</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/#contactUs">Contact Us</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

