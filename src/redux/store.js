import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { scoreReducer } from "./scoreSlice";

const Store = configureStore({
    reducer:{
        auth:authReducer,
        score:scoreReducer
    }
});

export default Store;