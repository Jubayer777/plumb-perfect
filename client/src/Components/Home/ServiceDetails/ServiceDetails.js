

import React from 'react';
import { useHistory } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = (props) => {
    const {serviceName,description, price, imageURL } = props.service;

    const history=useHistory();
    const handleService=serviceName=>{
        history.push(`/booking/${serviceName}`)
    }

    return (
        <div className="d-flex justify-content-center col  pb-5 pt-5">
            <div  onClick={()=>handleService(serviceName)} id="card-style" className="card ">
                <div className="card-body p-4">
                    <div className="pt-3 d-flex justify-content-between align-items-center">
                        <div>
                            <img id="card-img" src={imageURL} alt="" />
                        </div>
                        <div>
                            <h5 className="text-info">${price}</h5>
                        </div>
                    </div>
                    <h4 className="pt-4 text-warning font-weight-bold">{serviceName}</h4>
                    <p className="pt-2 pb-2">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;