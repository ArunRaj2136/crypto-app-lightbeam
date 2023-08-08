import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Sidebar from "./Components/sidebar/Sidebar";
import MainContent from "./Components/mainContent/MainContent";
import { ListCardData } from "./types/types";
import { MyContext } from "./context/context";

function App() {
  const [cryptos, setCryptos] = useState<ListCardData[]>([]);
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

  return (
    <MyContext.Provider value={{ selectedID, setSelectedID }}>
      <div className="container">
        <Sidebar cryptos={cryptos} />
        <MainContent />
      </div>
    </MyContext.Provider>
  );
}

export default App;
