import { configureStore } from "@reduxjs/toolkit";
import Game1 from "../reducers/Game1";

export default configureStore({
    reducer:{
        listNew: Game1
    }
})