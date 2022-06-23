import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { SadIcon } from "../icons";


const CartContainer = () => {
    const {cartItems, total, amount } = useSelector((state) => state.cart);
    if (cartItems.length <1) {
        return (
            <section className = 'cart'>
                <header>
                    <h2>Your cart</h2>
                    <h4 className = "empty-cart">
                        is empty
                        <SadIcon />
                    </h4>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            <header>
                <h2>Your cart</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return (
                        <CartItem key={item.id} {...item} />
                    );
                })}
                    
            </div>
            <footer>
                <hr />
                <div className ='cart-total'>
                    <h4>
                        total <span>{total}</span>      
                    </h4>
                </div>
                <button className ='btn clear-btn'>
                    clear cart
                </button>
            </footer>
        </section>
    );
};

export default CartContainer;