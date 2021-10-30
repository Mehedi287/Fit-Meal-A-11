import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hook/UseAuth';

const PrivetRote = ({ children, ...rest }) => {
    const { user, loeading } = useAuth();
    if (loeading) {
        return <p>Loading...</p>
    }
    console.log(user);
    return (

        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect to={{ pathname: "/login", state: { from: location } }}></Redirect>}>
        </Route>

    );
};

export default PrivetRote;