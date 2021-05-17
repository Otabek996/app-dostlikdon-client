import React from 'react';

const Info = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex align-items-center justify-content-between">
                    <img src="./images/man.jpg" alt=""/>
                    <h4>Shikoyatlar mavjudmi?
                        onlayn tarzda yuboring</h4>
                    <button type="button" className="btn btn-success">Murojaat yuborish</button>
                    <img src="./images/table.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Info;