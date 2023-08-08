import React, { useContext } from "react";
import "./index.scss";
import { ListCardData } from "../../types/types";
import { MyContext } from "../../context/context";

interface ListCardProps {
  item: ListCardData;
}

function ListCard({ item }: ListCardProps) {
  const { selectedID, setSelectedID } = useContext(MyContext);

  const handleClickItem = (id: string) => {
    setSelectedID(id);
  };
  return (
    <div className="listcard" onClick={() => handleClickItem(item?.id)}>
      <div className="listcard__img">
        <img src={item?.image} alt="logo" />
      </div>
      <div className="listcard__data--heading">
        <p className="listcard__data--heading-description">
          {item?.symbol.toUpperCase()}
        </p>
        <p className="listcard__data--heading-name">{item?.name}</p>
      </div>
    </div>
  );
}

export default ListCard;
