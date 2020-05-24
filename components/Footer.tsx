type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <footer>
        <h3>@jiko21's tech blog</h3>
        <div className="contents">
          <div className="footer-row">
            <a href="https://twitter.com/jiko_21">twitter</a>
          </div>
          <div className="footer-row">
            <a href="https://github.com/jiko21">GitHub</a>
          </div>
          <div className="footer-row">
            <a href="https://speakerdeck.com/jiko21">Speakerdeck</a>
          </div>
        </div>
        <p>2020 @jiko21</p>
      </footer>
      <style jsx>{`
        footer {
          background-color: #0c0c0c;
          bottom: 0;
          color: #c0c0c0;
          padding: 20px 0;
          text-align: center;
          width: 100%;
        }
        .contents {
          display: flex;
          justify-content: space-between;
        }
        .footer-row {
          text-align: center;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Footer;
