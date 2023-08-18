import { createSlice } from "@reduxjs/toolkit";
import { ListCardData } from "../types/types";

interface CryptocurrencyState {
  allCryptocurrencies: ListCardData[];
  userSelectedID: string;
  searchedCryptocurrencies: ListCardData[];
}

const initialState: CryptocurrencyState = {
  allCryptocurrencies: [],
  userSelectedID: "bitcoin",
  searchedCryptocurrencies: [],
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
    updateSearchedCryptocurrencies: (state, action) => {
      state.searchedCryptocurrencies = action?.payload;
    },
  },
});

export const {
  fetchAllCryptocurrencies,
  updateUserSelectedID,
  updateSearchedCryptocurrencies,
} = CryptocurrencySlice.actions;
export default CryptocurrencySlice.reducer;
