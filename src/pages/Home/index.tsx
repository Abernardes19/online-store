import { useState } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import Products from "../../service/Products";
import { IProduct } from "../../service/Products/products.structure";

export default function Home() {
  const [search, setSearch] = useState("" as string);
  const [allProducts, setAllProducts] = useState([] as IProduct[]);

  const getProducts = async (id: string) => {
    const data = await Products.getByCategoryAndQuery(id, search);

    if (data) {
      setAllProducts(data.results);
    }
  }

  return (
    <div>
      <Header search={ search } setSearch={ setSearch } />
      <div className=" flex gap-10">
        <NavBar getProducts={ getProducts } />
        <div className=" pt-[135px] flex flex-wrap gap-10">
          { allProducts.map((e) => {
            return (
              <div key={e.id}>
                <ProductCard product={e} />
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  )
}