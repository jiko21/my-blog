import { format, parseISO } from 'date-fns';

type Props = {
  dateStr: string;
};

const BlogDate: React.FC<Props> = ({ dateStr }) => {
  const date = parseISO(dateStr);
  return <small>{format(date, 'yyyy年M月d日')}</small>;
};

export default BlogDate;
