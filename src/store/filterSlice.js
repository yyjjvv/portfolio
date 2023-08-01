import { createSlice } from "@reduxjs/toolkit";
import { data } from "../common/data/data";

export const filterSlice = createSlice({
    name: "filterSlice",
    initialState: { value: data },
    reducers: {
        all: (state) => {
            state.value = data;
        },
        work: (state, action) => {
            // state.value = data.filter((data) => data.type === action.filter);
            state.value = data.filter((data) => data.type === action.payload);
        },
        project: (state, action) => {
            // state.value = data.filter((data) => data.type === action.filter);
            state.value = data.filter((data) => data.type === action.payload);
        },
    },
});

export const {all, work, project} = filterSlice.actions;