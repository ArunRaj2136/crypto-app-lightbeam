import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Sidebar from "./Components/sidebar/Sidebar";
import MainContent from "./Components/mainContent/MainContent";
import { ListCardData } from "./types/types";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCryptocurrencies,
  updateSearchedCryptocurrencies,
} from "./store/CryptocurrencySlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const { allCryptocurrencies, searchedCryptocurrencies } = useSelector(
    (state: RootState) => state?.crpytocurrency
  );
  const [userEnteredTerm, setUserEnteredTerm] = useState<string>("");

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            vs_currency: "inr",
          },
        }
      );

      const formattedData = response?.data.map((item: any) => {
        return {
          name: item?.name,
          symbol: item?.symbol,
          id: item?.id,
          image: item?.image,
        };
      });
      dispatch(fetchAllCryptocurrencies(formattedData));
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const SearchCoinsWithName = (name: string) => {
    const SearchedCoins = allCryptocurrencies?.filter((item: ListCardData) =>
      item?.name?.toLowerCase().includes(name.toLowerCase())
    );
    dispatch(updateSearchedCryptocurrencies(SearchedCoins));
  };

  useEffect(() => {
    SearchCoinsWithName(userEnteredTerm);
  }, [userEnteredTerm]);

  return (
    <div className="container">
      <Sidebar
        cryptos={
          searchedCryptocurrencies.length > 0
            ? searchedCryptocurrencies
            : allCryptocurrencies
        }
        setUserEnteredTerm={setUserEnteredTerm}
        userEnteredTerm={userEnteredTerm}
      />
      <MainContent />
    </div>
  );
}

export default App;
