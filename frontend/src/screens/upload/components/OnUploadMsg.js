import React from "react";

export default (props) => {
    if (props.uploadSubmitted) {
        return (
            <div className="valign-wrapper onUploadMsg">
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
                Uploading your Memory...
            </div>
        );
    } else {
        return null;
    }
};
