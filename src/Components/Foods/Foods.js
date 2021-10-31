import React from 'react';
import { Link } from 'react-router-dom';
import "./Foods.css"
const Foods = (props) => {
    const { _id, name, img, decription } = props.food
    return (

        <div className="col-md-4" key={_id}>
            <div className="border bg-white p-3 rounded hover: ">
                <img className="img-fluid" src={img} alt="" />
                <h4>{name}</h4>
                <p>{decription}</p>
                <button className="myButton"><Link to={`/placeOrder/${_id}`}>Order Now</Link></button>
            </div>
        </div>

    );
};

export default Foods;