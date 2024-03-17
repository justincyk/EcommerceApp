import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen } from "../store/cart/cart.selector";
import { setIsCartOpen } from "../store/cart/cart.action";

export default function useComponentVisible(initialIsVisible) {
  const dispatch = useDispatch();
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(setIsCartOpen(false));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}
