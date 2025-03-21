<<<<<<< HEAD
import './css/App.css'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import {MovieProvider} from './contexts/MovieContext';
import NavBar from './components/NavBar'

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
=======
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Home/>
    </>
>>>>>>> 9a0876d1c72deb9ce13bde5b48465adfa73c8189
  )
}

export default App
