import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../assets/utilityComponents.css";

import SignOutBtn from "./SignOutBtn";

class HeaderAuth extends Component {
    render() {
        console.log(this.props.user);
        return (
            <div className="headerContainer">
                <nav className="deep-purple lighten-2">
                    <div className="nav-wrapper valign-wrapper">
                        <Link to="account">
                            <img
                                src={`profiles/${this.props.user.profileImg}`}
                                alt="User profile icon"
                                className="profileImg z-depth-1"
                            />
                        </Link>
                        <a href="/home" className="brand-logo center">
                            <h4>Memories</h4>
                        </a>
                        <ul
                            id="nav-mobile"
                            className="right hide-on-med-and-down"
                        >
                            <li>
                                <Link to="upload">Upload</Link>
                            </li>
                            <li>
                                <Link to="account">Account</Link>
                            </li>
                            <li>
                                <SignOutBtn />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(HeaderAuth);
