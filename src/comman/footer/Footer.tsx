import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'; // Custom CSS for any additional styling

function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <div className='p-3 py-5'>
                <div className="row">
                    <div className="col-md-4 ps-3">
                        <h5>About Us</h5>
                        <div className='py-3'>
                            <img className='img-img-fluid rounded' src="./brand-logo.jpeg" alt="Brand Logo" height={"100px"} />
                        </div>
                        <p className='w-75'>
                            We provide the best services for our customers. Our commitment is to deliver high-quality solutions tailored to your needs.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-envelope text-warning me-2"></i>tpfxbesttrading@gmail.com</li>
                            <li><i className="bi bi-telephone-fill text-warning me-2"></i>+91 7441157211</li>
                            {/* <li>Address: 123 Street Name, City, Country</li> */}
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <Link className='mx-1' to={"https://www.facebook.com/profile.php?id=61559945262476&mibextid=ZbWKwL"} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                            </svg>
                        </Link>
                        <Link className='mx-1' to={"https://t.me/TP_TRADING_94"} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"></path><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"></path>
                            </svg>
                        </Link>
                        <Link className='mx-1' to={"https://www.instagram.com/tanu_trader__/"} target="_blank">
                            <img src="insta.png" alt="instagram logo" width={40} />

                        </Link>
                        <Link className='mx-1' to={"https://www.youtube.com/@TANU_TRADER_"} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p className="mb-0">&copy; 2024 TANU TRADER. All rights reserved.</p>
                </div>
            </div >
        </footer >
    );
}

export default Footer;
