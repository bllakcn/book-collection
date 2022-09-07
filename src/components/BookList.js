import { Link } from "react-router-dom"

export default function BookList({books}) {
  if(books.length === 0){
    return <div className="text-center text-lg my-5 text-slate-700">No books found</div>
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-800 h-screen transition-all">
      <div className="p-14 justify-start flex flex-wrap gap-5">
        {books.map(book => (
          <div key={book.id} className='lg:w-80 w-5/12 hover:drop-shadow-sm bg-slate-200 dark:bg-slate-600 rounded py-2 px-5'>
            <Link to={`/books/${book.id}`}>
              <h2 className="text-slate-800 dark:text-slate-200 text-2xl font-bold">{book.title}</h2>
            </Link>
            <p className="text-slate-500 dark:text-slate-300 text-sm">{book.author}</p>
            <p className="py-3 dark:text-slate-100">
              {book.summary.substring(0,55)}... 
            </p>
            <span className="font-bold px-1 py-2 rounded text-slate-700 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-orange-700">
              <Link to={`/books/${book.id}`}> Read the summary</Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
