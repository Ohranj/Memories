import React from "react";

export default (props) => {
    return (
        <div>
            <button
                className="btn blue"
                type="submit"
                disabled={props.uploadSubmitted}
            >
                Upload
            </button>
        </div>
    );
};
