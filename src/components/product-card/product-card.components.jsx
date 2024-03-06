import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";
import { selectCartItems } from "../../store/cart/cart.selector.js";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action.js";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
