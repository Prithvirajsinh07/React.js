import './App.css'
import Data from './componnents/Data'
import Home from './componnents/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
     <Routes>
     <Route path='/data' element={<Data/>} />
     <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
