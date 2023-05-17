import { IProduct } from "../../../service/Products/products.structure";

export interface IMyProducts extends IProduct {
  quantity: number
}

export interface IContext {
  myProducts: IMyProducts[],
  updateProducts: (product: IMyProducts) => void
}
