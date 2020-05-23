type Props = {
  author: string;
};

const Byline: React.FC<Props> = ({ author }) => {
  return (
    <>
      <div className="byline">By {author}</div>
      <style jsx>{`
        .byline {
          color: green;
          font-weight: bolder;
        }
      `}</style>
    </>
  )
}

export default Byline;
