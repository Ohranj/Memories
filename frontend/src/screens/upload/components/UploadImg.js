import React from "react";

export default (props) => {
    return (
        <div className="col s6 offset-s3 imgUploadContainer">
            Upload image:
            <div className="input-field file-field inline">
                <div className="btn fileSelectBtn">
                    <span>File</span>
                    <input
                        type="file"
                        accept=".jpg, .png, .jpeg"
                        onChange={(e) => props.handleImgFile(e)}
                    />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
        </div>
    );
};
