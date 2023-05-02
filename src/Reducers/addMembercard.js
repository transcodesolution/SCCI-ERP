import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
}

export const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        activeTab: 0, // the default active tab is the first one
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
    },
});


export const { setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;


