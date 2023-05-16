import { IProductCardProps } from "./productCard.structure";

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <div className=" w-[250px] h-[400px] flex flex-col mb-10 bg-new-black p-5 items-center gap-2 rounded-2xl">
      <img className=" w-[150px] rounded-2xl" src={product.thumbnail} alt={product.id} />
      <p className=" text-center h-[100px] flex justify-center items-center">{product.title}</p>
      <button>Adicionar ao Carrinho</button>
      { product.shipping.free_shipping && "Frete Grátis!" }
    </div>
  )
}