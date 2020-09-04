import React from "react";

export default () => {
    return (
        <div className="col s4 valign-wrapper sortBtnsContainer">
            <ul>
                <li>
                    <button className="btn waves-effect waves-light sortBtn">
                        Newest
                        <i className="material-icons right">arrow_upward</i>
                    </button>
                </li>
                <li>
                    <button className="btn waves-effect waves-light sortBtn">
                        Oldest
                        <i className="material-icons right">arrow_downward</i>
                    </button>
                </li>
            </ul>
        </div>
    );
};
