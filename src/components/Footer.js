import React from 'react';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h5>Dustlikdon.uz</h5>
                            <p className="mb-0">Jizzax viloyati Do‘stlik tumani
                                Sanoatchilar MFY Sanoat ko‘chasi 49</p>
                        </div>
                        <div className="col-3">
                            <h5>Asosiy</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item"><a href="#" className="nav-link pl-0">Jamiyat haqida</a></li>
                                <li className="nav-item"><a href="#" className="nav-link pl-0">Struktura</a></li>
                                <li className="nav-item"><a href="#" className="nav-link pl-0">Yangiliklar</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Xizmatlar</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item"><a href="#" className="nav-link pl-0">Elektron murojaatlar</a></li>
                                <li className="nav-item"><a href="#" className="nav-link pl-0">Interaktiv xizmatlar</a></li>
                                <li className="nav-item"><a href="#" className="nav-link pl-0">Saytdan izlash</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Bog’lanish</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item"><a href="#" className="nav-link pl-0">998 71 335 41 16</a></li>
                                <li className="nav-item"><a href="#" className="nav-link pl-0">info@dustlikdon.uz</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;