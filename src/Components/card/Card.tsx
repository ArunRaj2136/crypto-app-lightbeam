import React from "react";
import "./index.scss";

function Card() {
  return (
    <div className="card">
      <div className="card__img">
        <img src="" alt="logo" />
      </div>
      <div className="card__data">
        <div className="card__data--heading">
          <h2>Bitcoin</h2>
          <h5>BTC</h5>
        </div>
        <div className="card__data--stock">
          <div className="card__data--stock-value">2280.66(5.19%) &gt;</div>
          <h5 className="card__data--stock-text">CHANGE</h5>
        </div>
        <div className="card__data--amount">
          <div className="card__data--amount-buy">
            <div className="card__data--amount-value">4324.75</div>
            <h5 className="card__data--amount-text">BUY</h5>
          </div>
          <div className="card__data--amount-sell">
            <div className="card__data--amount-value">4668.93</div>
            <h5 className="card__data--amount-text">SELL</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
