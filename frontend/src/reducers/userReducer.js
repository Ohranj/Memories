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
        case "REMOVE_EMAIL":
            return {
                ...state,
                additionalEmails: state.additionalEmails.filter(
                    (item) => item.email !== action.email
                ),
            };
        case "ADD_EMAIL":
            return {
                ...state,
                additionalEmails: [
                    ...state.additionalEmails,
                    { name: action.name, email: action.email },
                ],
            };
        default:
            return state;
    }
};
