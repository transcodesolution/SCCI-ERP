import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    profile: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.token = action.payload.token;
            state.profile = action.payload.profile;

        },
        setLogout: (state) => {
            state.token = null;
            // state.profile = null;
        },
    },
});
export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
