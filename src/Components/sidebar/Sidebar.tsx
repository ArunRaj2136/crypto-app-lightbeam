import React, { useState } from "react";
import "./index.scss";
//

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="sidebar__container">
      <div className="sidebar__container--header">
        <img src="" alt="left arrow" className="sidebar__container--logo" />
        <h2 className="sidebar__container--heading">Cryptos (0)</h2>
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
      CARD
    </div>
  );
};

export default Sidebar;
