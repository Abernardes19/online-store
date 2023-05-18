import { useContext } from "react";
import { Navigate } from "react-router-dom";
import MyContext from "../../components/Context/ProductContex";
import Nav from "../../components/Nav";
import { formatValue } from "../../utils";

export default function Checkout() {
  const { myProducts } = useContext(MyContext);
  if (myProducts.length === 0) return <Navigate to="/" />
  return (
    <div className=" w-screen flex items-center justify-center flex-col">
      <Nav />
      <div className=" w-[90%] flex justify-center items-center p-2 pb-5 bg-new-black border border-beige">
        <table className=" w-full">
          <tr className=" border-beige border-b-[3px] text-2xl">
            <th className=" border-beige border-r-[3px]">Nome</th>
            <th className=" border-beige border-r-[3px]">Quantidade</th>
            <th className=" border-beige border-r-[3px]">Valor Individual</th>
            <th>Valor Total</th>
          </tr>
          { myProducts.map((e) => {
            return (
              <tr className=" border-beige border-b-[1px]">
                <td className=" border-beige border-r-[1px] p-2 break-words">{e.title}</td>
                <td className=" border-beige border-r-[1px] p-2">{e.quantity}</td>
                <td className=" border-beige border-r-[1px] p-2">{formatValue(e.price)}</td>
                <td className=" p-2">{formatValue(e.price * e.quantity)}</td>
              </tr>
            )
          }) }
        </table>
      </div>
      <div className="w-[90%] bg-new-black border border-beige my-2 flex justify-between px-2">
        <p>Valor Total:</p>
          { formatValue(
            myProducts.reduce((prev, cur) => prev + (cur.quantity * cur.price), 0)
          ) }
        </div>
      <form className=" w-[90%] flex flex-wrap flex-col justify-center items-center p-2 py-5 bg-new-black border border-beige">
        <div className=" flex flex-wrap gap-5 w-full items-center justify-center pb-5">
          <label className=" flex flex-col">
            Nome Completo:
            <input className=" p-2 rounded-2xl w-[300px]" />
          </label>
          <label className=" flex flex-col">
            Email:
            <input className=" p-2 rounded-2xl w-[300px]" />
          </label>
          <label className=" flex flex-col">
            CPF:
            <input className=" p-2 rounded-2xl w-[300px]" />
          </label>
          <label className=" flex flex-col">
            Telefone:
            <input className=" p-2 rounded-2xl w-[300px]" />
          </label>
          <label className=" flex flex-col">
            CEP:
            <input className=" p-2 rounded-2xl w-[300px]" />
          </label>
        </div>
        <button type="button" className=" w-[500px] border border-beige">Comprar</button>
      </form>
    </div>
  )
}