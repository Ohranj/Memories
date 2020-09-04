import React, { Component } from "react";

import RenderMemoryCards from "./RenderMemoryCards";

class MemoryCardsContainer extends Component {
    render() {
        return (
            <div className="col s10 offset-s1">
                <div className="memoryCardsContainer">
                    <RenderMemoryCards
                        memories={this.props.memories}
                        filter={this.props.filterTerm}
                    />
                </div>
            </div>
        );
    }
}

export default MemoryCardsContainer;
