import { useState } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { IProduct } from "../../service/Products/products.structure";

export default function Home() {
  const [search, setSearch] = useState("" as string);
  const [allProducts, setAllProducts] = useState([] as IProduct[]);

  return (
    <div>
      <Header />
      <NavBar />
    </div>
  )
}