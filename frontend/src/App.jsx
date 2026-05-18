import { useState } from 'react'
import './App.css'
import MaterialCard from './components/MaterialCard'
import translations from '../data/translations'


function App() {
  const [language, setLanguage] = useState('en')
  const text = translations[language]
  
  const [showMaterials, setShowMaterials] = useState(false)
  const [showLanguage, setShowLanguage] = useState(false)

  const materials = [
  {
    id: 1,
    grade: '6th Grade',
    subject: 'Reading Interpretation'
  },

  {
    id: 2,
    grade: '9th Grade',
    subject: 'Chronicle'
  },

  {
    id: 3,
    grade: 'High School',
    subject: 'Grammar'
  }
]
  
  return (
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
          />
        ))}
      </div>
    )}
    
    </div>
  )
}

export default App