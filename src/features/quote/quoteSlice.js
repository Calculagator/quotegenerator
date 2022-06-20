import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  author: '?',
  id:0,
  permalink:'',
  text:'Earl Grey - hot',
  isLoading: true,
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
});

//console.log(cartSlice);

export const quoteReducer = quoteSlice.reducer;