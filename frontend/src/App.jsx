import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MaterialDetails from './pages/MaterialDetails'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/material/:id" element={<MaterialDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App