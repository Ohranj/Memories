import React, { Component } from "react";

import DeleteConfirm from "./DeleteConfirm";

class DeleteMemoryCard extends Component {
    state = {
        deleteClicked: false,
    };

    clearDelete = () => {
        this.setState({ deleteClicked: false });
    };

    render() {
        return this.state.deleteClicked ? (
            <DeleteConfirm
                card={this.props.cardToDelete}
                clearDelete={this.clearDelete}
            />
        ) : (
            <i
                className="material-icons right deleteCardIcon"
                onClick={() => this.setState({ deleteClicked: true })}
            >
                delete
            </i>
        );
    }
}

export default DeleteMemoryCard;
