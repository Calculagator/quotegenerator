import {configureStore} from '@reduxjs/toolkit'
import {quoteReducer} from './features/cart/quoteSlice'


export const store = configureStore({
  reducer: {
    quote: quote
  }
});

export default store