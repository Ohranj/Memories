import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { storeUser } from "../actions/user";

import PagePreload from "../utilityComponents/PagePreload";

class PrivateRoute extends Component {
    state = {
        authChecked: false,
    };

    UNSAFE_componentWillMount() {
        this.props.storeUser().then(() => {
            this.setState({ authChecked: true });
        });
    }

    render() {
        if (this.state.authChecked) {
            return this.props.user.name ? (
                <this.props.component user={this.props.user} />
            ) : (
                <Redirect to="/" />
            );
        } else {
            return <PagePreload />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, { storeUser })(PrivateRoute);
