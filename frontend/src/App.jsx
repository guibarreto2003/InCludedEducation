import { useState } from 'react'
import './App.css'
import MaterialCard from './components/MaterialCard'
import translations from '../data/translations'
import materials from '../data/materials'

function App() {
  const [language, setLanguage] = useState('en')
  const text = translations[language]
  
  const [showMaterials, setShowMaterials] = useState(false)
  const [showLanguage, setShowLanguage] = useState(false)



  return (
    
    {/* Button system to switch between languages */},
    <div className="container">
      <div className='language-selector'>
        <button onClick={() => setShowLanguage(!showLanguage)}>
          {text.languageLabel}
        </button>

      {showLanguage && (
      <div className='language-options'>
        <button 
          className= {language === 'en' ? 'active-language' : ''}
          onClick={() => setLanguage('en')}
        >
          {text.english}
        </button>
        <button 
          onClick={() => setLanguage('pt')}
          className= {language === 'pt' ? 'active-language' : ''}
        >
          {text.portuguese}
        </button>
      </div>
    )}
    
    
    {/*The Interface*/},
    </div> 
      
      <h1>{text.title}</h1>
      
      <p className="description">
        {text.description}
      </p>

      <button onClick={() => setShowMaterials(!showMaterials)}>
        {text.button}
      </button>
    
    {showMaterials && (
      <div className='materials'>
        {materials.map(material => (
          <MaterialCard
            key={material.id}
            grade={material.grade}
            subject={material.subject}
            image={material.image}
          />
        ))}
      </div>
    )}
    
    </div>
  )
}

export default App