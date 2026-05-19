import { useParams, Link } from 'react-router-dom'
import materials from '../data/materials'
import translations from '../data/translations'
import '../App.css'
import LanguageSelector from '../components/LanguageSelector'

function MaterialDetails({language, setLanguage}) {
    
    const { id } = useParams()
    const material = materials.find(
        material => material.id === Number(id)
    )

    const text = translations[language]

    return (
        <div className='details-container'>
            {/*LANGUAGE SELECTOR*/}
            <LanguageSelector
                language={language}
                setLanguage={setLanguage}
            />
            {/*LANGUAGE SELECTOR ENDS*/}
            
            <Link to="/" className='back-button'>
                Back
            </Link>
            
            <h1>{text[material.gradeKey]}</h1>
            <img 
                src={material.image}
                alt={text[material.subjectKey]}
                width="300"
            />            
            <p>{text[material.subjectKey]}</p>        
        </div>
    )
}

export default MaterialDetails

