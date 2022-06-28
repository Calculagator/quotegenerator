import { useDispatch } from 'react-redux';
import {Tweet} from "../icons";
import { getQuote } from '../features/quote/quoteSlice';

const QuoteBox = ({quote}) => {
  const dispatch = useDispatch();
  const {author, text} = quote;

  return (
    <div id="quote-box">
      <div id="text">
        <h4>{text}</h4>
      </div>
      <div id="author">
        <h3>{author}</h3>
      </div>
      <div id="quote-buttons">
      <button id='tweet-quote' 
        target="_blank" 
        href="twitter.com/intent/tweet">
          Tweet 
          <Tweet />
        </button>
        <button type="button"
          id="new-quote"
          onClick={() => dispatch(getQuote())}>
            New
        </button> 
      </div>
    </div>
  );
}

export default QuoteBox;