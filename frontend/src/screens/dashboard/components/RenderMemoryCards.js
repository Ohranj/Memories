import React from "react";

export default (props) => {
    return props.memories
        .filter(({ scenario }) => {
            return props.filter === "showall"
                ? scenario === "Holiday" ||
                      scenario === "Birthday" ||
                      scenario === "Friends" ||
                      scenario === "Achievement" ||
                      scenario === "Other"
                : scenario === props.filter;
        })
        .map(({ _id, title, memoryImg, icon, scenario, date, blurb }) => (
            <div className="card z-depth-3" key={_id}>
                <div className="card-image">
                    <img className="activator" alt={title} src={memoryImg} />
                </div>
                <div className="card-content">
                    <span className="card-title">
                        {title}
                        <i className="material-icons right cardIcon">{icon}</i>
                    </span>
                    <div className="cardPointers">
                        <span>{scenario}</span>
                        <span>
                            {new Date(Date.parse(date))
                                .toString()
                                .substring(0, 15)}
                        </span>
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
        ));
};
