import React from "react";
import ItemCard from "./ItemCard";

const Group = ({ group }) => {
  return (
    <div className="dnd__group">
      <div className="dnd__group-title">{group.title}</div>
      {group.items.map((item) => {
        return <ItemCard key={item.id} card={item} />;
      })}
    </div>
  );
};

export default Group;
