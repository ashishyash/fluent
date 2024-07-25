import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import appSlice from "./appSlice";
import apiSlice from "./apiSlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
        apps: appSlice,
        apis: apiSlice
    }
});

export default store;