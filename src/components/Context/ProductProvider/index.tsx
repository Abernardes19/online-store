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

  const addProducts = (product: IMyProducts) => {
    if (myProducts.some((e) => e.id === product.id)) {
      const productInCart = myProducts.find((e) => e.id === product.id)
      const index = myProducts.indexOf(productInCart as IMyProducts);
      const newProducts = [...myProducts]
      newProducts.splice(index, 1, {...product, quantity: (productInCart as IMyProducts).quantity + 1})
       
      localStorage.setItem("products", JSON.stringify(newProducts));

      setMyProducts(newProducts);
    } else {
      const newProduct = {...product, quantity: 1}
      setMyProducts(old => [...old, newProduct]);
      console.log([...myProducts, newProduct]);
      
      localStorage.setItem("products", JSON.stringify([...myProducts, newProduct]))
    }
  };

  const reducingProducts = (product: IMyProducts) => {
    const reducedProduct = {
      ...product,
      quantity: product.quantity - 1
    }
    if (reducedProduct.quantity === 0) {
      const newProducts = myProducts.filter((e) => e.id !== product.id)
      setMyProducts(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
    } else {
      const productInCart = myProducts.find((e) => e.id === product.id)
      const index = myProducts.indexOf(productInCart as IMyProducts);
      const newProducts = [...myProducts]
      newProducts.splice(index, 1, {...product, quantity: (productInCart as IMyProducts).quantity - 1})
      setMyProducts(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
    }
  }

  const objProvider = {
    myProducts,
    addProducts,
    reducingProducts
  };

  return (
    <MyContext.Provider value={ objProvider }>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;