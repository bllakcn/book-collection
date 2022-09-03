import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Book from './pages/book/Book'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
