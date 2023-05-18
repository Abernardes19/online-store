import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MyContext from "../../components/Context/ProductContex";
import Loading from "../../components/Loding";
import Nav from "../../components/Nav";
import Products from "../../service/Products";
import { IProduct } from "../../service/Products/products.structure";
import { IReview } from "./product.structure";

export default function Product() {
  const { id } = useParams();
  const [info, setInfo] = useState({} as IProduct);
  const [loading, setLoading] = useState(true as boolean);
  const [review, setReview] = useState({
    email: "",
    rate: "1",
    text: "",
    id
  } as IReview);
  const { myReviews, setMyReviews } = useContext(MyContext)
  
  const getProduct = async () => {
    const data = await Products.getById(id as string);

    if (data) {
      setInfo(data)
      setLoading(false)
    }
  }

  const setDisabled = () => {
    const { email, text } = review
    const regex = /^([-_\D\d.+_-])+@([a-zA-Z0–9])+((\.+[a-zA-Z0–9]{2,3}){1,2})$/;
    return !regex.test(email) || text.length <= 3
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setReview({...review, [name]: value})
  }

  const givingReview = () => {
    localStorage.setItem("review", JSON.stringify([...myReviews, review]));
    setMyReviews([...myReviews, review]);
    setReview({
      email: "",
      rate: "1",
      text: "",
      id: id as string
    })
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div>
      <Nav />
      <div className=" h-scree w-screen flex justify-center items-center mt-[110px]">
        {loading ? <Loading /> : (
          <div className="w-screen flex flex-col items-center">
            <div className="h-[800px] w-[600px] flex flex-col items-center justify-evenly bg-new-black border-beige border">
              <h1 className=" text-center">{info.title}</h1>
              <img className=" w-[200px] rounded-2xl" src={info.thumbnail} alt={info.id} />
              { info.shipping.free_shipping && <p>Frete Grátis!</p> }
              <button type="button" className=" hover:-translate-x-1 hover:-translate-y-1 hover:border hover:border-beige w-[500px]">Adicionar ao Carrinho</button>
              <form className=" flex flex-col w-full p-5 gap-2 items-center">
                <h2 className=" text-2xl">Feedback do Produto</h2>
                <label className=" w-full">
                  Email:
                  <input
                    type="text"
                    className=" w-full p-2 text-new-black rounded-full"
                    value={review.email}
                    name="email"
                    onChange={handleChange}
                  />
                </label>
                <label className="flex gap-2 w-full">
                  Nota do Produto:
                  <select name="rate" className="text-new-black w-[50px]" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
                <textarea
                  maxLength={200}
                  className=" w-full p-2 text-new-black rounded-2xl"
                  value={review.text}
                  name="text"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className=" hover:-translate-x-1 hover:-translate-y-1 hover:border hover:border-beige w-[500px] disabled:opacity-50"
                  disabled={setDisabled()}
                  onClick={() => givingReview()}
                >
                  Enviar
                </button>
              </form>
            </div>
            { myReviews.length !== 0 && (
              <div className=" bg-new-black border border-beige mt-10 flex flex-col items-center w-[90%] mb-10">
                <h1 className=" w-full text-center py-2">Reviews</h1>
                {myReviews.filter((e) => e.id === id).map((e, i) => {
                  return (
                    <div key={e.email + i} className="flex flex-col items-center w-full gap-2">
                      <span className=" w-full h-[2px] bg-beige" />
                      <div className="flex w-full gap-2 pb-2">
                        <p className="min-w-[400px] border-r border-beige break-words pl-2">{e.email}</p>
                        <p className="min-w-[50px] border-r border-beige">{e.rate}</p>
                        <p className=" break-all pr-2">{e.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) }
          </div>
          
        )}
      </div>
    </div>
  )
}