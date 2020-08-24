import React from "react";

import "../assets/utilityComponents.css";

import GoogleSignInBtn from "./GoogleSignInBtn";

export default () => {
    return (
        <div className="headerContainer">
            <nav className="deep-purple lighten-2">
                <div className="nav-wrapper valign-wrapper">
                    <a href="/" className="brand-logo center">
                        <h4>Memories</h4>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <GoogleSignInBtn />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
