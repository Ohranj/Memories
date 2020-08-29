import React from "react";

const ManageEmailsTooltip = (props) => {
    if (props.displayToolTip) {
        return (
            <div className="emailsTooltip">
                Here you can store the email addresses that you wish to send
                memories to. It doesn't have to just be your own. You can
                include up to 10. So share your memories to who you wish
            </div>
        );
    } else {
        return null;
    }
};

export default ManageEmailsTooltip;
