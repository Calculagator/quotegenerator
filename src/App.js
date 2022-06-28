import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { Modal } from './components/Modal';
import { useDispatch,useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { useEffect } from 'react';
import { getCartItems } from './features/cart/cartSlice';

function App() {
  const {amount,total,cartItems,isLoading } = useSelector(state => state.cart);
  const isOpen = useSelector(state => state.modal.isOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  },[]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch,cartItems]);


  return (
    <main>
      {isOpen && <Modal />}
      <Navbar amount={amount}/>
      {!isLoading && <CartContainer cartItems={cartItems} total={total}/>}
    </main>
  );
}
export default App;
