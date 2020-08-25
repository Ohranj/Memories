import React from "react";

export default (props) => {
    if (props.validLogin === null) {
        return null;
    } else if (props.validLogin) {
        return (
            <div className="loginMsg loginMsgSuccess">
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
                Success! We're logging you in
            </div>
        );
    } else {
        return (
            <div className="loginMsg loginMsgError">
                <i className="material-icons left">error</i>Email and password
                do not match
            </div>
        );
    }
};
