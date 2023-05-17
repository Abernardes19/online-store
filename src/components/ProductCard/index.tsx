import { useNavigate } from "react-router-dom";
import { IProductCardProps } from "./productCard.structure";

export default function ProductCard({ product }: IProductCardProps) {
  const navigate = useNavigate();

  return (
    <div className=" w-[250px] h-[450px] flex flex-col mb-2 bg-new-black p-5 items-center gap-2 rounded-2xl justify-evenly">
      <img className=" w-[150px] rounded-2xl" src={product.thumbnail} alt={product.id} />
      <p className=" text-center h-[100px] flex justify-center items-center">{product.title}</p>
      <button className=" mb-2">Adicionar ao Carrinho</button>
      <button className=" mb-2 m-0 p-0 bg-new-black" onClick={ () => navigate(`/product/${product.id}`) }>Pagina do Produto</button>
      { product.shipping.free_shipping && "Frete Grátis!" }
    </div>
  )
}