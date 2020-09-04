import React, { Component } from "react";
import { connect } from "react-redux";
import { filterCards } from "../../../actions/user";

class FilterOptions extends Component {
    render() {
        return (
            <div className="col s6 offset-s3 center-align filterOptionsContainer">
                <div
                    className="valign-wrapper"
                    onChange={({ target }) =>
                        this.props.filterCards(target.value)
                    }
                >
                    <span>
                        <label>
                            <input
                                name="occasion"
                                type="radio"
                                value="Birthday"
                            />
                            <span className="radioBtnLabel">Birthdays</span>
                        </label>
                    </span>
                    <span>
                        <label>
                            <input
                                name="occasion"
                                type="radio"
                                value="Holiday"
                            />
                            <span className="radioBtnLabel">Holidays</span>
                        </label>
                    </span>
                    <span>
                        <label>
                            <input
                                name="occasion"
                                type="radio"
                                value="Friends"
                            />
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
                            <span className="radioBtnLabel">Achievements</span>
                        </label>
                    </span>
                    <span>
                        <label>
                            <input name="occasion" type="radio" value="Other" />
                            <span className="radioBtnLabel">Other</span>
                        </label>
                    </span>
                    <span>
                        <label>
                            <input
                                name="occasion"
                                type="radio"
                                value="showall"
                            />
                            <span className="radioBtnLabel">Show all</span>
                        </label>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, { filterCards })(FilterOptions);
