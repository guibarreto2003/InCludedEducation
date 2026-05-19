import { useState } from 'react'
import '../App.css'
import MaterialCard from '../components/MaterialCard'
import translations from '../data/translations'
import materials from '../data/materials'
import LanguageSelector from '../components/LanguageSelector'



function Home({language, setLanguage}) {
  
  const text = translations[language]
  const [showMaterials, setShowMaterials] = useState(false)
  
  return (
     <div className="container">
      
      {/*Language Selector*/}
      <LanguageSelector
        language={language}
        setLanguage={setLanguage}
      /> 
      {/*Language Selector Ends*/}
    
      {/*The Interface*/}
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
  ) // The Interface Ends 
}

export default Home