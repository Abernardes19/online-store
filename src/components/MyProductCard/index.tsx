import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { formatValue } from "../../utils";
import MyContext from "../Context/ProductContex";
import { IMyCardProps } from "./myProductCard.structure";

export default function MyProductCard({product}: IMyCardProps) {
  const { addProducts, reducingProducts } = useContext(MyContext)
  const plus = () => {
    addProducts(product)
  }
  const minus = () => {
    reducingProducts(product)
  }
  const navigate = useNavigate();
  return (
    <div className=" w-[250px] h-[500px] flex flex-col mb-2 bg-dark-blue p-5 items-center gap-2 rounded-2xl justify-evenly mt-10 border border-beige">
      <img className=" w-[150px] rounded-2xl" src={product.thumbnail} alt={product.id} />
      <p>{ formatValue(product.price) }</p>
      <p className=" text-center h-[100px] flex justify-center items-center word-wrap break-word">{product.title}</p>
      <div className="flex items-center gap-2 w-full justify-center">
        <button className=" bg-dark-blue border-new-black border-2" onClick={() => minus()}>-</button>
        <p>{product.quantity}</p>
        <button className=" bg-dark-blue border-new-black border-2" onClick={() => plus()}>+</button>
      </div>
      <button className=" mb-2 m-0 p-0 bg-dark-blue" onClick={ () => navigate(`/product/${product.id}`) }>Pagina do Produto</button>
      { product.shipping.free_shipping && "Frete Grátis!" }
    </div>
  )
}