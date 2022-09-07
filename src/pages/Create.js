import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"

export default function Create() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [summary, setSummary] = useState('')
  const [rating, setRating] = useState('')
  
  const {postData, data, error} = useFetch('http://localhost:3000/books', 'POST')

  const navigate = useNavigate()

  useEffect(() => {
    if(data){
      navigate('/')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({title,author,summary, rating})
    if(error){
      console.log(error)
    }
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-800 h-screen transition-all">
      <div className="text-center p-10">
        <h2 className="text-slate-800 dark:text-slate-200 text-2xl font-bold">Add a new book</h2>
        <form 
          className="flex flex-col gap-5 text-left mx-auto w-10/12" onSubmit={handleSubmit}>
          <label>
            <span className="dark:text-slate-300">Title of the book:</span>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
              className="focus:outline-none w-full my-1 p-1 rounded-md"
            />
          </label>
          <label>
            <span className="dark:text-slate-300">Author of the book:</span>
            <input
              type="text"
              onChange={(e) => setAuthor(e.target.value)} 
              value={author}
              required
              className="focus:outline-none w-full my-1 p-1 rounded-md"
            />
          </label>
          <label>
            <span className="dark:text-slate-300">Summary of the book:</span>
            <textarea
              onChange={(e) => setSummary(e.target.value)} 
              value={summary}
              required
              className="focus:outline-none w-full my-1 p-1 rounded-md"
            />
          </label>
          <label>
            <span className="dark:text-slate-300">Rating of the book:</span>
            <input
              type='number'
              min='1'
              max='5'
              onChange={(e) => setRating(e.target.value)} 
              value={rating}
              required
              className="focus:outline-none m-1 px-2 w-12 rounded-md"
            />
          </label>
          <button className="w-1/6 mx-auto bg-slate-800text-l border-none bg-slate-800 dark:bg-slate-400 hover:bg-orange-100 text-slate-200 hover:text-slate-700 py-2 px-5 border-2 rounded-xl">Submit</button>
        </form>
      </div>
    </div>
  )
}
