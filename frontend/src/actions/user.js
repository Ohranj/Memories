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
