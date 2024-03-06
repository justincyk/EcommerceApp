import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart.dropdown.styles.jsx";
import { selectCartItems } from "../../store/cart/cart.selector.js";

import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem cartItem={item} key={item.name} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
