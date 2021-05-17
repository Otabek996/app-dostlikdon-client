import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="navbar navbar-expand-sm">
                            <div className="col-2">
                                <div className="navbar-brand"><Link to="/" >Dustlikdom.uz</Link></div>
                            </div>
                            <div className="col-4">
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <button className="btn btn-light"><img src="./icons/search.svg" alt=""/></button>
                                    </div>
                                    <input type="text" placeholder="Saytdan izlash" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="input-group">
                                        <select>
                                            <option value="NaRusskom">На русском</option>
                                            <option value="Uzb">O'zbekchada</option>
                                        </select>
                                    </div>
                                    <button className="btn btn-success"><a href="tel: +998723354116">
                                        <img src="./icons/phone-green.svg" alt=""/>99872 335-41-16
                                    </a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;