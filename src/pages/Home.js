import BookList from '../components/BookList'

import { useFetch } from '../hooks/useFetch'

export default function Home() {
  const {data:books, isPending, error} = useFetch('http://localhost:3000/books')

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p className='text-lg flex justify-center'>Loading...</p>}
      {books && <BookList books={books}/>}
    </div>
  )
}
