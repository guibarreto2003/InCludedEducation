import { useState } from 'react'
import '../App.css'
import MaterialCard from '../components/MaterialCard'
import translations from '../data/translations'
import materials from '../data/materials'



function Home() {
  const [language, setLanguage] = useState('en')
  const text = translations[language]
  
  const [showMaterials, setShowMaterials] = useState(false)
  const [showLanguage, setShowLanguage] = useState(false)



  return (
    
    
    <div className="container">
      {/* Button system to switch between languages */}
      <div className='language-selector'>
        <button onClick={() => setShowLanguage(!showLanguage)}>
          {text.languageLabel}
        </button>

      
      <div className={`language-options ${showLanguage ? 'show' : ''}`}>
        <button 
          onClick={() => {
            setLanguage('en')
            setShowLanguage(false)
        }}
          className= {language === 'en' ? 'active-language' : ''}
        >
          {text.english}
        </button>
        
        <button 
          onClick={() => {
            setLanguage('pt'),
            setShowLanguage(false)}  
        }
          className= {language === 'pt' ? 'active-language' : ''}
        >
          {text.portuguese}
        </button>
      </div>
    
    
    
    {/*The Interface*/}
    </div> 
      
      <h1>{text.title}</h1>
      
      <p className="description">
        {text.description}
      </p>

      <button onClick={() => setShowMaterials(!showMaterials)}>
        {text.button}
      </button>
    
    
      <div className={`materials ${showMaterials ? 'show' : ''}`}>
        {materials.map(material => (
          <MaterialCard
            key={material.id}
            id={material.id}
            grade={text[material.gradeKey]}
            subject={text[material.subjectKey]}
            image={material.image}
          />
        ))}
      </div>
    
    
    </div>
  )
}

export default Home