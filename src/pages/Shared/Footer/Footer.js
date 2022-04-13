import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='mt-3 text-center'>
            <p><small>copyright @ {year} </small></p>
        </div>
    );
};

export default Footer;