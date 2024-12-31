import {configureStore} from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/AuthSlice";

import courseSliceReducer from "./Slices/courseSlice"
import razorpaySliceReducer from "./Slices/RazorpaySlice";
import lectureSliceReducer from "./Slices/lectureSlice"

 
const store = configureStore({
    reducer:{
        auth: authSliceReducer,
        course:courseSliceReducer,
        razorpay:razorpaySliceReducer,
        lecture:lectureSliceReducer

    },
    devTools:true,
});

export default store;

