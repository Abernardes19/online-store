import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loding";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import Products from "../../service/Products";
import { IProduct } from "../../service/Products/products.structure";
import { ISearchInfos } from "./home.struccture";

export default function Home() {
  const [productInfo, setProductInfo] = useState({ search: "" } as ISearchInfos);
  const [allProducts, setAllProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(false as boolean);
  
  useEffect(() => { 
    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify([]))
    }
  }, []);

  const updateClass = async (id: string) => {
    setProductInfo({ ...productInfo, productClass: id });
    setLoading(true)
    const data = await Products.getByCategoryAndQuery(id, "");

    if (data) {
      setAllProducts(data.results);
      setLoading(false)
    }
  }

  const getProducts = async () => {
    setLoading(true)
    const data = await Products.getByCategoryAndQuery(productInfo.productClass, productInfo.search);

    if (data) {
      setAllProducts(data.results);
      setLoading(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setProductInfo({ ...productInfo, search: value });
  }

  return (
    <div>
      <Header handleChange={handleChange} search={ productInfo.search } searchBtn={getProducts} />
      <div className=" flex w-screen">
        <NavBar getProducts={ updateClass } />
        <div className={` ${!loading && "flex flex-wrap"} pt-[135px] gap-10 items-center justify-center pb-10 w-full`}>
          { loading ? (
            <div className=" mt-[400px]">
              <Loading />
            </div>
          ) : (
            allProducts.map((e) => {
              return (
                <div key={e.id}>
                  <ProductCard product={e} />
                </div>
              )
            })
          ) }
        </div>
      </div>
    </div>
  )
}