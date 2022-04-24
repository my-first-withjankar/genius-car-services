import React from 'react';
import useService from '../Hooks/useService';

const ManageService = () => {
    const [services, setServices] = useService();

    const removeItem = id => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })
        }
    }
    return (
        <div className='text-center'>
            <h1>manage service</h1>
            {
                services.map(service => <h5 key={service._id}> {service.name} <button onClick={() => removeItem(service._id)}>x</button></h5>)
            }
        </div>
    );
};

export default ManageService;