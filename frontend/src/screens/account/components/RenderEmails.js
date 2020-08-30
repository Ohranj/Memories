import React, { Component } from "react";
import { connect } from "react-redux";
import { removeEmail } from "../../../actions/user";

import deleteAdditionalEmail from "../../../api/deleteAdditionalEmail";

class RenderEmails extends Component {
    render() {
        return this.props.user.additionalEmails.map((item) => {
            return (
                <li
                    className="collection-item avatar valign-wrapper additionalEmail"
                    key={item.email}
                >
                    <p>
                        {item.name}
                        <br />
                        {item.email}
                    </p>
                    <button
                        className="secondary-content"
                        onClick={() =>
                            deleteAdditionalEmail(item.email, () => {
                                this.props.removeEmail(item.email);
                            })
                        }
                    >
                        <i className="material-icons">delete</i>
                    </button>
                </li>
            );
        });
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, { removeEmail })(RenderEmails);
