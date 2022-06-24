import { useSelector } from 'react-redux';
import { Tweet,SadIcon } from '../icons';

const QuoteBox = () => {
  const {author, text} = useSelector((state) => state.quote);

  return (
    <article id="quote-box">
      <div id="text">{text}</div>
      <div id="author">{author}</div>
      <button id='tweet-quote' target="_blank" href="twitter.com/intent/tweet">Tweet <Tweet /></button>
      <button id='new-quote'>New Quote</button>
    </article>
  );
}

export default QuoteBox;