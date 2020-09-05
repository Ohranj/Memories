import React, { Component } from "react";
import { connect } from "react-redux";
import { sortByNewest, sortByOldest } from "../../../actions/user";

class SortBtns extends Component {
    render() {
        return (
            <div className="col s4 valign-wrapper sortBtnsContainer">
                <ul>
                    <li>
                        <button
                            className="btn waves-effect waves-light sortBtn"
                            onClick={() => this.props.sortByNewest()}
                        >
                            Newest
                            <i className="material-icons right">arrow_upward</i>
                        </button>
                    </li>
                    <li>
                        <button
                            className="btn waves-effect waves-light sortBtn"
                            onClick={() => this.props.sortByOldest()}
                        >
                            Oldest
                            <i className="material-icons right">
                                arrow_downward
                            </i>
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect(null, { sortByNewest, sortByOldest })(SortBtns);
