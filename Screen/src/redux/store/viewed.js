import { configureStore } from "@reduxjs/toolkit";
import viewedsReducer from "../reducers/viewed";

export default configureStore({
    reducer:{
        listView: viewedsReducer
    }
})