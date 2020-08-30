import React, { Component } from "react";
import { connect } from "react-redux";

import RenderEmails from "./RenderEmails";
import AddEmail from "./AddEmail";

class RenderEmail extends Component {
    render() {
        return (
            <div>
                <ul className="collection">
                    <li className="collection-item avatar valign-wrapper primaryEmail">
                        <p>
                            {this.props.user.name}
                            <br />
                            {this.props.user.userEmail}
                        </p>
                        <a href="#!" className="secondary-content">
                            <i className="material-icons">grade</i>
                        </a>
                    </li>
                    <RenderEmails />
                    <AddEmail />
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
