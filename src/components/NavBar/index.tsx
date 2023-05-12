import { useEffect, useState } from "react"
import { ICategory } from "../../service/Categories/categories.sctructure"
import Category from "../../service/Categories";

export default function NavBar() {
  const [categories, setCategories] = useState([] as ICategory[]);

  const getAllCategories = async () => {
    const data = await Category.getAllCategories()

    if (data) {
      setCategories(data)
    }
  }

  useEffect(() => {
    getAllCategories();
  }, [])

  return (
    <aside className=" bg-new-black w-[250px] border-0 border-r-2 border-r-beige ">
      <nav className=" pt-[110px] flex flex-col gap-2 px-2">
        {
          categories.map((e) => {
            return (
              <button className=" text-start p-0 px-5 bg-beige text-new-black" key={e.id}>
                <p>{e.name}</p>
              </button>
            )
          })
        }
      </nav>
    </aside>  
  )
}