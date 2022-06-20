import { useSelector } from 'react-redux';

const QuoteBox = () => {
  const {author, text} = useSelector((state) => state.quote);

  return (
    <div id="quote-box">
      <div id="text">{text}</div>
      <div id="author">{author}</div>
    </div>
  );
}

export default QuoteBox;