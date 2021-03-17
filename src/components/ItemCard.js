import React from "react";

const ItemCard = ({ card }) => {
  return (
    <div className="dnd__item" draggable>
      <div className="">
        <p>{card.title}</p>
      </div>
    </div>
  );
};

export default ItemCard;
