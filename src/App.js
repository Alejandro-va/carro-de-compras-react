import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutPag from "./components/CheckoutPag";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider"; //para consmir un dato
import Checkout from "./components/CheckoutForm/Checkout";

function App() {
  const [{ user }, dispatch] = useStateValue(); //para consmir un dato

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout-page" element={<CheckoutPag />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
