import React, { Component } from "react";

class SelectOccasion extends Component {
    state = {
        inputValues: [
            { value: "Birthday", text: "Birthday" },
            { value: "Holiday", text: "Holiday" },
            { value: "Friends", text: "Friends" },
            { value: "Achievement", text: "Achievement" },
            { value: "Other", text: "Other" },
        ],
    };

    render() {
        return (
            <div
                className="col s7 offset-s1 occasionContainer"
                onChange={this.props.handleTextInput}
            >
                <p>Please select the occasion:</p>
                {this.state.inputValues.map((input) => {
                    return (
                        <span>
                            <label>
                                <input
                                    name="occasion"
                                    type="radio"
                                    value={input.value}
                                />
                                <span>{input.text}</span>
                            </label>
                        </span>
                    );
                })}
            </div>
        );
    }
}

export default SelectOccasion;
