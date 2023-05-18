import * as React from "react";
import { IReview } from "../../../pages/Product/product.structure";
import { IProduct } from "../../../service/Products/products.structure";

export interface IMyProducts extends IProduct {
  quantity: number
}

export interface IContext {
  myProducts: IMyProducts[],
  addProducts: (product: IMyProducts) => void,
  reducingProducts: (product: IMyProducts) => void,
  myReviews: IReview[],
  setMyReviews: React.Dispatch<React.SetStateAction<IReview[]>>
}
