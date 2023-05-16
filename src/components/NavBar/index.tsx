import { useEffect, useState } from "react"
import { ICategory } from "../../service/Categories/categories.sctructure"
import Category from "../../service/Categories";
import { INavBarProps } from "./navbar.structure";

export default function NavBar(props: INavBarProps) {
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
    <aside className=" bg-new-black min-w-[280px] border-0 border-r-2 border-r-beige ">
      <nav className=" pt-[115px] flex flex-col gap-3 px-5">
        {
          categories.map((e) => {
            return (
              <div className=" flex flex-col gap-2 hover:-translate-x-1 hover:-translate-y-1" key={e.id}>
                <button className=" text-start p-0 px-4 bg-new-black rounded-none" onClick={() => props.getProducts(e.id)}>
                  <p>{e.name}</p>
                </button>
                <span className=" h-[2px] w-full bg-beige" />
              </div>
            )
          })
        }
      </nav>
    </aside>  
  )
}