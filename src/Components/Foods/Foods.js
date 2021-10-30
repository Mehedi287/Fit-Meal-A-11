import React from 'react';
import { Link } from 'react-router-dom';
import "./Foods.css"
const Foods = (props) => {
    const { _id, name, img, decription } = props.food
    return (
        <div>
            <div className="service" key={_id}>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{decription}</p>
                <button className="myButton"><Link to={`/placeOrder/${_id}`}>Order Now</Link></button>
            </div>
        </div>
    );
};

export default Foods;