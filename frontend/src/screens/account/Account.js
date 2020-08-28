import React, { Component } from "react";

import "../../assets/account.css";

import HeaderAuth from "../../utilityComponents/HeaderAuth";
import UploadProfileImg from "./components/UploadProfileImg";

class Account extends Component {
    render() {
        return (
            <div className="accountContainer purple lighten-5">
                <HeaderAuth />
                <div className="row accountScreenBody">
                    <div className="col s6 offset-s3">
                        <UploadProfileImg />
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
