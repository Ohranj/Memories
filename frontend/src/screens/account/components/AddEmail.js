import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmail } from "../../../actions/user";

import addEmailAddress from "../../../api/addEmailAddress";

class AddEmail extends Component {
    initialState = {
        name: "",
        email: "",
    };

    state = this.initialState;

    handleInputs = ({ target }) => {
        this.setState({
            ...this.state,
            [target.name]: target.value,
        });
    };

    submitNewEmail = (e) => {
        e.preventDefault();
        addEmailAddress(this.state, (name, email) => {
            this.props.addEmail(name, email);
            this.setState(this.initialState);
        });
    };

    render() {
        return (
            <li className="collection-item avatar valign-wrapper newEmailContainer">
                <form onSubmit={(e) => this.submitNewEmail(e)}>
                    <input
                        placeholder="Input their name..."
                        name="name"
                        value={this.state.name}
                        onChange={(e) => this.handleInputs(e)}
                    />
                    <input
                        placeholder="and also their email..."
                        name="email"
                        type="email"
                        required
                        value={this.state.email}
                        onChange={(e) => this.handleInputs(e)}
                    />
                    <button className="secondary-content" type="submit">
                        <i className="material-icons">add_circle</i>
                    </button>
                </form>
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, { addEmail })(AddEmail);
