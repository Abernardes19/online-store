import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useParams } from "react-router-dom"
import Loading from "../../components/Loding";
import Products from "../../service/Products";
import { IProduct } from "../../service/Products/products.structure";

export default function Product() {
  const { id } = useParams();
  const [info, setInfo] = useState({} as IProduct);
  const [loading, setLoading] = useState(true as boolean)
  
  const getProduct = async () => {
    const data = await Products.getById(id as string);

    if (data) {
      setInfo(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div>
      <header className=" w-screen flex justify-around items-center fixed top-0 h-[100px] bg-new-black border-b-beige border-0 border-b-2">
        <button className=" flex items-center gap-2">
          <AiOutlineShoppingCart />
          <p>{`Meu Carrinho ${JSON.parse(localStorage.getItem("products") as string).length}`}</p>
        </button>
      </header>
      <div className=" h-scree w-screen flex justify-center items-center mt-[110px]">
        {loading ? <Loading /> : (
          <div className="h-[800px] w-[600px] flex flex-col items-center justify-evenly bg-new-black border-beige border">
            <h1 className=" text-center">{info.title}</h1>
            <img className=" w-[200px]" src={info.thumbnail} alt={info.id} />
            <button type="button" className=" w-full hover:-translate-x-1 hover:-translate-y-1">Adicionar ao Carrinho</button>
            <form className=" flex flex-col w-full p-5 gap-2">
              <h2 className=" text-2xl">Feedback do Produto</h2>
              <label>
                Email:
                <input type="text" className=" w-full p-2 text-new-black rounded-full" />
              </label>
              <label className="flex gap-2">
                Nota do Produto:
                <select className="text-new-black w-[50px]">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <textarea maxLength={200} className=" w-full p-2 text-new-black rounded-2xl" />
              <button type="button" className=" hover:-translate-x-1 hover:-translate-y-1">Enviar</button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}