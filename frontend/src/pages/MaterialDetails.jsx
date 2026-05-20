import { useParams, Link } from 'react-router-dom'

import materials from '../data/materials'
import MaterialPreview from '../components/materials/MaterialPreview'
import MaterialAuthor from '../components/materials/MaterialAuthor'
import MaterialDescription from '../components/materials/MaterialDescription'
import MaterialReviews from '../components/materials/MaterialReviews'
import PurchaseButton from '../components/PurchaseButton'

import LanguageSelector from '../components/LanguageSelector'

import '../App.css'


function MaterialDetails({language, setLanguage}) {
    
    const { id } = useParams()
    const material = materials.find(
        material => material.id === Number(id)
    )

    return (
        <div className='details-container'>
            {/*LANGUAGE SELECTOR*/}
            <LanguageSelector
                language={language}
                setLanguage={setLanguage}
            />
            {/*LANGUAGE SELECTOR ENDS*/}
            
            <MaterialPreview material={material} />

            <MaterialAuthor material={material} />

            <MaterialDescription material={material} />

            <MaterialReviews material={material} />

            <PurchaseButton />

            <Link to="/" className='back-button'>
                Back
            </Link>
            
                   
        </div>
    )
}

export default MaterialDetails

