import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import "./Services.css";


const Services = () => {
    // load all services
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://ancient-ocean-04359.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])
    return (
        <div id="services-bg">
            <h2 className="text-center pb-2 text-white font-weight-bold pt-5">Services We Provide</h2>
            <h5 className="text-center text-success">We Are Providing Below Services</h5>
            <p className="text-center pb-2 text-white">___________</p>
            <div className="container pb-3">
                <div className="row justify-content-center">
                    {
                        services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;