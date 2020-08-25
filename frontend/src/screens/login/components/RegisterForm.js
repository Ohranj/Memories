import React, { Component } from "react";

import RegisterBtn from "./RegisterBtn";
import PasswordTip from "./PasswordTip";
import register from "../../../api/register";

class RegisterForm extends Component {
    initalState = {
        firstname: "",
        surname: "",
        email: "",
        password: "",
    };

    state = this.initalState;

    handleInputs({ target }) {
        this.setState({ [target.name]: target.value });
    }

    submitForm = (e) => {
        register(e, this.state, () => {
            this.setState(this.initalState);
            alert("Success!! Thank you for registering. You can login now");
        });
    };

    render() {
        return (
            <form
                className="col s12 registerForm"
                onSubmit={(e) => this.submitForm(e)}
            >
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            type="text"
                            placeholder="Firstname"
                            name="firstname"
                            required
                            value={this.state.firstname}
                            onChange={(e) => this.handleInputs(e)}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            type="text"
                            placeholder="Surname"
                            name="surname"
                            required
                            value={this.state.surname}
                            onChange={(e) => this.handleInputs(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            value={this.state.email}
                            onChange={(e) => this.handleInputs(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            value={this.state.password}
                            onChange={(e) => {
                                this.handleInputs(e);
                            }}
                        />
                    </div>
                    <div className="input-field col s6">
                        <PasswordTip password={this.state.password} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s4 offset-s4">
                        <RegisterBtn password={this.state.password} />
                    </div>
                </div>
            </form>
        );
    }
}

export default RegisterForm;
