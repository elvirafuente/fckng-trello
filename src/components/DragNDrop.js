import React, { useState } from "react";
import Group from "./Group";
import { initialData } from "../utils/initialData";

const DragNDrop = () => {
  const [data, setData] = useState(initialData);

  return (
    <div className="dragNdrop">
      {data.map((group) => {
        return <Group key={group.id} group={group} />;
      })}
    </div>
  );
};

export default DragNDrop;
