import React, { Component } from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/Default.layout";


function DefaultHOC ({ component, ...rest}){
    return (
        <>
            <Route {...rest} component = {(props) => (
                <DefaultLayout>
                    <Component {...props}/>
                </DefaultLayout>
            )}/>
        </>
    );
}

export default DefaultHOC;