import React, { Component } from "react";
import { connect } from "react-redux";

import SetEmailTooltip from "./SetEmailTooltip";

import setEmailTime from "../../../api/setEmailTime";

class SetEmailCheck extends Component {
    state = {
        checked: true,
        displayTooltip: false,
    };

    componentDidMount() {
        this.setState({ checked: this.props.user.notify });
    }

    submitEmailTime = (e) => {
        e.preventDefault();
        setEmailTime(this.state.checked);
    };

    render() {
        return (
            <div className="row valign-wrapper setEmailCheck">
                <div className="col s4">Send email notifications</div>
                <div className="col s2 valign-wrapper setEmailCheckIconContainer">
                    <i
                        className="material-icons"
                        onMouseEnter={() =>
                            this.setState({ displayTooltip: true })
                        }
                        onMouseLeave={() =>
                            this.setState({ displayTooltip: false })
                        }
                    >
                        info
                    </i>
                    <SetEmailTooltip
                        displayTooltip={this.state.displayTooltip}
                    />
                </div>
                <form
                    className="col s6 valign-wrapper"
                    onSubmit={this.submitEmailTime}
                >
                    <div className="input-field emailTimeInput">
                        <div className="switch">
                            <label>
                                Off
                                <input
                                    type="checkbox"
                                    checked={this.state.checked}
                                    onChange={() =>
                                        this.setState({
                                            checked: !this.state.checked,
                                        })
                                    }
                                />
                                <span className="lever"></span>
                                On
                            </label>
                        </div>
                    </div>
                    <div className="col s4 right-align">
                        <button className="blue btn" type="submit">
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(SetEmailCheck);
