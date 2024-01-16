import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Mainpage from './pages/Mainpage'
import Addpage from './pages/Addpage'
import Wishlistpage from './pages/Wishlistpage'
import Basketpage from './pages/Basketpage'

function App() {

  return (
    <>
    <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/Add' element={<Addpage/>}/>
          <Route path='/Wishlist' element={<Wishlistpage/>}/>
          <Route path='/Basket' element={<Basketpage/>}/>

        </Route>
    </Routes>
    </>
  )
}

export default App
