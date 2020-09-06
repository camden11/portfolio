import React from "react";
import { SVG } from "components";

const WorkItem = ({ item }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <SVG src={item.icon} />
    </div>
  );
};

export default WorkItem;
