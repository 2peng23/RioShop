import "./App.css";
import Navbar from "./assets/components/Navbar";
import "animate.css/animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./assets/pages/shop/Shop";
import Cart from "./assets/pages/cart/Cart";
import { ShopContextProvider } from "./context/shopContext";

function App() {
  return (
    <div className="w-full m-auto">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
