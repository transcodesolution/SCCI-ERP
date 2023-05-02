import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiPost } from "../Api/ApiData";

export const addFormData = createAsyncThunk(
    "/member/add",
    async (standardData, { rejectWithValue }) => {
        try {
            const response = await ApiPost("/member/add", standardData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    status: "idle",
    error: null,
    success: null,
};

export const addStandardSlice = createSlice({
    name: "memberships",
    initialState,
    reducers: {
        addStandardPending: (state) => {
            state.status = "loading";
        },
        addStandardSuccess: (state, action) => {
            state.status = "succeeded";
            state.success = action.payload;
        },
        addStandardFailed: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export const { addStandardPending, addStandardSuccess, addStandardFailed } =
    addStandardSlice.actions;
export default addStandardSlice.reducer;    
