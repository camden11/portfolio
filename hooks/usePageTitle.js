import { useEffect } from "react";

import { PageTitle } from "state";
import { last } from "util/array";

const usePageTitle = (title) => {
  const { setPageTitle } = PageTitle.useContainer();
  useEffect(() => setPageTitle(title), [last(title)]);
};

export default usePageTitle;
