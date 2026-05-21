import { useState } from 'react'

import MaterialCard from '../components/MaterialsInfo/MaterialCard'
import materials from '../data/materials'

import { useLanguage } from '../context/LanguageContext'

import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import filterMaterials from '../utils/filterMaterials'

import '../App.css'

function Home() {
  
  const { text } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const filteredMaterials = filterMaterials(
    materials,
    searchTerm,
    selectedFilter,
    text
  )
  
  
  
  return (
    <div className="container">
      
      <div className="home-content">
      {/*The Interface*/}
      <h1>
        {text.title}
      </h1>
      
      <p className="description">
        {text.description}
      </p>

      {/*Search Bar */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        text={text}
      />
      {/*Search Bar Ends*/}
      
      {/*Filter Bar*/}
      <FilterBar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        text={text}
      />
      {/*Filter Bar Ends*/}
      
      </div>
      
    
    
      <div className='materials'>
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
