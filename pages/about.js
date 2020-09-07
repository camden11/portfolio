import React, { useEffect } from "react";

import { usePageTitle } from "hooks";

const PAGE_TITLE = ["Camden Phalen", "About"];

const AboutPage = () => {
  usePageTitle(PAGE_TITLE);

  return <p>About page</p>;
};

export default AboutPage;
