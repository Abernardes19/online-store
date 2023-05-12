import api from "../api";
import { ICategory } from "./categories.sctructure";

class Categories {
  getAllCategories = async (): Promise<ICategory | false> => {
    try {
      const { data } = await api.get("/sites/MLB/categories")

      return data
    } catch (error) {
      return false
    }
  }
}

export default new Categories();
