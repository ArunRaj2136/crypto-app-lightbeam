import { createSlice } from "@reduxjs/toolkit";
import { ListCardData } from "../types/types";

interface CryptocurrencyState {
  allCryptocurrencies: ListCardData[];
  userSelectedID: string;
}

const initialState: CryptocurrencyState = {
  allCryptocurrencies: [],
  userSelectedID: "bitcoin",
};

const CryptocurrencySlice = createSlice({
  name: "cryptocurrency",
  initialState: initialState,
  reducers: {
    fetchAllCryptocurrencies: (state, action) => {
      state.allCryptocurrencies = action?.payload;
    },
    updateUserSelectedID: (state, action) => {
      state.userSelectedID = action?.payload;
    },
  },
});

export const { fetchAllCryptocurrencies, updateUserSelectedID } =
  CryptocurrencySlice.actions;
export default CryptocurrencySlice.reducer;
