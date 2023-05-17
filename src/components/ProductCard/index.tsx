import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { formatValue } from "../../utils";
import MyContext from "../Context/ProductContex";
import { IMyProducts } from "../Context/ProductContex/context.structure";
import { IProductCardProps } from "./productCard.structure";

export default function ProductCard({ product }: IProductCardProps) {
  const navigate = useNavigate();
  const { updateProducts, myProducts } = useContext(MyContext);

  const setQuantity = (id: string) => {
    if (!myProducts.find((e) => id === e.id)) {
      return 1
    } else {
      return (myProducts.find((e) => id === e.id) as IMyProducts).quantity + 1
    }
  }

  const addToMyCart = () => {
    const { available_quantity, price, thumbnail, title, id, shipping } = product;
    const myProduct = {
      available_quantity,
      price,
      thumbnail,
      title,
      id,
      shipping,
      quantity: setQuantity(id)
    }
    updateProducts(myProduct);
  }

  return (
    <div className=" w-[250px] h-[500px] flex flex-col mb-2 bg-new-black p-5 items-center gap-2 rounded-2xl justify-evenly">
      <img className=" w-[150px] rounded-2xl" src={product.thumbnail} alt={product.id} />
      <p>{ formatValue(product.price) }</p>
      <p className=" text-center h-[100px] flex justify-center items-center word-wrap break-word">{product.title}</p>
      <button className=" mb-2" onClick={() => addToMyCart()}>Adicionar ao Carrinho</button>
      <button className=" mb-2 m-0 p-0 bg-new-black" onClick={ () => navigate(`/product/${product.id}`) }>Pagina do Produto</button>
      { product.shipping.free_shipping && "Frete Grátis!" }
    </div>
  )
}