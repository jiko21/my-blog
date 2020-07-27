import fs from 'fs';
import path from 'path';
import fm from 'front-matter';
import { createFlavMd } from 'flav-md';

export type BlogInfo = {
  id: string;
  title: string;
  date: string;
};

export type BlogData = BlogInfo & {
  content: string;
};

const baseDir = process.cwd();
const baseFilePath = path.join(baseDir, 'posts');
const cssStyleFile = path.join(baseDir, 'styles/blog.css');

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(baseFilePath);
  return fileNames.map((item) => {
    return {
      params: {
        id: item.replace(/\.md$/, ''),
      },
    };
  });
};

export const getPost = async (id: string): Promise<BlogData> => {
  const fileName = path.join(baseFilePath, `${id}.md`);
  const fileData = fs.readFileSync(fileName, 'utf8');
  const data = fm(fileData);
  const body = createFlavMd().readMdText(data.body).readCssFile(cssStyleFile).build();
  return {
    id,
    title: (data.attributes as BlogInfo).title,
    date: (data.attributes as BlogInfo).date,
    content: body,
  };
};

export const getSortedBlogInfo = (): BlogInfo[] => {
  const fileNames = fs.readdirSync(baseFilePath);
  const allPostsData: BlogInfo[] = fileNames.map((fileName) => {
    const filePath = path.join(baseFilePath, fileName);
    const data = fs.readFileSync(filePath, 'utf8');
    const content = fm(data);
    return {
      id: fileName.replace(/\.md$/, ''),
      title: (content.attributes as BlogInfo).title,
      date: (content.attributes as BlogInfo).date,
    };
  });
  return allPostsData.sort((a: BlogInfo, b: BlogInfo) => {
    if (a.date < b.date) return 1;
    else return -1;
  });
};
