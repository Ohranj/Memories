import React, { Component } from "react";

//Components
import SignInBtn from "./SignInBtn";

//api request
import localLogin from "../../../api/localLogin";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
    };

    updateInputs = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        });
    };

    render() {
        return (
            <div className="row loginFormRow">
                <div className="col s5 offset-s7 loginFormColumn">
                    <form
                        className="col s12"
                        onSubmit={(e) => localLogin(e, this.state)}
                    >
                        <div className="row">
                            <div className="input-field col s5">
                                <input
                                    placeholder="email..."
                                    name="email"
                                    type="email"
                                    onChange={(e) => this.updateInputs(e)}
                                />
                            </div>
                            <div className="input-field col s4">
                                <input
                                    placeholder="password..."
                                    name="password"
                                    type="password"
                                    onChange={(e) => this.updateInputs(e)}
                                />
                            </div>
                            <div className="input-field col s3 signInBtnColumn">
                                <SignInBtn />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
