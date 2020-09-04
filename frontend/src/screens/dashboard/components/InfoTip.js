import React, { Component } from "react";

import BreakdownTip from "./BreakdownTip";

class InfoTip extends Component {
    state = {
        showBreakdown: false,
    };
    render() {
        return (
            <div className="col s6 offset-s1 valign-wrapper infoTipContainer">
                <div className="collection">
                    <div
                        className="collection-item infoTip valign-wrapper"
                        onMouseEnter={() =>
                            this.setState({
                                showBreakdown: true,
                            })
                        }
                        onMouseLeave={() =>
                            this.setState({ showBreakdown: false })
                        }
                    >
                        <i className="material-icons">list</i>
                        <span className="new badge" data-badge-caption="total">
                            Memories - {this.props.user.memories.length}
                        </span>
                    </div>
                    {this.state.showBreakdown ? <BreakdownTip /> : null}
                </div>
            </div>
        );
    }
}

export default InfoTip;
