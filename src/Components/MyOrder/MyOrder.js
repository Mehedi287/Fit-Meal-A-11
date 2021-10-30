import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "./MyOrder.css"
import Order from './Order/Order';
const MyOrder = () => {

    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    // const handleDelete = id => {
    //     axios.delete(`http://localhost:5000/orders/${id}`)
    //         .then(res => {
    //             if (res.data.deletedCount) {
    //                 alert("delete successfully")
    //             }
    //         })

    // }
    console.log(food);
    return (
        <div className="row container myOrder">
            {
                food.map(f => <Order key={f.id} food={f}></Order>)
            }

        </div>
    );
};

export default MyOrder;