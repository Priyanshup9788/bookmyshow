import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './assets/Components/Home'
import Header from './assets/Components/Header'
import MovieDetail from './assets/Components/MovieDetail'

function App() {

  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/moviedetail' element={<MovieDetail/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
