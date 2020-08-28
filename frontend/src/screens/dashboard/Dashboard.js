import React, { Component } from "react";

import "../../assets/dashboard.css";

import HeaderAuth from "../../utilityComponents/HeaderAuth";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardContainer purple lighten-5">
                <HeaderAuth />
                {this.props.user.name}
            </div>
        );
    }
}

export default Dashboard;
