import { createSlice } from "@reduxjs/toolkit";
const AppSlice = createSlice({
    name: 'AllApps',
    initialState: {apps: []},
    reducers: {
        updateApps: (state, action) => {
            state.apps = action.payload;
        }
    }
});
export const {updateApps} = AppSlice.actions;
export default AppSlice.reducer;