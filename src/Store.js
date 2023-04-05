import {configureStore} from "@reduxjs/toolkit";
import  userReducer  from "./Features/userSlice";
// import {authSlice} from './redux/authSlice';    
// import { useReducer } from "react";
import userSlice from "./Features/userSlice";

const store = configureStore({
    reducer:{
        user: userReducer,
        loginState:userSlice
    }
})

export default store;


// // import { createStore, combineReducers } from "redux";
// import { legacy_createStore as createStore, combineReducers} from 'redux'
// import appStateReducer from "./features/appStateSlice";
// import loginReducer from "./features/loginSlice";

// const rootReducer = combineReducers({
//   appState: appStateReducer,
//   loginState: loginReducer,
// });

// export const store = createStore(rootReducer);

// export type RootState = ReturnType<typeof store.getState>;
