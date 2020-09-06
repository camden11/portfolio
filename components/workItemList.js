import React from "react";
import { WorkItem } from "components";
const WorkItemList = ({ work }) => {
  return work.map((item) => <WorkItem item={item} />);
};

export default WorkItemList;
