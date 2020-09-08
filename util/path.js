const ROOT_PATH = "Camden Phalen";

export const formatPath = (name) => name.toLowerCase().split(/\s+/).join("-");
export const getTitleFromPath = (path, id = "") => {
  if (path === "/") {
    return [ROOT_PATH];
  }
  const formattedId = id.replace("-", " ");
  const formatted = path
    .slice(1)
    .split("/")
    .map((pathSection) =>
      pathSection.replace("-", " ").replace("[id]", formattedId)
    );
  return [ROOT_PATH, ...formatted];
};
