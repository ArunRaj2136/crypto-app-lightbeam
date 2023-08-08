import React from "react";
import "./index.scss";
import Card from "./../card/Card";

function MainContent() {
  return (
    <div className="main__container">
      <header className="main__container--header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1808/1808306.png"
          alt=""
          className="main__container--logo"
        />
        <h1 className="main__container--heading"> My Cryptos</h1>
      </header>
      {/* component to show card */}
      <Card />
    </div>
  );
}

export default MainContent;
