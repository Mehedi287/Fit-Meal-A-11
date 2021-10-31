import React from 'react';
import "./AddService.css"
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddService = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post("https://warm-taiga-38086.herokuapp.com/foods", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("add successfully")
                    reset()
                }
            })
    };

    return (
        <div>
            <h1 className="text-success">add a service</h1>
            <div className="main text-success ">
                <p className="sign " align="center"> Add a service</p>
                <form className="form1" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="un"  {...register("name")} placeholder="Item Name" /><br />
                    <input className="un"   {...register("decription")} placeholder="Decription" /> <br />
                    <input className="un"  {...register("img")} placeholder="Img Url" /><br />
                    {/* include validation with required or other standard HTML validation rules */}
                    <input className="button-33 mt-3" value="ADD" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;