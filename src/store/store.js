import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
import { menuIdxSlice } from "./menuIdxSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        idx: menuIdxSlice.reducer
    },
});