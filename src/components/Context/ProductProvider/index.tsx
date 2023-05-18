import * as React from 'react';
import { useEffect, useState } from 'react';
import { IReview } from '../../../pages/Product/product.structure';
import MyContext from '../ProductContex';
import { IMyProducts } from '../ProductContex/context.structure';
type MyProviderProps = {
  children: React.ReactNode
}

const ContextProvider = ({ children }: MyProviderProps) => {
  const [myProducts, setMyProducts] = useState([] as IMyProducts[]);
  const [myReviews, setMyReviews] = useState([] as IReview[]);
  
  useEffect(() => {
    if (localStorage.getItem("products")) {
      setMyProducts(JSON.parse(localStorage.getItem("products") as string));
    } else {
      localStorage.setItem("products", JSON.stringify([]));
    }
    if (localStorage.getItem("review")) {
      setMyReviews(JSON.parse(localStorage.getItem("review") as string))
    } else {
      localStorage.setItem("review", JSON.stringify([]))
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
    reducingProducts,
    myReviews,
    setMyReviews
  };

  return (
    <MyContext.Provider value={ objProvider }>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;