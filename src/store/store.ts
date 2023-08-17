import { configureStore } from "@reduxjs/toolkit";
import crpytocurrencyReducer from "./CryptocurrencySlice";

const store = configureStore({
  reducer: {
    crpytocurrency: crpytocurrencyReducer, // Add more reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
