import Link from 'next/link';
import BlogDate from './Date';
import { BlogInfo } from '~/lib/blog';

type Props = {
  blogInfo: BlogInfo;
};

const BlogLink: React.FC<Props> = ({ blogInfo }) => {
  return (
    <>
      <div className="blog-link-card">
        <Link href="/posts/[id]" as={`/posts/${blogInfo.id}`}>
          <a>{blogInfo.title}</a>
        </Link>
        <br />
        <BlogDate dateStr={blogInfo.date} />
      </div>
      <style jsx global>{`
        .blog-link-card {
          border-radius: 5px;
          padding: 10px;
          box-shadow: -2px -2px 5px #555, 3px -3px 5px rgba(255, 255, 255, 0.8);
        }
        a {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default BlogLink;
