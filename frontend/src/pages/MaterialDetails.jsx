import { useParams, Link } from 'react-router-dom'

import materials from '../data/materials'
import translations from '../data/translations'
import MaterialPreview from '../components/MaterialsInfo/MaterialPreview'
import MaterialAuthor from '../components/MaterialsInfo/MaterialAuthor'
import MaterialDescription from '../components/MaterialsInfo/MaterialDescription'
import MaterialReviews from '../components/MaterialsInfo/MaterialReviews'
import PurchaseButton from '../components/PurchaseButton'

import LanguageSelector from '../components/LanguageSelector'

import '../App.css'
import './MaterialDetails.css'

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
            
            <div className="details-layout">
                <div className="left-column">
                    <MaterialPreview
                        material={material}
                        language={language}
                        text={text}
                    />
                    <MaterialAuthor
                        material={material}
                        language={language}
                        text={text}
                    />
                </div>

                <div className="center-column">
                    <MaterialDescription
                        material={material}
                        language={language}
                        text={text}
                    />
                </div>

                <div className="right-column">
                    <MaterialReviews
                        material={material}
                        language={language}
                        text={text}
                    />
                </div>

            </div>
            
            <Link to="/" className="back-button">
                {text.back}
            </Link>
            <PurchaseButton material={material} text={text} />
        </div>
    )
}

export default MaterialDetails

