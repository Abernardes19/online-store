import api from "../api";
import { IProductResult } from "./products.structure";

class Products {
  getByCategoryAndQuery = async (categoryId: string, query: string): Promise<IProductResult | false> => {
    try {
      const { data } = await api.get(`/sites/MLB/search?category=${categoryId}&q=${query}`)

      return data;
    } catch (error) {
      return false
    }
  } 

  getById = async (id: string): Promise<IProductResult | false> => {
    try {
      const { data } = await api.get(`/items/${id}`);

      return data;
    } catch (error) {
      return false
    }
  }
}

export default new Products();
