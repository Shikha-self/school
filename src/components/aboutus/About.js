import React from "react";
import './about.css';

import image from '../header/images/istockphoto.jpg';
import image1 from '../header/images/books-shop-facade.jpg';

const Aboutus = () =>{
    return(<>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-3 img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid bg-light p-3" src={image1} alt="" />
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid bg-light p-3" src={image}  alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <p className="text-primary text-uppercase mb-2">About Us</p>
                        <h1 className="display-6 mb-4">Unlocking Worlds of Imagination: Your Online Haven for Books and Stories</h1>
                        <p>Welcome to our virtual haven—a treasure trove of literary wonders. We're your online destination for a diverse range of books and stories that transport you to new worlds, challenge your perspectives, and ignite your imagination. Our passion for curating captivating reads ensures that whether you're a seasoned reader or a curious explorer, you'll find something that resonates. Join us in celebrating the magic of literature, where every page holds a new adventure, and every story has the power to inspire. Discover the joy of reading with us—your ultimate online haven for books and stories.</p>
                        <div className="row g-2 mb-4">
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-3"></i>Quality Products
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-3"></i>Custom Products
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-3"></i>Online Order
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-3"></i>Home Delivery
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5" href="/">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>);
}
export default Aboutus;
