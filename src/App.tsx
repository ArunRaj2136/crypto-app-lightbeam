import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Sidebar from "./Components/sidebar/Sidebar";
import MainContent from "./Components/mainContent/MainContent";
import { ListCardData } from "./types/types";
import { MyContext } from "./context/context";

function App() {
  const [cryptos, setCryptos] = useState<ListCardData[]>([]);
  const [cryptos2, setCryptos2] = useState<ListCardData[]>([]);
  const [userEnteredTerm, setUserEnteredTerm] = useState<string>("");
  const [selectedID, setSelectedID] = useState<string>("");

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
      setCryptos(formattedData);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const SearchCoinsWithName = (name: string) => {
    const SearchedCoins = cryptos?.filter((item: ListCardData) =>
      item?.name?.toLowerCase().includes(name.toLowerCase())
    );
    setCryptos2(SearchedCoins);
  };

  useEffect(() => {
    SearchCoinsWithName(userEnteredTerm);
  }, [userEnteredTerm]);

  return (
    <MyContext.Provider value={{ selectedID, setSelectedID }}>
      <div className="container">
        <Sidebar
          cryptos={cryptos2.length > 0 ? cryptos2 : cryptos}
          setUserEnteredTerm={setUserEnteredTerm}
          userEnteredTerm={userEnteredTerm}
        />
        <MainContent />
      </div>
    </MyContext.Provider>
  );
}

export default App;
