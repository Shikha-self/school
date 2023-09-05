import React from "react";
import './bookshelf.css';

const Bookshelf = () => {
   return(<>
   <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s"  style={{'max-width':'500px'}}>

            
                <p className="text-primary text-uppercase mb-2">Why Choose Us!</p>
                <h1 className="display-6 mb-5">The Leading Book Store In The Country</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="fact-item bg-light text-center h-100 p-5">
                        <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">35</h1>
                        <h4 className="mb-3">Award Winning</h4>
                        <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="fact-item bg-light text-center h-100 p-5">
                        <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">45</h1>
                        <h4 className="mb-3">Years Experience</h4>
                        <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="fact-item bg-light text-center h-100 p-5">
                        <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">12345</h1>
                        <h4 className="mb-3">Happy Clients</h4>
                        <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'max-width': '500px'}}>
                <p className="text-primary text-uppercase mb-2">Latest Bookshelf</p>
                <h1 className="display-6 mb-0">More Than 20000+ Customers Trusted Us</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item bg-white p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-1.jpg" alt="" />
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-2.jpg" alt=""/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-3.jpg" alt=""/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-4.jpg" alt="" />
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
            </div>
        </div>
    </div>
   </>);
}
 export default Bookshelf;