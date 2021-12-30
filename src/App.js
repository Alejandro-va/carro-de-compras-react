import "./App.css";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutPag from "./components/CheckoutPag";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CheckoutPag />
      {/* <Products /> */}
      {/* <Product /> */}
    </div>
  );
}

export default App;
