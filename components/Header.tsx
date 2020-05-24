type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <header>
        <h1>@jiko21's tech blog</h1>
      </header>
      <style jsx>{`
        header {
          background-color: #0c0c0c;
          margin: 0;
          padding: 0;
          text-align: center;
        }
        h1 {
          color: #c0c0c0;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default Header;
