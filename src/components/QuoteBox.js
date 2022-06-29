import { useDispatch } from 'react-redux';
import {Tweet} from "../icons";
import { getQuote } from '../features/quote/quoteSlice';

const QuoteBox = ({quote}) => {
  const dispatch = useDispatch();
  const {author, text} = quote;

  return (
    <article id="quote-box">
      <div id="text" className="text">
        <p>{text}</p>
      </div>
      <div id="author" className="author">
        {author}
      </div>
      <div id="quote-buttons">
      <a id='tweet-quote' 
        target="_blank"
        rel="noreferrer" 
        href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(text + ' -' + author)}>
          <Tweet />
      </a>
      <button type="button"
          id="new-quote"
          onClick={() => dispatch(getQuote())}>
            New
      </button> 
      </div>
    </article>
  );
}

export default QuoteBox;