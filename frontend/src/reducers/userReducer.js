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
                filter: "showall",
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
        case "FILTER_CARDS":
            return {
                ...state,
                filter: action.term,
            };
        case "SORT_NEWEST":
            return {
                ...state,
                memories: state.memories.sort(
                    (a, b) => Date.parse(b.date) - Date.parse(a.date)
                ),
            };
        case "SORT_OLDEST":
            return {
                ...state,
                memories: state.memories.sort(
                    (a, b) => Date.parse(a.date) - Date.parse(b.date)
                ),
            };
        default:
            return state;
    }
};
