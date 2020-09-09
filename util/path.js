const ROOT_PATH = "Camden Phalen";
const ROOT_PATH_MOBILE = "CP";

export const getWindowWidth = () =>
  process.browser ? window.innerWidth : null;

export const formatPath = (name) => name.toLowerCase().split(/\s+/).join("-");

export const getTitleFromPath = (path, id = "") => {
  if (path === "/") {
    return [ROOT_PATH];
  }
  const windowWidth = getWindowWidth();
  const isSmallScreen = windowWidth && windowWidth < 768;
  const adjustedRootPath = isSmallScreen ? ROOT_PATH_MOBILE : ROOT_PATH;
  const formattedId = id.replace("-", " ");
  const formatted = path
    .slice(1)
    .split("/")
    .map((pathSection) =>
      pathSection.replace("-", " ").replace("[id]", formattedId)
    );
  return [adjustedRootPath, ...formatted];
};
