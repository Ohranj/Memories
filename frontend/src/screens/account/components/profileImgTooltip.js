import React, { Component } from "react";

class ProfileImgTooltip extends Component {
    render() {
        if (this.props.hasUploaded) {
            return (
                <div className="valign-wrapper profileImgTooltip">
                    <div className="preloader-wrapper small active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    Success!! We're just applying the update
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ProfileImgTooltip;
