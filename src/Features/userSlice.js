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

// const {
//   setEmail,
//   setPassword,
//   setIsButtonDisabled,
//   loginSuccess,
//   loginFailed,
//   setIsError,
// } = loginSlice.actions;
export const { setEmail, setPassword, setIsButtonDisabled, loginSuccess, loginFailed, setIsError } = loginSlice.actions;
// export { setEmail, setPassword, setIsButtonDisabled, loginSuccess, loginFailed, setIsError };
export default loginSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//     password: "",
//   isLoggedIn: false,
//   loading: false,
//   error: null,
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//     setIsLoggedIn: (state, action) => {
//       state.isLoggedIn = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { setUser, setIsLoggedIn, setLoading, setError } = userSlice.actions;

// export default userSlice.reducer;
