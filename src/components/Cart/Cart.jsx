import "./Cart.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { changePriceFormat } from "../../helpers";

const Cart = () => {
  const { cartProducts, totalPrice } = useContext(CartContext);

  return (
    <article className="cart">
      <p className="cart__title">Tu orden</p>
      <div className="cart__list">
        <ul>
          {cartProducts.map((product) => {
            return <ItemCart product={product} />;
          })}
        </ul>
      </div>
      <div className="cart__total">
        <div className="cart__total--group">
          <p>Productos</p>
          <span>{changePriceFormat(totalPrice)}</span>
        </div>
        <div className="cart__total--group total">
          <p>Pagá</p>
          <span>{changePriceFormat(totalPrice)}</span>
        </div>
      </div>
    </article>
  );
};

export default Cart;
