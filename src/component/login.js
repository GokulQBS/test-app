import React from "react";
import App from '../App';



function login() {
    return (
        <div className="mt-5">
            <div className="animeffectpage">
                <div className="animeffect">
                    <i className="blownup"></i>
                    <i className="blownup2"></i>
                </div>
            </div>
            <div className="d-flex justify-content-center text-center p-5">
                <div className="login-cover">
                    <div className="login-form">
                    <div className="mx-5 login-text">
                        <h2>LOGIN NOW</h2>
                    </div>
                        <input type="text" name="email" className="login-input" placeholder="Enter Email" />
                        <input type="text" name="password" className="login-input my-2" placeholder="Enter password" />
                    </div>
                    <div className="">
                    <button className="btn btn-primary loginbtn" id="loginbtn" onClick={App(1)}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;