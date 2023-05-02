import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGet } from "../Api/ApiData";

export const fetchFormData = createAsyncThunk(
    "formdata/fetchFormData",
    async (data) => {
        console.log("userDasta", data);
        const response = await ApiGet(`/admin/member/type`);
        if (!response.status == 200) {
            throw new Error("Failed to fetch formdata list.");
        }
        // const data = await response.json();
        // console.log("data",data)
        return response.data.data;
    }
);

export const formdataSlice = createSlice({
    name: "formdata",
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFormData.pending, (state, action) => {
                state.loading = true;
                console.log("pending", action.payload);
                state.error = null;
            })
            .addCase(fetchFormData.fulfilled, (state, action) => {
                console.log("fullfilled", action.payload);
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchFormData.rejected, (state, action) => {
                console.log("rejected", action.payload);
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default formdataSlice.reducer;
