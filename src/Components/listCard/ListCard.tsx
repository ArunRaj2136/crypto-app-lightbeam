import React from "react";
import "./index.scss";
import { ListCardData } from "../../types/types";

interface ListCardProps {
  item: ListCardData;
}

function ListCard({ item }: ListCardProps) {
  return (
    <div className="listcard">
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
