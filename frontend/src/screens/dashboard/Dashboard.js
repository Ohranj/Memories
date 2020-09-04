import React, { Component } from "react";

import "../../assets/dashboard.css";

import InfoTip from "./components/InfoTip";
import SortBtns from "./components/SortBtns";
import FilterOptions from "./components/FilterOptions";
import MemoryCardsContainer from "./components/MemoryCardsContainer";
import HeaderAuth from "../../utilityComponents/HeaderAuth";

class Dashboard extends Component {
    render() {
        console.log(this.props.user);
        return (
            <div className="dashboardContainer purple lighten-5">
                <HeaderAuth />
                <div className="row">
                    <InfoTip user={this.props.user} />
                    <SortBtns />
                </div>
                <div className="row">
                    <FilterOptions />
                </div>
                <div className="row">
                    <MemoryCardsContainer
                        memories={this.props.user.memories}
                        filterTerm={this.props.user.filter}
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;
