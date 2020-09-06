import Link from "next/link";
import React from "react";

import { WorkIcon } from "components";
import styles from "style/workItem.module.css";

const WorkItem = ({ item }) => {
  return (
    <div className={styles.workItem}>
      <WorkIcon workId={item.id} />
      <div className={styles.workItemInfo}>
        <h4>{item.name}</h4>
        <p>{item.headline}</p>
      </div>
    </div>
  );
};

export default WorkItem;
