import QuoteBox from './components/QuoteBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getQuote } from './features/quote/quoteSlice';

const App = () => {
  const dispatch = useDispatch()
  
  const quote = useSelector(state => state.quote);

  useEffect(() => {
    dispatch(getQuote());
  },[dispatch]);

  return (
    <main>
      <QuoteBox quote={quote}/>
    </main>
  );
}
export default App;
