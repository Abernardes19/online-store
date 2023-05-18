import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./components/Context/ProductProvider";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import Product from "./pages/Product";

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/product/:id" element={ <Product /> } />
          <Route path="/myCart" element={ <MyCart /> } />
          <Route path="/checkout" element={ <Checkout /> } />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}
