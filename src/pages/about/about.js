import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './about.css';
// import Foooter from '../Footer/Footer'

export default function NavBar() {
    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <br /> <br />                            
                            <br /> <br />
                            </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="./product1.jpeg" alt="product" className="w-100" />
                                <br /><br />    <br /><br />


                            </div>
                            <div className="col-lg-6">
                                <div className="about-item">
                                    <div className="title ">
                                        <span>Who is ArtDeco ?</span> 
                                    </div>
                                    <div className="about-text">
                                        ArtDeco is a promising startup that aims to solve one of the main problems we face when we try to decorate our home, apartment, or even our company. We get frustrated and overwhelmed by the offers, the marketplace, the quality of material, etc.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="./product2.jfif" alt="product" className="w-100" />
                                <br /><br />  <br /><br />


                            </div>
                            <div className="col-lg-6">
                                <div className="about-item">
                                    <div className="title">
                                        Why ArtDeco ?
                                    </div>
                                    <div className="about-text">
                                        Here comes our part, which is to create a place where the customer can finally fulfill his/her dreams by just picking the best offers made to him/her by the available companies. So, we help the customer to have the luxury and the variety of options to choose from and have a satisfying experience.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="./how.jpg" alt="product" className="w-100" />
                            </div>
                            <div className="col-lg-6">
                                <div className="about-item">
                                    <div className="title">
                                        How ArtDeco works?
                                    </div>
                                    <div className="about-text">
                                        We play as the middleman between the user and the contractor, we offer a marketplace where the user can upload his or her property add and we post it on our marketplace, then the contractor offers his or her, if the user accepts the offer, we take the agreed fees between both parties until the job is done and then we deliver the fees to the contractor when the user accepts the finished product.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <Foooter /> */}
        </section>
    )
}
