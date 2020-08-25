export default (state = {}, action) => {
    switch (action.type) {
        case "STORE_USER":
            const {
                additionalEmails,
                email,
                firstname,
                memories,
                profileImg,
            } = action.user;
            return {
                ...state,
                additionalEmails,
                userEmail: email,
                name: firstname,
                memories,
                profileImg,
            };
        default:
            return state;
    }
};
