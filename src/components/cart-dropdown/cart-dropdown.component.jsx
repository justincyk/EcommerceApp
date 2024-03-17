import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart.dropdown.styles.jsx";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";
import useComponentVisible from "../../customHooks/useComponentVisible.js";

import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartDropdown = forwardRef((props, ref) => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer ref={ref}>
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
});

export default CartDropdown;
