import React, { Component } from "react";

class PasswordTips extends Component {
    componentDidUpdate() {
        this.props.password.length >= 5
            ? this.tipValid(this.refs.characterTip)
            : this.tipInvalid(this.refs.characterTip);
        /\d/.test(this.props.password)
            ? this.tipValid(this.refs.numberTip)
            : this.tipInvalid(this.refs.numberTip);
    }

    tipValid = (tip) => {
        tip.classList.add("passwordTipValid");
    };

    tipInvalid = (tip) => {
        tip.classList.remove("passwordTipValid");
    };

    render() {
        return (
            <ul className="passwordTips">
                <li ref="characterTip">Contains at least 5 characters</li>
                <li ref="numberTip">Contains a number</li>
            </ul>
        );
    }
}
export default PasswordTips;
