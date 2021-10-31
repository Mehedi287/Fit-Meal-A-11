import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import "./PlacaeOrder.css"
import { useForm } from "react-hook-form";
import useAuth from '../../Hook/UseAuth';
import axios from 'axios';
const PlaceOrder = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const { id } = useParams();
    const [order, setOrder] = useState({});
    // get a single data 
    useEffect(() => {
        fetch(`https://warm-taiga-38086.herokuapp.com/foods/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    // post data 
    const onSubmit = data => {
        data.img = order.img;
        data.name = order.name;
        console.log(data);
        axios.post("https://warm-taiga-38086.herokuapp.com/orders", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Order  successfully")
                    reset()
                }
            })
        reset()
    }
    // console.log(user);
    return (
        <div className="row container mt-5">
            <div className="col-md-6 d-block mt-5">
                <h2 className="mt-4">Place Order </h2>
                <div className="">
                    <h2>{order.name}</h2>
                    <img className="img-fluid" src={order.img} alt="" />
                    <p>{order.decription}</p>
                </div>
            </div>
            {
                order.name ? <div className="col-md-6 d-block">
                    <div className="main  perses">
                        <p className="sign " align="center">Plase Purchase</p>
                        <form className="form1" onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input className="un " defaultValue={order.name} {...register("itemName")} /><br />
                            <input className="un " defaultValue={user.email} {...register("email")} /> <br />
                            <input className="un " defaultValue={user.displayName} {...register("uerName")} /><br />
                            <input placeholder="Address" className="un" {...register("address", { required: true })} /><br />

                            {/* include validation with required or other standard HTML validation rules */}
                            <input placeholder="description" className="un" {...register("description", { required: true })} /><br />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className="button-33 mt-3" value="Purchase" type="submit" />
                        </form>
                    </div>

                </div> : <p>loading...</p>
            }
        </div>
    );
};

export default PlaceOrder;