import fs from 'fs';
import path from 'path';
import * as fm from 'front-matter';
import remark from 'remark';
import html from 'remark-html';

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

const imagePattern = /<p><img src=\"\.\.\/public(.+)\"><\/p>/;

const replacedImageTag = `
<div style="text-align: center;">
  <img
  src="$1"
  width="50%"
  >
</div>
`;
export const getPost = async (id: string): Promise<BlogData> => {
  const fileName = path.join(baseFilePath, `${id}.md`);
  const fileData = fs.readFileSync(fileName, 'utf8');
  const data = fm(fileData);
  const body = await remark().use(html).process(data.body);
  console.log(body.toString().replace(imagePattern, '$1'));
  return {
    id,
    title: data.attributes.title,
    date: data.attributes.date,
    content: body.toString().replace(imagePattern, replacedImageTag),
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
      title: content.attributes.title,
      date: content.attributes.date,
    };
  });
  return allPostsData.sort((a: BlogInfo, b: BlogInfo) => {
    if (a.date < b.date) return 1;
    else return -1;
  });
};
