import React, { Component } from "react";

import SelectOccasion from "./SelectOccasion";
import UploadImg from "./UploadImg";
import SubmitUploadForm from "./SubmitUploadForm";

import uploadMemory from "../../../api/uploadMemory";

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

    handleImgFile = ({ target }) => {
        this.setState({
            file: target.files[0],
            filename: target.files[0].name,
        });
    };

    submitNewUpload = (e) => {
        e.preventDefault();
        uploadMemory(this.state);
    };

    render() {
        return (
            <form className="col s6 offset-s3" onSubmit={this.submitNewUpload}>
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
                    <SelectOccasion handleTextInput={this.handleTextInputs} />
                    <div className="col s3 dateContainer">
                        <div className="input-field col s12">
                            <input
                                type="date"
                                name="date"
                                onChange={(e) => this.handleTextInputs(e)}
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
                        <label>Here you can write about your memory...</label>
                    </div>
                </div>
                <div className="row">
                    <UploadImg handleImgFile={this.handleImgFile} />
                </div>
                <div className="row center-align">
                    <SubmitUploadForm />
                </div>
            </form>
        );
    }
}

export default UploadFormContainer;
