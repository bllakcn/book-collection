import { useFetch } from "../hooks/useFetch"
import { useParams } from "react-router-dom"

export default function Book() {

  const {id} = useParams()
  const {data:book, isPending, error} = useFetch(`http://localhost:3000/books/${id}`)

  return (
    <div className="bg-slate-100 dark:bg-slate-800 h-screen my-0 mx-auto transition-all">
      {error && <p>{error}</p>}
      {isPending && <p className="text-lg flex justify-center">Loading...</p>}
      {book && 
        <div className="p-10 text-center flex flex-col justify-center content-center">
          <h2 className="text-slate-800 dark:text-slate-200 text-2xl font-bold">{book.title}</h2>
          <p className="text-slate-500 dark:text-slate-300 text-sm">{book.author}</p>
          <div className="flex justify-center  select-none">
            {[...Array(parseInt(book.rating))].map((star,i) => (<span key={i} className="text-slate-600 dark:text-slate-400">&#9733;</span>))}
            {[...Array(5-parseInt(book.rating))].map((star,i) => (<span key={i} className="text-slate-300 dark:text-slate-200">&#9733;</span>))}
          </div>
          <p className="dark:text-slate-100 my-5 mx-auto max-w-2xl w-11/12 text-justify">{book.summary}</p>
        </div>
      }
    </div>
  )
}
