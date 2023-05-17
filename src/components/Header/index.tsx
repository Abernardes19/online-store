import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { IHeaderProps } from "./header.structure";

export default function Header({ handleChange, search, searchBtn }: IHeaderProps) {

  return (
    <div className=" w-screen flex justify-around items-center fixed top-0 h-[100px] bg-new-black border-b-beige border-0 border-b-2">
      <label className=" flex items-center gap-2 h-10">
        <input
          type="text"
          className=" bg-beige rounded text-new-black px-5 h-full"
          value={ search }
          onChange={ handleChange }
        />
        <button className=" h-full" onClick={ () => searchBtn() }>
          <AiOutlineSearch />
        </button>
      </label>
      <button className=" flex items-center gap-2">
        <AiOutlineShoppingCart />
        <p>{`Meu Carrinho ${JSON.parse(localStorage.getItem("products") as string).length}`}</p>
      </button>
    </div>
  )
}