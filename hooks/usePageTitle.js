import { PageTitle } from "state";
import { getTitleFromPath } from "util/path";
import { useEffect } from "react";
import { useRouter } from "next/router";

const usePageTitle = () => {
  const router = useRouter();
  const { setPageTitle } = PageTitle.useContainer();
  useEffect(() => {
    setPageTitle(getTitleFromPath(router.pathname, router.query.id));
  }, [router.pathname, router.query.id]);
};

export default usePageTitle;
