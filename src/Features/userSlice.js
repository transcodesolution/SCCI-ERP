import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  email: "",
  password: "",
  isButtonDisabled: true,
  helperText: "",
  isError: false,
  token: ''
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsButtonDisabled: (state, action) => {
      state.isButtonDisabled = action.payload;
    },
    loginSuccess: (state, action) => {
      state.helperText = action.payload;
      state.isError = false;
    },
    loginFailed: (state, action) => {
      state.helperText = action.payload;
      state.isError = true;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
});


export const { setEmail, setPassword, setIsButtonDisabled, loginSuccess, loginFailed, setIsError } = loginSlice.actions;

export default loginSlice.reducer;


