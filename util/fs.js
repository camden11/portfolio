import { promises } from "fs";

export const getFile = async (filename) => {
  let file;
  try {
    file = await promises.readFile(`content/${filename}.json`);
  } catch {
    file = await promises.readFile(`content/${filename}/index.json`);
  }
  return JSON.parse(file);
};

export const getFiles = async (directory) => {
  const filenames = await promises.readdir(`content/${directory}`);
  const filteredFilenames = filenames.filter(
    (filename) => filename !== "index.json"
  );
  const content = [];
  for (let i = 0; i < filteredFilenames.length; i++) {
    const filename = filteredFilenames[i];
    const file = await promises.readFile(`content/${directory}/${filename}`);
    content.push(JSON.parse(file));
  }
  return content;
};
