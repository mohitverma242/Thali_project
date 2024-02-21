import { configureStore } from "@reduxjs/toolkit";
import ThaliReducer from "../components/Thali/ThaliSlice";

export const store=configureStore({
    reducer:{
        restroThali:ThaliReducer,
    }
})

