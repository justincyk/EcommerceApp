import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  // theres only 1 instance of dispatch from 'react-redux' and it never changes the reference of it
  const dispatch = useDispatch();

  useEffect(() => {
    // user is either the authenticated user or null if there's no signed in user
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // setCurrentUser only creates an object for us which is our action object
      // We then pass the result to dispatch which dispatches our actions to the root reducer which in turn passes the action
      // to every reducer function
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index is default true. What we are saying is make Home component the default for / and to render it with the "/" path in Outlet */}
        <Route index element={<Home />} />
        {/* /* makes shop nestable. Match shop with anything. Shop will have its own routes */}
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
