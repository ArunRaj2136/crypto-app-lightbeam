import React from "react";
import "./index.scss";
import { ListCardData } from "../../types/types";
import { useDispatch } from "react-redux";
import { updateUserSelectedID } from "../../store/CryptocurrencySlice";

interface ListCardProps {
  item: ListCardData;
}

function ListCard({ item }: ListCardProps) {
  const dispatch = useDispatch();

  const handleClickItem = (id: string) => {
    dispatch(updateUserSelectedID(id));
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
