import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDerail = () => {
    const { serviceID } = useParams()
    return (
        <div>
            <h1>this is service detail {serviceID}</h1>
        </div>
    );
};

export default ServiceDerail;