import React, { Component } from "react";
import { connect } from "react-redux";

import setEmailTime from "../../../api/setEmailTime";

class SetEmailTime extends Component {
    state = {
        checked: true,
    };

    componentDidMount() {
        this.setState({ checked: this.props.user.notify });
    }

    submitEmailTime = (e) => {
        e.preventDefault();
        setEmailTime(this.state.checked);
    };

    render() {
        console.log(this.props.user);
        return (
            <div className="row valign-wrapper">
                <div className="col s4">Send email notifications</div>
                <form
                    className="col s8 valign-wrapper"
                    onSubmit={this.submitEmailTime}
                >
                    <div className="col s4 input-field emailTimeInput">
                        <div class="switch">
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
                                <span class="lever"></span>
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

export default connect(mapStateToProps)(SetEmailTime);
