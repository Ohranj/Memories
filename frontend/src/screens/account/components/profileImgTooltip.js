import React, { Component } from "react";

class ProfileImgTooltip extends Component {
    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    right: "0",
                    left: "250px",
                    bottom: "-20px",
                }}
            >
                tooltip for updasting user after uploading image attempt
            </div>
        );
    }
}

export default ProfileImgTooltip;
