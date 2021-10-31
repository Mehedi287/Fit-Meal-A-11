import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./ManageOrders.css"
const ManageOrders = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    const handleDelete = id => {
        axios.delete(`http://localhost:5000/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    const remain = info.filter(f => f._id !== id);
                    setInfo(remain)
                    alert("delete successfully")
                }
            })
    }
    return (
        <div className="mt-5 manageOrder">

            {
                info.map(user =>
                    <div className="container" key={user._id}>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={user.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"> Item Name :   {user.name}</h5>
                                        <h5 className="card-title">  {user.uerName}</h5>
                                        <h5 className="card-title"> Email :  {user.email}</h5>

                                        <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }

        </div>
    );
};

export default ManageOrders;
