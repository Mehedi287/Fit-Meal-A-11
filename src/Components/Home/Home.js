
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "./Home.css"
const Home = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch("/fakeData.json")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])




    return (
        <>
            <div className="slider">
                <Carousel className="container-fluid mt-2 w-75 rounded">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/smiling-young-caucasian-delivery-man-red-uniform-cap-holding-pizza-packages-with-paper-food-packages-them-stretching-out-food-container-isolated-olive-green-wall_141793-112287.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/smiling-young-pretty-delivery-woman-holding-pizza-boxes-phone_141793-123771.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/person-enjoying-some-takeaway-food_23-2149050391.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="d-block">
                <h2>Our Services</h2>
                <div className="service-container">
                    {
                        foods.map(food =>

                            <div className="service" key={food.id}>
                                <img src={food.img} alt="" />
                                <h4>{food.name}</h4>
                                <p>{food.decription}</p>
                                <button>Order Now</button>
                            </div>)
                    }
                </div>

            </div>
        </>
    );
};

export default Home;