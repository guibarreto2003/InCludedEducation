import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MaterialDetails from './pages/MaterialDetails'
import { useState } from 'react'
import Library from './pages/Library'
import translations from './data/translations'

function App() {
  
  const [language, setLanguage] = useState('en')
  const text = translations[language]

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
        <Route
          path="/library"
          element={
            <Library
              language={language}
              text={text}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App