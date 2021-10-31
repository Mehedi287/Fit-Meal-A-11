import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, } from 'react-router-dom';
import useFirebase from '../../Hook/UseFirebase';
import "./Header.css"
const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo img-fluid" src="https://image.freepik.com/free-vector/food-delivery-man-riding-motorcycles-cartoon-art-illustration_56104-610.jpg" alt="" /><p className="d-inline ms-3 text-success fw-bold">Fitmeal</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                            <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/manageOrder">Manage Orders</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    {
                        user.email ? <button onClick={handleSignOut} className="button-33"  >Logout</button> : <button className="button-33"  ><NavLink className="text-success text-decoration-none" to="/login">Login</NavLink> </button>
                    }
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;


