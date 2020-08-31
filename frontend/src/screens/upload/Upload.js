import React, { Component } from "react";

import "../../assets/upload.css";

import HeaderAuth from "../../utilityComponents/HeaderAuth";
import UploadFormContainer from "./components/UploadFormContainer";

class Upload extends Component {
    render() {
        return (
            <div className="uploadContainer">
                <HeaderAuth />
                <div className="row">
                    <UploadFormContainer />
                </div>
            </div>
        );
    }
}

export default Upload;
