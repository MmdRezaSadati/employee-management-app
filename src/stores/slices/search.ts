import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "dark",
  initialState: {
    value: false,
  },
  reducers: {
    onSearchChange: (state: any, action: { payload: string | boolean }) => {
      state.value = action.payload;
    },
  },
});
export const { onSearchChange } = searchSlice.actions;
export default searchSlice.reducer;
