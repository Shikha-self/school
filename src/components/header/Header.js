import React, { useState, useEffect } from "react";
import './header.css';
import images from './images/when-scars-are-scattered.jpg';
import image2 from './images/images.jpeg';
import image3 from './images/The-Magical-Imperfect.webp';
import image4 from './images/Hope-Springs.webp';

console.log(images);
function Top() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsNavbarVisible(true);
            } else {
                setIsNavbarVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
         <nav
          className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
          data-wow-delay="0.1s" style={{ display: isNavbarVisible ? 'flex' : 'none',
          'visibility': 'visible', 'animation-delay': '0.1s', 'animation-name': 'fadeIn'
          }} >
         
        
            <a href="/" className="navbar-brand d-block d-lg-none">
                <h1 className="text-primary">Bookzone</h1>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="/" className="nav-item nav-link active">Home</a>
                    <a href="/" className="nav-item nav-link">About</a>
                    <a href="/" className="nav-item nav-link">Services</a>
                </div>
                <a href="/" className="navbar-brand bg-primary py-2 px-4 mx-3 d-none d-lg-block">
                    <h1 className="text-white">Bookzone</h1>
                </a>
                <div className="navbar-nav me-auto py-0">
                    <a href="/" className="nav-item nav-link">Books</a>
                    <div className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Magazines</a>
                        <div className="dropdown-menu rounded-0 shadow-sm border-0 m-0">
                            <a href="/" className="dropdown-item">Features</a>
                            <a href="/" className="dropdown-item">Our Team</a>
                            <a href="/" className="dropdown-item">Testimonial</a>
                            <a href="/" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="/" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
        <div className="container-fluid hero-header bg-light py-5 mb-5">
            <div className="container py-5">
              <div className="row g-5 align-items-center">
                   <div className="col-lg-6">
                       <p className="text-primary text-uppercase mb-2 animated slideInDown">Welcome To Bookstore</p>
                       <h1 className="display-4 mb-3 animated slideInDown">Book And Magazines  Based in New York</h1>
                       <p className="animated slideInDown">Step into our bookstore in New York and indulge in the world of books and magazines. Let your curiosity wander as you explore an array of captivating narratives and thought-provoking reads.</p>
                        <div className="d-flex align-items-center pt-4 animated slideInDown">
                           <a href="/" className="btn btn-primary py-3 px-4 me-5">Explore More</a>
                            <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                              <span></span>
                            </button>
                          <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                       </div>
                    </div>
                    <div className="col-lg-6 animated fadeIn">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                               <img className="img-fluid bg-white p-3 w-100 mb-3" src={images} alt="" />
                               <img className="img-fluid bg-white p-3 w-50" src={image2} alt=""/>
                            </div>
                            <div className="col-6">
                               <img className="img-fluid bg-white p-3 w-50 mb-3" src={image3} alt=""/>
                               <img className="img-fluid bg-white p-3 w-100" src={image4} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Top;