import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./components/Context/ProductProvider";
import Home from "./pages/Home";
import Product from "./pages/Product";

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/product/:id" element={ <Product /> } />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}
