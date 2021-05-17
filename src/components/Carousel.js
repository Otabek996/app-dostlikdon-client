import React from 'react';

const Carousel = () => {
    return (
        <div className="Carousel">
            <div className="row">
                <div className="col-12">
                    <div className="carousel slide" id="kar">

                        <ul className="carousel-indicators">
                            <li className="active" data-target="#kar" data-slide-to="0"></li>
                            <li data-target="#kar" data-slide-to="1"></li>
                            <li data-target="#kar" data-slide-to="2"></li>
                        </ul>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./images/carusel-photo.jpg" alt="Error" className="w-100"/>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/carusel-photo.jpg" alt="Error" className="w-100"/>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/carusel-photo.jpg" alt="Error" className="w-100"/>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#kar" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#kar" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;