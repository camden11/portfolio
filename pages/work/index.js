import React from "react";

import { usePageTitle } from "hooks";

const PAGE_TITLE = ["Camden Phalen", "Work"];

const WorkIndexPage = () => {
  usePageTitle(PAGE_TITLE);
  return <p>Work index page</p>;
};

export default WorkIndexPage;
