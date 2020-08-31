import React, { Component } from "react";

import SelectOccasion from "./SelectOccasion";
import UploadImg from "./UploadImg";
import SubmitUploadBtn from "./SubmitUploadBtn";

class UploadFormContainer extends Component {
    state = {
        title: "",
        blurb: "",
        date: "",
        occasion: "",
        filename: "",
        file: "",
    };

    handleTextInputs = ({ target }) => {
        this.setState(() => ({ ...this.state, [target.name]: target.value }));
    };

    render() {
        return (
            <form className="col s6 offset-s3">
                <div className="row">
                    <div className="input-field col s8 offset-s2">
                        <input
                            placeholder="Title..."
                            type="text"
                            name="title"
                            onChange={(e) => this.handleTextInputs(e)}
                        />
                    </div>
                </div>
                <div className="row valign-wrapper">
                    <SelectOccasion />
                    <div className="col s3 dateContainer">
                        <div className="input-field col s12">
                            <input
                                type="date"
                                className="validate"
                                onChange={({ target }) =>
                                    this.setState({ date: target.value })
                                }
                            />
                        </div>
                    </div>
                    <div className="col s1"></div>
                </div>
                <div className="row">
                    <div className="input-field col s12 blurbInput">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea
                            className="materialize-textarea"
                            name="blurb"
                            onChange={(e) => this.handleTextInputs(e)}
                        />
                        <label>Here you can write about the memory...</label>
                    </div>
                </div>
                <div className="row">
                    <UploadImg />
                </div>
                <div className="row center-align">
                    <SubmitUploadBtn />
                </div>
            </form>
        );
    }
}

export default UploadFormContainer;
