import React from "react";

function about() {
    return (
    <div className="mt-1">
        <div class="animeffect">
        <i class="blownup"></i>
    <i class="blownup2"></i>
        </div>
    <div class="d-flex justify-content-center text-center p-5">
        <div>
            <div class="mx-5 text">
                <h1 class="text-white mt-5">LOGIN NOW</h1>
            </div>
            <div class="loginpage pt-5">
                <input type="text" name="email" class="form-control" placeholder="Enter Email"/>
                <input type="text" name="password" class="form-control my-2" placeholder="Enter password"/>
                <button class="btn btn-primary my-3" id="loginbtn">Login</button>
                <h6><a href="index.html">New User? Register Now !</a></h6>
            </div>
        </div>
    </div>
    </div>
    );
}

export default about;