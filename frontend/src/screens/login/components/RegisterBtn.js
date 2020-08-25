import React, { Component } from "react";

class RegisterBtn extends Component {
    state = {
        invalidPassword: true,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.password !== this.props.password) {
            this.props.password.length >= 5 && /\d/.test(this.props.password)
                ? this.setState({ invalidPassword: false })
                : this.setState({ invalidPassword: true });
        }
    }

    render() {
        return (
            <button
                className="btn  blue accent-3 signInBtn"
                type="submit"
                disabled={this.state.invalidPassword}
            >
                Register
            </button>
        );
    }
}

export default RegisterBtn;
