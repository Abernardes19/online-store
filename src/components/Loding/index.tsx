import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className=" flex justify-center items-center gap-5">
      <AiOutlineLoading3Quarters size={40} className=" animate-spin" />
      <h1>Loading...</h1>
    </div>
  )
}