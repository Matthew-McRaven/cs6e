import path from "node:path";
import fs from "node:fs/promises";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

interface FileResponse {
  name: string;
  path: string;
}

export const getSections = async (): Promise<FileResponse[]> => {
  const directoryContent = await fs.readdir(path.resolve("./src/services/docs/content"), {
    withFileTypes: true,
  });

  return directoryContent
    .filter((dirent) => dirent.isDirectory)
    .map((dirent) => ({ name: dirent.name, path: dirent.parentPath + "/" + dirent.name }));
};

export const getFilesFor = async (section: Pick<FileResponse, "path">): Promise<FileResponse[]> => {
  const sectionFiles = await fs.readdir(section.path);

  return sectionFiles
    .filter((file) => file.includes(".md"))
    .map((file) => ({
      name: file.split("/").at(-1)?.replace(".md", "") ?? "",
      path: section.path + "/" + file,
    }));
};

export const getFileContent = async (file: Pick<FileResponse, "path">): Promise<string> => {
  const md = await fs.readFile(file.path, "utf-8");

  const result = await unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify).process(md);
  return result.toString();
};
