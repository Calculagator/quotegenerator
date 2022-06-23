import { useSelector } from "react-redux";

const CartItem = (props) => {
    return (
        <article className='cart-item'>
            <img src = {props.img} alt={props.title} />
            <div>
                <h4>{props.title}</h4>
                <h4 className = 'item-price'>${props.price}</h4>
                <button classname ='remove-btn'>remove</button>
            </div>
        </article>

    );
};

export default CartItem;