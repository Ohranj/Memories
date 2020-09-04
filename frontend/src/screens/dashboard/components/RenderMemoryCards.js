import React, { Component } from "react";

class RenderMemoryCards extends Component {
    render() {
        return this.props.memories.map(
            ({ _id, title, memoryImg, icon, scenario, date, blurb }) => {
                return (
                    <div className="card z-depth-3" key={_id}>
                        <div className="card-image">
                            <img
                                className="activator"
                                alt={title}
                                src={memoryImg}
                            />
                        </div>
                        <div className="card-content">
                            <span className="card-title">
                                {title}
                                <i className="material-icons right cardIcon">
                                    {icon}
                                </i>
                            </span>
                            <div className="cardPointers">
                                <span>{scenario}</span>
                                <span>{date}</span>
                            </div>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title">
                                {title}
                                <i className="material-icons right">close</i>
                            </span>
                            <p>{blurb}</p>
                        </div>
                    </div>
                );
            }
        );
    }
}

export default RenderMemoryCards;
