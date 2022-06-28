import QuoteBox from './components/QuoteBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getQuote } from './features/quote/quoteSlice';

function App() {
  const dispatch = useDispatch()
  
  const quote = useSelector(state => state.quote);

  useEffect(() => {
    dispatch(getQuote());
  },[dispatch]);

  return (
    <main>
      {!quote.isLoading && <QuoteBox quote={quote}/>}
    </main>
  );
}
export default App;
