import React, { Component } from "react";

import "../../assets/login.css";

import Header from "../../utilityComponents/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Collage from "./components/Collage";
import RegisterBlurb from "./components/RegisterBlurb";

import fetchUser from "../../api/fetchUser";

const isUserLoggedIn = new Promise(async (res, rej) => {
    const user = await fetchUser();
    if (user.status === 200) {
        return res();
    } else {
        rej();
    }
});

class Login extends Component {
    render() {
        isUserLoggedIn
            .then(() => {
                return (window.location.href = "/home");
            })
            .catch(() => {
                return;
            });
        return (
            <div className="loginContainer purple lighten-5">
                <Header />
                <LoginForm />
                <div className="row loginScreenBody">
                    <div className="col s7 collageColumn valign-wrapper">
                        <Collage />
                    </div>
                    <div className="col s5 registerColumn">
                        <div className="row">
                            <div className="col s12">
                                <RegisterBlurb />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 offset-s2">
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
