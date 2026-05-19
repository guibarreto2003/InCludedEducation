import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MaterialDetails from './pages/MaterialDetails'
import { useState } from 'react'


function App() {
  
  const [language, setLanguage] = useState('en')
  
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home  
              language={language}
              setLanguage={setLanguage}
            />
          }
        />
        <Route 
          path="/material/:id" 
          element={
            <MaterialDetails 
              language={language}
              setLanguage={setLanguage}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App