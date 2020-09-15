import React from "react";

const SetEmailTooltip = (props) => {
    return props.displayTooltip ? (
        <div>
            By default this is set to on. At 07:30am each morning, a randomly
            selected memory will arrive in the inbox of the email addresses you
            have included below.
        </div>
    ) : null;
};

export default SetEmailTooltip;
