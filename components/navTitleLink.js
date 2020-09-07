import React, { useEffect, useState } from "react";

import Link from "next/link";
import { PageTitle } from "state";
import { formatPath } from "util/path";
import { last } from "util/array";

const NavTitleLink = ({ currentSectionNames }) => {
  const { pageTitle, done } = PageTitle.useContainer();
  const [targetSectionNames, setTargetSectionNames] = useState(pageTitle);

  useEffect(() => {
    if (done) {
      setTargetSectionNames(pageTitle);
    }
  }, [done]);

  let href;

  if (currentSectionNames.length === 1) {
    href = "/";
  } else {
    const formattedSections = currentSectionNames
      .slice(1)
      .map((_, i) => formatPath(targetSectionNames[i + 1]))
      .join("/");
    href = `/${formattedSections}`;
  }

  return (
    <Link href={href}>
      <a className="unstyled">{last(currentSectionNames)}</a>
    </Link>
  );
};

export default NavTitleLink;
