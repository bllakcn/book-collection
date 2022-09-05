import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'


import './App.css';

import Home from './pages/Home'
import Create from './pages/Create'
import Search from './pages/Search'
import Book from './pages/Book'

function App() {
  return (
    <div className="bg-slate-100 h-screen">
      <BrowserRouter>
        <Navbar/>      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/books/:id' element={<Book/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
