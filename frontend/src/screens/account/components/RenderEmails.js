import React, { Component } from "react";
import { connect } from "react-redux";

import addEmailAddress from "../../../api/addEmailAddress";

class RenderEmail extends Component {
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

    render() {
        return (
            <div>
                <ul class="collection">
                    <li class="collection-item avatar valign-wrapper primaryEmail">
                        <p>
                            {this.props.user.name}
                            <br />
                            {this.props.user.userEmail}
                        </p>
                        <a href="#!" class="secondary-content">
                            <i class="material-icons">grade</i>
                        </a>
                    </li>
                    <li class="collection-item avatar valign-wrapper newEmailContainer">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                addEmailAddress(this.state, () => {
                                    this.setState(this.initialState);
                                });
                            }}
                        >
                            <input
                                placeholder="Input a name..."
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
                            <button class="secondary-content" type="submit">
                                <i class="material-icons">add_circle</i>
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, null)(RenderEmail);
