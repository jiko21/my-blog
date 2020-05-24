import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const name = "@jiko21's blog";
export const siteTitle = "@jiko21's blog";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="@jiko21's tech blog" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <style jsx global>{`
        * {
          font-family: Roboto, sans-serif;
          color: #444;
          margin: 0;
          padding: 0;
        }
        main {
          margin: 5% 10%;
        }
        a {
          color: #0070f3;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default Layout;
