import React, { useState } from "react";
import "./index.scss";
import ListCard from "../listCard/ListCard";
import { ListCardData } from "../../types/types";
//

interface SidebarProps {
  cryptos: ListCardData[];
}

const Sidebar = ({ cryptos }: SidebarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="sidebar__container">
      <div className="sidebar__container--header">
        <img src="" alt="left arrow" className="sidebar__container--logo" />
        <h2 className="sidebar__container--heading">
          Cryptos {cryptos?.length}
        </h2>
      </div>
      <div className="sidebar__container--input">
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e?.target?.value)
          }
        />
      </div>
      {/* List Card Component */}
      {cryptos &&
        cryptos?.map((item: ListCardData) => (
          <ListCard item={item} key={item?.id} />
        ))}
    </div>
  );
};

export default Sidebar;
