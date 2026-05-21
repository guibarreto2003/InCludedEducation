import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import MaterialDetails from './pages/MaterialDetails'
import Library from './pages/Library'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/material/:id" element={<MaterialDetails/> } />
        <Route path="/library" element={<Library />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App