import {configureStore} from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/AuthSlice";

import courseSliceReducer from "./Slices/courseSlice"
import razorpaySliceReducer from "./Slices/RazorpaySlice";
import lectureSliceReducer from "./Slices/lectureSlice"

import stateSliceReducer from "./Slices/StateSlice";

 
const store = configureStore({
    reducer:{
        auth: authSliceReducer,
        course:courseSliceReducer,
        razorpay:razorpaySliceReducer,
        lecture:lectureSliceReducer,
        state:stateSliceReducer

    },
    devTools:true,
});

export default store;

