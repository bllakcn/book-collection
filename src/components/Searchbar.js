import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Searchbar() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label 
          htmlFor="search"
          className='text-lg text-slate-500 hover:text-slate-800'>Search:</label>
        <input
          className='py-1 px-2 mx-2 rounded focus:outline-none focus:shadow-md'
          type="text"
          id='seach'
          onChange={(e) => setTerm(e.target.value)}
          required
          autoComplete='off'
        />
      </form>
    </div>
  )
}
