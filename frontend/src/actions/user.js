import fetchUser from "../api/fetchUser";

export const storeUser = () => async (dispatch) => {
    const response = await fetchUser();
    dispatch({
        type: "STORE_USER",
        user: response.data,
    });
};
