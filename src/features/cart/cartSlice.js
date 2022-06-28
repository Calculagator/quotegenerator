import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount:0,
  total:0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state,action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, {payload}) => {
      state.cartItems.forEach(item => {
        if (item.id === payload)
          item.amount += 1;
          return;
      });

    },
    decrease: (state, {payload}) => {
      state.cartItems.forEach(item => {
        if (item.id === payload)
          item.amount -= 1;
          return;
      });

    }
    

  }
});

//console.log(cartSlice);

export const cartReducer = cartSlice.reducer;
export const {clearCart,removeItem,increase,decrease} = cartSlice.actions;