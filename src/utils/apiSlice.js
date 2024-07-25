import { createSlice } from "@reduxjs/toolkit";
const ApiSlice = createSlice({
    name: 'AllApis',
    initialState: {apis: []},
    reducers: {
        updateApis: (state, action) => {
            state.apis = action.payload;
        }
    }
});
export const {updateApis} = ApiSlice.actions;
export default ApiSlice.reducer;