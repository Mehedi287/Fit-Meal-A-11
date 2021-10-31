import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/UseAuth';

import "./MyOrder.css"
import Order from './Order/Order';
const MyOrder = () => {
    const { user } = useAuth()
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    console.log(food);
    const handleDelete = id => {
        axios.delete(`http://localhost:5000/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    const remain = food.filter(f => f._id !== id);
                    setFood(remain)
                    alert("delete successfully")
                }
            })
    }
    console.log(food);
    return (
        <div className="row container myOrder">
            {
                food.map(f => <Order key={f.id} handleDelete={handleDelete} food={f}></Order>)
            }

        </div>
    );
};

export default MyOrder;