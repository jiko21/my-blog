import { NextPage } from 'next';
import { ReactNode } from 'react';

const Layout: ReactNode = ({ children }: { children: NextPage}) => {
  return (
    <>
      {children}
      <style jsx global>{`
        body {
          font-family: Roboto, sans-serif;
          padding: 30px;
          color: #444;
        }
      `}</style>
    </>
  )
}

export default Layout;
