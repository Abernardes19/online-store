export interface IProduct {
  shipping: { free_shipping: boolean };
  thumbnail: string;
  title: string;
  price: number;
  id: string;
  available_quantity: number;
}

export interface IProductResult {
  results: IProduct[]
}