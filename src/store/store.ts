import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add more reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
