import React, { Component } from 'react';
import teamwork from '../icons/teamwork.png';
import business from '../icons/hand-shake.png';
import gallery from '../icons/gallery.png';
import news from '../icons/radio.png';
import imgdata from '../localdata/localimage.json';



class Gallery extends Component {
    render() {
        // var im = [];
        // fetch("../localdata/localimage.json").then(
        //     res => {
        //         res.json(function (data) {
        //             data.data.forEach(function (obj) {
        //                 im = data;
        //                 console.log(im);
        //             });
        //         })
        //     }
        // )
        var dt = imgdata.images;
        return (


            <div className="container-fluid home-bg">
                
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-3 mb-4">
                            <div className="card">
                                <h5 className="card-title text-center mt-3">"Who we are"</h5>
                                <div className="text-center">
                                    <img src={teamwork} width="45px" height="45px" alt="" />
                                </div>
                                <div className="card-body">
                                    <p>
                                        lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                                        lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                            </p>
                                </div>
                                <div className="btn-bg text-center pb-3">
                                    <button className="btn ">Know More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4">
                            <div className="card">
                                <h5 className="card-title text-center mt-3">"Our Business"</h5>
                                <div className="text-center">
                                    <img src={business} width="45px" height="45px" alt="" />
                                </div>
                                <div className="card-body">
                                    <p>
                                        lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                                        lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                            </p>
                                </div>
                                <div className="btn-bg text-center pb-3">
                                    <button className="btn ">Know More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4">
                            <div className="card">
                                <h5 className="card-title text-center mt-3">"Gallery"</h5>
                                <div className="text-center">
                                    <img src={gallery} width="45px" height="45px" alt="" />
                                </div>
                                <div className="card-body">
                                    <p>
                                        lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                                        lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                            </p>
                                </div>
                                <div className="btn-bg text-center pb-3">
                                    <button className="btn ">Know More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4">
                            <div className="card">
                                <h5 className="card-title text-center mt-3">"Recent News"</h5>
                                <div className="text-center">
                                    <img src={news} width="45px" height="45px" alt="" />
                                </div>
                                <div className="card-body">
                                    <p>
                                        lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                                        lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                            </p>
                                </div>
                                <div className="btn-bg text-center pb-3">
                                    <button className="btn ">Know More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row txt-bg mt-4">
                    <div className="container">
                        <div className="row mt-4 mb-2">
                            <div className="col-lg-8">
                                <p>
                                    lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                                    lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                                    lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                                    lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet.
                                    </p>
                            </div>
                            <div className="col-lg-4">
                                {dt.map(im=>(<img src={"im"} alt="123"/>))}
                                <img src="images/bg-1.JPEG" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery