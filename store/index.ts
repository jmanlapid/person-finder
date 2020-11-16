import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./people";

const store = configureStore({
  reducer: peopleSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
