import axios from 'axios';
import React from 'react';

const Order = (props) => {
    const { img, name, _id } = props.food;
    // const { handleDelete } = props.handleDelete;
    const handleDelete = id => {
        axios.delete(`http://localhost:5000/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    alert("delete successfully")
                }
            })

    }
    return (
        <div className="col-md-3">
            <img className="img-fluid" src={img} alt="" />
            <h3>{name}</h3>
            <button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button>
        </div>
    );
};

export default Order;