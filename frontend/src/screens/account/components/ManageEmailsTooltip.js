import React from "react";

const ManageEmailsTooltip = (props) => {
    if (props.displayToolTip) {
        return (
            <div className="emailsTooltip">
                Here you can store the email addresses that you wish to send
                memories to. It doesn't have to be just your own. You can
                include up to 10 (inc your own). Share away.
            </div>
        );
    } else {
        return null;
    }
};

export default ManageEmailsTooltip;
