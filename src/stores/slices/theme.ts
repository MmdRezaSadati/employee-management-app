import { createSlice } from "@reduxjs/toolkit";
type TPayload = { sideBar: boolean };

const themeSlice = createSlice({
  name: "dark",
  initialState: {
    sideBar: false,
  },
  reducers: {
    toggleSidebar: (state: TPayload, action: { payload: boolean }) => {
      state.sideBar = action.payload;
    },
  },
});
export type TThemeSelector = { themeSlice: TPayload };
export const { toggleSidebar } = themeSlice.actions;
export default themeSlice.reducer;
