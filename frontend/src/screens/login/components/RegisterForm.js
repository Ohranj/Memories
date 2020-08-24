import React, { Component } from "react";

import RegisterBtn from "./RegisterBtn";
import register from "../../../api/register";

class RegisterForm extends Component {
    state = {
        firstname: "",
        surname: "",
        email: "",
        password: "",
    };

    handleInputs({ target }) {
        this.setState({ [target.name]: target.value });
    }

    render() {
        return (
            <form
                className="col s12 registerForm"
                onSubmit={(e) => register(e, this.state)}
            >
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            type="text"
                            placeholder="Firstname"
                            name="firstname"
                            onChange={(e) => this.handleInputs(e)}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            type="text"
                            placeholder="Surname"
                            name="surname"
                            onChange={(e) => this.handleInputs(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            onChange={(e) => this.handleInputs(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            onChange={(e) => this.handleInputs(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s4 offset-s4">
                        <RegisterBtn />
                    </div>
                </div>
            </form>
        );
    }
}

export default RegisterForm;
