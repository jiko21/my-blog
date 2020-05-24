import Layout from '~/components/Layout';
import { getAllPostIds, getPost } from '~/lib/blog';
import { BlogData } from '~/lib/blog';
import BlogDate from '~/components/Date';

type PathList = {
  paths: Param[];
  fallback: boolean;
};

type Param = { params: { id: string } };
const Post = ({ content }: { content: BlogData }) => {
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

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
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
