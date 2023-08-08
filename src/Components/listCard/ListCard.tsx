import React from "react";
import "./index.scss";

function ListCard() {
  return (
    <div className="listcard">
      <div className="listcard__img">
        <img src="" alt="logo" />
      </div>
      <div className="listcard__data--heading">
        <h5 className="listcard__data--heading-description">BTC</h5>
        <h2 className="listcard__data--heading-name">Bitcoin</h2>
      </div>
    </div>
  );
}

export default ListCard;
