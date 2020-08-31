import React, { Component } from "react";

class SelectOccasion extends Component {
    render() {
        return (
            <div className="col s7 offset-s1 occasionContainer">
                <p>Please select the occasion:</p>
                <span>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Birthday</span>
                    </label>
                </span>
                <span>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Holiday</span>
                    </label>
                </span>
                <span>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Employment</span>
                    </label>
                </span>
                <span>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Achievement</span>
                    </label>
                </span>
                <span>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Other</span>
                    </label>
                </span>
            </div>
        );
    }
}

export default SelectOccasion;
