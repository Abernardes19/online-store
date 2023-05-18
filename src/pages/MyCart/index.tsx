import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../components/Context/ProductContex";
import MyProductCard from "../../components/MyProductCard";
import Nav from "../../components/Nav";

export default function MyCart() {
  const { myProducts } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className=" w-screen flex items-center justify-center">
      <Nav />
      <div className=" w-screen flex justify-center items-center mt-[170px] p-2 pb-[80px]">
        { myProducts.length === 0 ? <h1>Carrinho Vazio</h1> : (
          <div className="w-[90%] flex flex-col flex-wrap items-center justify-evenly bg-new-black border-beige border-2 py-10 px-5 gap-10">
            <div className="flex flex-wrap items-center justify-evenly bg-new-black">
              {
                myProducts.map((e) => {
                  return (
                    <div key={e.id}>
                      <MyProductCard product={e} />
                    </div>
                  )
                })
              }
            </div>
            <button type="button" className=" bg-dark-blue py-2 px-5 w-[500px] border border-beige" onClick={ () => navigate("/checkout") }>Checkout</button>
          </div>
        ) }
      </div>
    </div>
  )
}