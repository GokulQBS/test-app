import React from "react";

function Header() {
    return (
        <div>
            <nav className="navbar bg-dark text-white">
                <h1 className="nav-brand">Admin Page</h1>
                <div className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                        <li className="nav-item">Home</li>
                        <li className="nav-item mx-lg-3">About</li>
                        <li className="nav-item">contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;