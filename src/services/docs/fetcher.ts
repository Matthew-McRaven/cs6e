import path from "node:path";
import fs from "node:fs/promises";

interface FileData {
  name: string;
  path: string;
}

export const getSections = async (): Promise<FileData[]> => {
  const directoryContent = await fs.readdir(path.resolve("./src/services/docs/content"), {
    withFileTypes: true,
  });

  return directoryContent
    .filter((dirent) => dirent.isDirectory)
    .map((dirent) => ({ name: dirent.name, path: dirent.parentPath + "/" + dirent.name }));
};

export const getFilesFor = async (section: Pick<FileData, "path">): Promise<FileData[]> => {
  const sectionFiles = await fs.readdir(section.path);

  return sectionFiles
    .filter((file) => file.includes(".md"))
    .map((file) => ({
      name: file.split("/").at(-1)?.replace(".md", "") ?? "",
      path: section.path + "/" + file,
    }));
};

export const getFileContent = async (file: Pick<FileData, "path">): Promise<string> => {
  return fs.readFile(file.path, "utf-8");
};

export const getSection = async (section: string): Promise<FileData> => {
  const sections = await getSections();

  const match = sections.find(({ name }) => name === section);

  if (!match) {
    throw new Error();
  }

  return match;
};

export const getFilesForSection = async (section: string): Promise<FileData[]> => {
  return getSection(section).then(getFilesFor);
};

export const getFileFromSection = async (section: string, slug: string): Promise<FileData> => {
  const files = await getFilesForSection(section);

  const match = files.find(({ name }) => name === slug);

  if (!match) {
    throw new Error();
  }

  return match;
};
