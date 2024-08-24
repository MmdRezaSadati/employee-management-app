import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/search";
import themeSlice from "./slices/theme";
const store = configureStore({
  reducer: {
    searchSlice,
    themeSlice,
  },
});
export default store;
