import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider, useSelector, useDispatch  } from 'react-redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const axios = require('axios').default;


//Create redux state slice
const initialState = {
  author: 'Me',
  id: 0,
  permalink: '',
  quote: 'Earl Grey - hot'
}

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    getNew: (state) => {
      axios.get('http://quotes.stormconsultancy.co.uk/random.json')
        .then(function (response) {
          // handle success
          state=response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          state=initialState;
        });
    },
  },
})

// Action creators are generated for each case reducer function
const { getNew } = quoteSlice.actions

// Create redux store
const store = configureStore({
  reducer: {
    quote: quoteSlice.reducer,
  },
})

//react-redux
function Quote() {
  const quote = useSelector((state) => state.quote.quote)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}


ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)


