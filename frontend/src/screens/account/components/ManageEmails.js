import React, { Component } from "react";

import ManageEmailsTooltip from "./ManageEmailsTooltip";

class ManageEmails extends Component {
    state = {
        displayToolTip: false,
    };

    render() {
        return (
            <div className="row manageEmailsContainer">
                <div className="col s6 valign-wrapper">
                    Add or remove email addresses to notify
                    <i
                        className="material-icons"
                        onMouseEnter={() =>
                            this.setState({
                                displayToolTip: true,
                            })
                        }
                        onMouseLeave={() =>
                            this.setState({ displayToolTip: false })
                        }
                    >
                        info
                    </i>
                </div>
                <ManageEmailsTooltip
                    displayToolTip={this.state.displayToolTip}
                />
            </div>
        );
    }
}

export default ManageEmails;
