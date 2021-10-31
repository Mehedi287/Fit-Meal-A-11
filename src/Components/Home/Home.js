
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
                foods.length === 0 ? <Spinner className="m-4" animation="border" variant="success" /> :
                    <div className=" container-fluid">
                        <h2 className="m-4">Our Services</h2>
                        <div className="row g-3">
                            {
                                foods.map(food => <Foods key={food.id} food={food}></Foods>)
                            }
                        </div>

                    </div>
            }
            <div className="container">
                <h2 className="m-4">Our Delivery Man</h2>
                <div className="row g-4 mx-auto mb-3">
                    <div className="col-md-3">
                        <img className="img-fluid delivery-man bg-white " src="https://image.freepik.com/free-photo/delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package-isolated-grey-studio-background-copy-space_1258-1212.jpg" alt="" />
                        <h3>Mr Binn</h3>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid  delivery-man" src="https://img.freepik.com/free-photo/young-handsome-delivery-man-with-face-mask_1258-16299.jpg?size=338&ext=jpg" alt="" />
                        <h3>Mr Binn</h3>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid delivery-man " src=" https://img.freepik.com/free-photo/young-delivery-girl-blue-uniform-cap-holding-cardboard-box-her-shoulder-smilin-showing-thumbs-up-standing-orange-wall_141793-63730.jpg?size=338&ext=jpg" alt="" />
                        <h3>Mr Binn</h3>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid delivery-man " src=" https://img.freepik.com/free-psd/free-non-stop-delivery-man-pointing-box_23-2148462371.jpg?size=338&ext=jpg" alt="" />
                        <h3>Mr Binn</h3>
                    </div>

                </div>

            </div>
            <div className="container-fluid mb-5">
                <h2 className="m-4">Our Delivery Process</h2>
                <div className="row g-2 mx-auto ">
                    <div className="col-md-4 bg-white p-3 rounded">
                        <img className="img-fluid" src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/002-checklist.png" alt="" />
                        <h4>Your Order</h4>
                        <p>Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.</p>
                    </div>
                    <div className="col-md-4  bg-white p-3 rounded">
                        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/001-salary.png" alt="" className="img-fluid" />
                        <h4>Cash On Delivery</h4>
                        <p>Online food Delivery for hiring Food Foodota We appreciate your business, and we’ll do best to continue to give you the new kind.</p>
                    </div>
                    <div className="col-md-4 bg-white p-3 rounded">
                        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/003-box.png" alt="" className="img-fluid" />
                        <h4>Receive Order</h4>
                        <p>We at truly appreciate your business and we’re grateful for the trust you’ve placed in us. We sincerely hope you are satisfied </p>
                    </div>

                </div>
            </div>


        </>
    );
};

export default Home;