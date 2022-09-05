import { useLocation } from "react-router-dom"
import { useFetch } from '../hooks/useFetch'

import BookList from '../components/BookList'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/books?q=' + query
  const {error, isPending, data:books} = useFetch(url)

  return (
    <div>
      <h2 className="text-center text-lg m-2 text-slate-500">Books including "<span className="font-bold text-slate-600">{query}</span>"</h2>
      {error && <p>{error}</p> }
      {isPending && <p className="text-center">Loading...</p> }
      {books && <BookList books={books}/> }
    </div>
  )
}
