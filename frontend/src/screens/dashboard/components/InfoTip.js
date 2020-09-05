import React from "react";

export default (props) => {
    return (
        <div className="col s6 offset-s1 valign-wrapper infoTipContainer">
            <div className="collection">
                <div className="collection-item infoTip valign-wrapper">
                    <span className="new badge" data-badge-caption="">
                        Memories - {props.noOfMemories}
                    </span>
                </div>
            </div>
        </div>
    );
};
