import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector.js";

import useComponentVisible from "../../customHooks/useComponentVisible.js";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles.jsx";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";

const Navigation = () => {
  // a hook where you pass a selector function that is essentially a function that allows you to extract the values you want from the whole entire redux store
  // we receive inside our selector function the entire state object
  // selector updates whenever the state object changes by reference due to redux
  // currentUser is being referenced using the useSelector hook
  // everytime we update any of our reducer values, we always return a brand new state object with the changed values
  // react will then rerender the component below
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const { ref, isComponentVisible } = useComponentVisible(isCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      {/* Outlet lets us render the nested paths (the children) with the parent */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
