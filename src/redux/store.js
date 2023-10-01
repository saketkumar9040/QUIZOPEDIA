import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { scoreReducer } from "./scoreSlice";
import { questionReducer } from "./questionSlice";

const Store = configureStore({
    reducer:{
        auth:authReducer,
        score:scoreReducer,
        question:questionReducer
    }
});

export default Store;