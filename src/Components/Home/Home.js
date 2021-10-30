
import React, { useEffect, useState } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Foods from '../Foods/Foods';
import "./Home.css"
const Home = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])


    console.log(foods);

    return (
        <>
            <div className="slider mt-5">
                <Carousel className="container-fluid mt-2 w-75 rounded">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/smiling-young-caucasian-delivery-man-red-uniform-cap-holding-pizza-packages-with-paper-food-packages-them-stretching-out-food-container-isolated-olive-green-wall_141793-112287.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Mr shezed Ahamed</h3>
                            <p> Pur pizza delivery man </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/smiling-young-pretty-delivery-woman-holding-pizza-boxes-phone_141793-123771.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Ms Kupila </h3>
                            <p>He is out special Delivery woman.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/person-enjoying-some-takeaway-food_23-2149050391.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3> Chicken Salad </h3>
                            <p> Cheken Salad Is our one of the best item you can try it.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/person-enjoying-some-takeaway-food_23-2149050391.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3> Chicken Salad </h3>
                            <p> Cheken Salad Is our one of the best item you can try it.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/person-enjoying-some-takeaway-food_23-2149050391.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3> Chicken Salad </h3>
                            <p> Cheken Salad Is our one of the best item you can try it.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {
                foods.length === 0 ? <Spinner className="m-4" animation="border" variant="success" /> : <div className="d-block">
                    <h2 className="m-4">Our Services</h2>
                    <div className="service-container">
                        {
                            foods.map(food => <Foods key={food.id} food={food}></Foods>)
                        }
                    </div>

                </div>
            }
            <div className="delivery-container">
                <h2 className="m-4">Our Delivery Man</h2>
                <div className="row container mx-auto mb-3">
                    <div className="col-md-3">
                        <img className="img-fluid delivery-man " src="https://image.freepik.com/free-photo/smiling-young-caucasian-delivery-man-red-uniform-cap-holding-pizza-packages-with-paper-food-packages-them-stretching-out-food-container-isolated-olive-green-wall_141793-112287.jpg" alt="" />
                        <h3>Mr Binn</h3>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid  delivery-man" src="https://image.freepik.com/free-photo/smiling-young-caucasian-delivery-man-red-uniform-cap-holding-pizza-packages-with-paper-food-packages-them-stretching-out-food-container-isolated-olive-green-wall_141793-112287.jpg" alt="" />
                        <h3>Mr Binn</h3>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid delivery-man " src=" https://image.freepik.com/free-photo/smiling-young-caucasian-delivery-man-red-uniform-cap-holding-pizza-packages-with-paper-food-packages-them-stretching-out-food-container-isolated-olive-green-wall_141793-112287.jpg" alt="" />
                        <h3>Mr Binn</h3>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid delivery-man " src="https://image.freepik.com/free-photo/smiling-young-caucasian-delivery-man-red-uniform-cap-holding-pizza-packages-with-paper-food-packages-them-stretching-out-food-container-isolated-olive-green-wall_141793-112287.jpg" alt="" />
                        <h3>Mr Binn</h3>
                    </div>




                </div>

            </div>


        </>
    );
};

export default Home;