import React, { Component } from "react";

import changeProfileImg from "../../../api/changeProfileImg";

class UploadProfileImg extends Component {
    state = {
        filename: "",
        file: "",
        hasUploaded: false,
    };

    submitForm = (e) => {
        e.preventDefault();
        changeProfileImg(this.state, () => {
            this.setState({
                hasUploaded: true,
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        });
    };

    render() {
        return (
            <div className="row valign-wrapper uploadProfileImgContainer">
                <div className="col s4">
                    <p>Change your profile image</p>
                </div>
                <form
                    className="col s8 valign-wrapper right-align"
                    onSubmit={this.submitForm}
                >
                    <div className="col s8 right-align">
                        <div className="file-field input-field">
                            <div className="btn openFileExplorerBtn">
                                <span>Choose image</span>
                                <input
                                    type="file"
                                    name="file"
                                    accept=".jpg, .png, .jpeg"
                                    onChange={(e) =>
                                        this.setState({
                                            file: e.target.files[0],
                                        })
                                    }
                                />
                            </div>
                            <div className="file-path-wrapper">
                                <input
                                    className="file-path"
                                    type="text"
                                    onChange={(e) =>
                                        this.setState({
                                            filename: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <button className="blue btn" type="submit">
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UploadProfileImg;
