import React from "react";
import { WorkItem } from "components";
const WorkItemList = ({ work }) => {
  return (
    <div className="grid">
      {work.map((item) => (
        <div className="column-6">
          <WorkItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default WorkItemList;
