import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

let myStore = configureStore({
    reducer: {
        "Counter": counterReducer,
        "Product": productReducer,
        "Cart": cartReducer
    }
})

export default myStore;