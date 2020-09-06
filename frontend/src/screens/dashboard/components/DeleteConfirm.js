import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMemoryCard } from "../../../actions/user";

import deleteMemory from "../../../api/deleteMemory";

class DeleteConfirm extends Component {
    render() {
        return (
            <div className="confirmDeleteContainer">
                <i
                    className="material-icons right"
                    onClick={() =>
                        deleteMemory(this.props.card, () => {
                            this.props.deleteMemoryCard(this.props.card);
                        })
                    }
                >
                    check
                </i>
                <i
                    className="material-icons right"
                    onClick={this.props.clearDelete}
                >
                    clear
                </i>
            </div>
        );
    }
}

export default connect(null, { deleteMemoryCard })(DeleteConfirm);
