import fetchUser from "../api/fetchUser";

//Fetch user from database
export const storeUser = () => async (dispatch) => {
    const response = await fetchUser();
    dispatch({
        type: "STORE_USER",
        user: response.data,
    });
};

//Remove email from additionalEmails user property - handles UI
export const removeEmail = (email) => {
    return {
        type: "REMOVE_EMAIL",
        email,
    };
};

//Add email to additionaEmails user property - handles UI
export const addEmail = (name, email) => {
    return {
        type: "ADD_EMAIL",
        name,
        email,
    };
};

//Filter memory cards
export const filterCards = (term) => {
    return {
        type: "FILTER_CARDS",
        term,
    };
};

//Sort memories by newest date first
export const sortByNewest = () => {
    return {
        type: "SORT_NEWEST",
    };
};

//Sort memories by oldest date first
export const sortByOldest = () => {
    return {
        type: "SORT_OLDEST",
    };
};

//Delete memory card from dashboard
export const deleteMemoryCard = (id) => {
    return {
        type: "DELETE_MEMORY_CARD",
        id,
    };
};
