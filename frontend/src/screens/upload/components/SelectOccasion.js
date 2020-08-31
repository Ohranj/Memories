import React from "react";

export default (props) => {
    return (
        <div
            className="col s7 offset-s1 occasionContainer"
            onChange={props.handleOccasionInput}
        >
            <p>Please select the occasion:</p>
            <span>
                <label>
                    <input name="occasion" type="radio" value="Birthday" />
                    <span>Birthday</span>
                </label>
            </span>
            <span>
                <label>
                    <input name="occasion" type="radio" value="Holiday" />
                    <span>Holiday</span>
                </label>
            </span>
            <span>
                <label>
                    <input name="occasion" type="radio" value="Friends" />
                    <span>Friends</span>
                </label>
            </span>
            <span>
                <label>
                    <input name="occasion" type="radio" value="Achievement" />
                    <span>Achievement</span>
                </label>
            </span>
            <span>
                <label>
                    <input name="occasion" type="radio" value="Other" />
                    <span>Other</span>
                </label>
            </span>
        </div>
    );
};
