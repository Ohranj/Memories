import React, { Component } from "react";

import HeaderAuth from "../../utilityComponents/HeaderAuth";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <HeaderAuth />
                {this.props.name}
            </div>
        );
    }
}

export default Dashboard;
