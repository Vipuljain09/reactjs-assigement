import { configureStore } from "@reduxjs/toolkit";
import gstSearchSlice from "./gstSearchSlice";


const store = configureStore({
    reducer:{
        gstSearchSlice:gstSearchSlice,
    }
})
export default store;