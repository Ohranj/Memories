import React from "react";

export default () => {
    return (
        <div className="col s6 offset-s3 center-align filterOptionsContainer">
            <div>Filter:</div>
            <div className="valign-wrapper">
                <span>
                    <label>
                        <input name="occasion" type="radio" value="Birthday" />
                        <span className="radioBtnLabel">Birthday</span>
                    </label>
                </span>
                <span>
                    <label>
                        <input name="occasion" type="radio" value="Holiday" />
                        <span className="radioBtnLabel">Holiday</span>
                    </label>
                </span>
                <span>
                    <label>
                        <input name="occasion" type="radio" value="Friends" />
                        <span className="radioBtnLabel">Friends</span>
                    </label>
                </span>
                <span>
                    <label>
                        <input
                            name="occasion"
                            type="radio"
                            value="Achievement"
                        />
                        <span className="radioBtnLabel">Achievement</span>
                    </label>
                </span>
                <span>
                    <label>
                        <input name="occasion" type="radio" value="Other" />
                        <span className="radioBtnLabel">Other</span>
                    </label>
                </span>
            </div>
        </div>
    );
};
