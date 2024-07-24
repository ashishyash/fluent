import { createSlice } from "@reduxjs/toolkit";
const initialTheme = {
    theme: 'light'
};

const themeSlice = createSlice({
        name: 'changeTheme',
        initialState: initialTheme,
        reducers: {
            lightTheme: (state, action) => {
                state.theme = action.payload;
            },
            darkTheme: (state, action) => {
                state.theme = action.payload;
            },
            updateTheme: (state, action) => {
                console.log(state, action.payload)
                state.theme = action.payload;
            }
        }
    });

export const { lightTheme, darkTheme, updateTheme} = themeSlice.actions;
export default themeSlice.reducer;