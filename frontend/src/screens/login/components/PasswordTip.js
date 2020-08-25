import React, { Component } from "react";

class PasswordTips extends Component {
    state = {
        validPassword: false,
    };
    componentDidUpdate() {
        const { characterTip, numberTip } = this.refs;
        this.props.password.length >= 5
            ? this.tipValid(characterTip)
            : this.tipInvalid(characterTip);
        /\d/.test(this.props.password)
            ? this.tipValid(numberTip)
            : this.tipInvalid(numberTip);
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
