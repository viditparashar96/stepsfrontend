import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: false,
  orgData: null,
};
export const orgSlice = createSlice({
  name: "org",
  initialState: initialState,
  reducers: {
    selectOrg: (state, action) => {
      state.selected = true;
      state.orgData = action.payload;
    },
    unSelectOrg: (state) => {
      state.selected = false;
      state.orgData = null;
    },
  },
});
export const { selectOrg, unSelectOrg } = orgSlice.actions;
export default orgSlice.reducer;
