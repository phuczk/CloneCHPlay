import { configureStore } from "@reduxjs/toolkit";
import product from "../reducers/product";

export default configureStore({
    reducer:{
        listComment: product
    }
})