import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, description, price, img } = service;
    const navigate = useNavigate();

    const handleServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleServiceDetail(_id)} className='btn btn-primary'>BOOK NOW</button>
        </div>
    );
};

export default Service;