import React, { Component } from "react";

import "../../assets/dashboard.css";

import InfoTip from "./components/InfoTip";
import SortBtns from "./components/SortBtns";
import FilterOptions from "./components/FilterOptions";
import MemoryCardsContainer from "./components/MemoryCardsContainer";
import HeaderAuth from "../../utilityComponents/HeaderAuth";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardContainer purple lighten-5">
                <HeaderAuth />
                <div className="row valign-wrapper">
                    <InfoTip user={this.props.user} />
                    <SortBtns />
                </div>
                <div className="row">
                    <FilterOptions />
                </div>
                <div className="row">
                    <MemoryCardsContainer memories={this.props.user.memories} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
