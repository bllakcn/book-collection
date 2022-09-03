import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-slate-300'>
      <nav className='flex w-11/12 py-3 mx-auto justify-between items-center'>
        <Link className='font-bold text-4xl text-slate-700 hover:text-slate-500' to='/'>
          <h2 className='p-1'>My Book Collection</h2>
        </Link>
        <Link className='text-l border-none bg-slate-800 hover:bg-orange-100 text-slate-200 hover:text-slate-700 p-2 mr-10 border-2 rounded-xl' to='/create'>
          <p className='px-2'>Add a book</p>
        </Link>
      </nav>
    </div>
  )
}
