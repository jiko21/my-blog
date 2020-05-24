import { NextPage } from 'next';
import Layout from '~/components/Layout';
import BlogLink from '~/components/BlogLink';
import { BlogInfo, getSortedBlogInfo } from '../lib/blog.ts';

export const config = {
  amp: true,
};

export const getStaticProps = async () => {
  const allPosts: BlogInfo[] = getSortedBlogInfo();
  return {
    props: {
      allPosts,
    },
  };
};

const IndexPage: NextPage = ({ allPosts }: { allPosts: BlogInfo[] }) => {
  return (
    <Layout>
      <amp-img
        alt="Mountains"
        width="550"
        height="368"
        layout="responsive"
        src="/images/head_img.webp"
      ></amp-img>
      <h1>@jiko21's tech blog</h1>
      <section>
        <ul>
          {allPosts.map((blogInfo) => (
            <li key={blogInfo.id}>
              <BlogLink blogInfo={blogInfo} />
            </li>
          ))}
        </ul>
      </section>
      <style jsx>{`
        a {
          font-size: 1.5rem;
        }
        h1 {
          margin-bottom: 5px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
          margin-top: 30px;
        }
        h1 {
          color: #333;
        }
        ul {
          list-style: none;
        }
        li {
          margin: 10px 0;
        }
      `}</style>
    </Layout>
  );
};

export default IndexPage;
