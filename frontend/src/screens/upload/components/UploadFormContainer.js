import React, { Component } from "react";

import SelectOccasion from "./SelectOccasion";
import UploadImg from "./UploadImg";
import SubmitUploadForm from "./SubmitUploadForm";
import OnUploadMsg from "./OnUploadMsg";

import uploadMemory from "../../../api/uploadMemory";

class UploadFormContainer extends Component {
    state = {
        title: "",
        blurb: "",
        date: "",
        occasion: "",
        filename: "",
        file: "",
        uploadSubmitted: false,
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
        this.setState({
            uploadSubmitted: true,
        });
        uploadMemory(this.state, () => {
            this.setState({
                uploadSubmitted: false,
                date: "",
            });
        });
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
                            required
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
                                required
                                value={this.state.date}
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
                            required
                            onChange={(e) => this.handleTextInputs(e)}
                        />
                        <label>Here you can write about your memory...</label>
                    </div>
                </div>
                <div className="row">
                    <UploadImg handleImgFile={this.handleImgFile} />
                </div>
                <div className="row center-align">
                    <SubmitUploadForm
                        uploadSubmitted={this.state.uploadSubmitted}
                    />
                </div>
                <OnUploadMsg uploadSubmitted={this.state.uploadSubmitted} />
            </form>
        );
    }
}

export default UploadFormContainer;
