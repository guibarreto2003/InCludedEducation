import { useState } from 'react'
import '../App.css'
import MaterialCard from '../components/MaterialCard'
import translations from '../data/translations'
import materials from '../data/materials'
import LanguageSelector from '../components/LanguageSelector'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import filterMaterials from '../utils/filterMaterials'



function Home({language, setLanguage}) {
  
  const text = translations[language]
  const [showMaterials, setShowMaterials] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('All')
  const filteredMaterials = filterMaterials(
    materials,
    searchTerm,
    selectedFilter,
    text
  )
  
  
  
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

      {/*Search Bar */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {/*Search Bar Ends*/}
      
      {/*Filter Bar*/}
      <FilterBar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {/*Filter Bar Ends*/}
      
      
      <button onClick={() => setShowMaterials(!showMaterials)}>
        {text.button}
      </button>
    
    
      <div className={`materials ${showMaterials ? 'show' : ''}`}>
        {filteredMaterials.map(material => (
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