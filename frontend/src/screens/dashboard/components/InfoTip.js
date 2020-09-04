import React from "react";

export default (props) => {
    return (
        <div className="col s6 offset-s1 valign-wrapper">
            <div className="collection valign-wrapper">
                <div className="collection-item infoTip">
                    <span
                        className="new badge"
                        data-badge-caption="total"
                        onClick={() => console.log("view last memory added")}
                    >
                        Memories - {props.user.memories.length}
                    </span>
                    {props.user.name}
                </div>
            </div>
        </div>
    );
};
