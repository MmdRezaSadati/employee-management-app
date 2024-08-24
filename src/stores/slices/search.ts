import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "dark",
  initialState: {
    value: {},
  },
  reducers: {
    onSearchChange: (state: any, action: any) => {
      state.value = action.payload;
    },
  },
});
export const { onSearchChange } = searchSlice.actions;
export default searchSlice.reducer;
