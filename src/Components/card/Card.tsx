import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Card() {
  const { userSelectedID } = useSelector(
    (state: RootState) => state?.crpytocurrency
  );
  const [cryptoData, setCryptoData] = useState<any>(null);

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${userSelectedID}`
      );
      setCryptoData(response?.data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    userSelectedID && fetchCryptoData();
  }, [userSelectedID]);

  return cryptoData ? (
    <div className="card">
      <div className="card__img">
        <img src={cryptoData?.image?.thumb} alt="logo" />
      </div>
      <div className="card__data">
        <div className="card__data--heading">
          <h2>{cryptoData?.name}</h2>
          <h5>{cryptoData?.symbol.toUpperCase()}</h5>
        </div>
        <div className="card__data--stock">
          <div className="card__data--stock-value">
            <span
              className={
                cryptoData?.market_data?.price_change_24h_in_currency?.inr > 0
                  ? `col-green price--change`
                  : `col-red price--change`
              }
            >
              {cryptoData?.market_data?.price_change_24h_in_currency?.inr.toFixed(
                2
              )}
            </span>
            <span
              className={
                cryptoData?.market_data?.price_change_percentage_24h_in_currency
                  ?.inr > 0
                  ? `col-green percentage--change`
                  : `col-red percentage--change`
              }
            >
              (
              {cryptoData?.market_data?.price_change_percentage_24h_in_currency?.inr.toFixed(
                2
              )}
              )
              {cryptoData?.market_data?.price_change_percentage_24h_in_currency
                ?.inr > 0 ? (
                <AiFillCaretUp />
              ) : (
                <AiFillCaretDown />
              )}
            </span>
          </div>
          <h5 className="card__data--stock-text">CHANGE</h5>
        </div>
        <div className="card__data--amount">
          <div className="card__data--amount-buy">
            <div className="card__data--amount-value">4324.75</div>
            <h5 className="card__data--amount-text">buy</h5>
          </div>
          <div className="card__data--amount-sell">
            <div className="card__data--amount-value">4668.93</div>
            <h5 className="card__data--amount-text">sell</h5>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>loading</h1>
  );
}

export default Card;
