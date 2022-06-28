import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const quoteURL = "http://quotes.stormconsultancy.co.uk/random.json"

export const getQuote = createAsyncThunk('quote/getQuote',() => {
  return axios.get(quoteURL)
    .then((response) => response.data)
    .catch((err) => console.log(err));
})

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
  extraReducers: {
    [getQuote.pending]:(state) => {
      state.isLoading = true;
    },
    [getQuote.fulfilled]:(state, action) => {
      console.log(action);
      const record = action.payload;
      state.author = record.author;
      state.id = record.id;
      state.permalink = record.permalink;
      state.text = record.quote;
      state.isLoading = false;
    },
    [getQuote.rejected]:(state) => {
      state.isLoading = false;
    }
  }
});

//console.log(cartSlice);

export const quoteReducer = quoteSlice.reducer;