import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authReducer";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfigAuth = { key: "adminAuth_SCCI", storage, version: 1 };
const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);


const combineReducer = combineReducers({
    auth: persistedReducerAuth
})

const store = configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export default store;


//Description :   Store Is File To Combine All Reducers. In This File We use persist reducer for storing state data in localstorage. due to this even if user refresh the page data will get automaticly from localstorage