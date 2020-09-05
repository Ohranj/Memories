import React, { Component } from "react";
import { connect } from "react-redux";
import { filterCards } from "../../../actions/user";

class FilterOptions extends Component {
    state = {
        inputValues: [
            { name: "Birthday", text: "Birthdays" },
            { name: "Holiday", text: "Holidays" },
            { name: "Friends", text: "Friends" },
            { name: "Achievement", text: "Achievements" },
            { name: "Other", text: "Other" },
            { name: "showall", text: "Show all" },
        ],
    };

    render() {
        return (
            <div className="col s6 offset-s3 center-align filterOptionsContainer">
                <div
                    className="valign-wrapper"
                    onChange={({ target }) =>
                        this.props.filterCards(target.value)
                    }
                >
                    {this.state.inputValues.map((input, index) => (
                        <span key={index}>
                            <label>
                                <input
                                    name="occasion"
                                    type="radio"
                                    value={input.name}
                                />
                                <span className="radioBtnLabel">
                                    {input.text}
                                </span>
                            </label>
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default connect(null, { filterCards })(FilterOptions);
