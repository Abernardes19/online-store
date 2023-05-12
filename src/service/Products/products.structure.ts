export interface IProduct {
  shipping: { free_shipping: boolean };
  thumbnail: string;
  title: string;
  price: string;
  id: string;
  available_quantity: number;
}