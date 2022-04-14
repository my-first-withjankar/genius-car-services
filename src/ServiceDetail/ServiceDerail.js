import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDerail = () => {
    const { serviceID } = useParams()
    return (
        <div>
            <h1>this is service detail {serviceID}</h1>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDerail;