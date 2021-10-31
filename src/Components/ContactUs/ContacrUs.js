import React from 'react';
import "./ContactUs.css"

const ContacrUs = () => {

    return (
        <>
            <div className="container">
                <h2 className="m-3">Contact With Us</h2>
                <div className="d-flex row mt-2">
                    <div class="mapouter col-md-5 m-5 w-50">
                        <div className="gmap_canvas">
                            <iframe className="img-fluid" width="600" title="3" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0">
                            </iframe>
                            <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">divi discount</a>
                        </div>
                    </div>
                    <div className="main col-md-5 mt-0 contact">
                        <p className="sign" align="center">Sign in</p>
                        <form className="form1" />
                        <input className="un" type="text" align="center" placeholder="Name" />
                        <input className="un" type="number" align="center" placeholder="Phone" />
                        <input className="un " type="email" align="center" placeholder="Email" />
                        <input className="pass" type="password" align="center" placeholder="Password" />
                        <textarea className="un" name="" id="" cols="40" placeholder="Your Massage" rows="5"></textarea>
                        <button className="myButton mt-3">Submit</button><br />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContacrUs;