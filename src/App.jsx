import './App.css'
import Home from './pages/Home'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header/Header'
import { Routes,Route } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
 <div>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
  <Route path="/checkout" element={<Checkout/>}/>
  </Routes>
 </div>
  )
}

export default App
