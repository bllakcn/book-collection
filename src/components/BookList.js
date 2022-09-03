import { Link } from "react-router-dom"

export default function BookList({books}) {
  return (
    <div className="m-14 justify-start my-5 flex flex-wrap gap-5">
      {books.map(book => (
        <div key={book.id} className='lg:w-80 w-5/12 hover:drop-shadow-sm bg-slate-200 rounded py-2 px-5'>
          <Link to={`/books/${book.id}`}>
            <h2 className="text-slate-800 text-2xl font-bold">{book.title}</h2>
          </Link>
          <p className="text-slate-500 text-sm">{book.author}</p>
          <p className="py-3">
            {book.summary.substring(0,55)}... 
          </p>
          <span className="font-bold px-1 py-2 rounded text-slate-700 hover:bg-orange-100">
            <Link to={`/books/${book.id}`}> Read the summary</Link>
          </span>
        </div>
      ))}
    </div>
  )
}
