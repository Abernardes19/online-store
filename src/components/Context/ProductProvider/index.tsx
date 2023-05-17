import * as React from 'react';
import { useEffect, useState } from 'react';
import MyContext from '../ProductContex';
import { IMyProducts } from '../ProductContex/context.structure';
type MyProviderProps = {
  children: React.ReactNode
}

const ContextProvider = ({ children }: MyProviderProps) => {
  const [myProducts, setMyProducts] = useState([] as IMyProducts[]);
  
  useEffect(() => {
    if (localStorage.getItem("products")) {
      setMyProducts(JSON.parse(localStorage.getItem("products") as string));
    } else {
      localStorage.setItem("products", JSON.stringify([]));
    }
  }, []);

  const updateProducts = (product: IMyProducts) => {
    const newProducts = [...myProducts.filter((e) => e.id !== product.id), product]
    setMyProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  const objProvider = {
    myProducts,
    updateProducts
  };

  return (
    <MyContext.Provider value={ objProvider }>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;