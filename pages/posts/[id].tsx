import Layout from '~/components/Layout';
import { getAllPostIds, getPost } from '~/lib/blog';
import { BlogData } from '~/lib/blog';
import BlogDate from '~/components/Date';

type PathList = {
  paths: { id: string }[];
  fallback: boolean;
};

const Post = ({ content }: { content: BlogData }) => {
  console.log(content.date);
  return (
    <>
      <Layout>
        <section>
          <h1>{content.title}</h1>
          <BlogDate dateStr={content.date} />
          <div dangerouslySetInnerHTML={{ __html: content.content }}></div>
        </section>
      </Layout>
      <style jsx>{`
        h1 {
          font-size: 2em;
        }
      `}</style>
    </>
  );
};

export const getStaticProps = async ({ params }: { id: string }) => {
  const content = await getPost(params.id);
  return {
    props: {
      content,
    },
  };
};

export const getStaticPaths = async (): Promise<PathList> => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export default Post;
