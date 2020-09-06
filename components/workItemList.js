import React from "react";
import { WorkItem } from "components";
const WorkItemList = ({ work }) => {
  return (
    <div className="grid">
      {work.map((item) => (
        <div className="column-6" key={item.id}>
          <WorkItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default WorkItemList;
