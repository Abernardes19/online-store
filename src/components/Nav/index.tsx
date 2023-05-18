import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom"
import MyContext from "../Context/ProductContex";

export default function Nav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { myProducts } = useContext(MyContext);
  return (
    <header className=" w-screen flex justify-center items-center fixed top-0 h-[100px] bg-new-black border-b-beige border-0 border-b-2 gap-10">
        <button className=" hover:-translate-x-1 hover:-translate-y-1" onClick={ () => navigate("/") }>Home</button>
        { pathname.includes("product") && (
          <button className=" flex items-center gap-2 hover:-translate-x-1 hover:-translate-y-1" onClick={ () => navigate("/myCart") }>
            <AiOutlineShoppingCart />
            <p>{`Meu Carrinho ${myProducts.length === 0 ? 0 : myProducts.reduce((prev, curr) => prev + curr.quantity, 0)}`}</p>
          </button>
        ) }
      </header>
  )
}