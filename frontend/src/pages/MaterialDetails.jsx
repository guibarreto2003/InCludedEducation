import { useParams, Link } from 'react-router-dom'

import materials from '../data/materials'
import { useLanguage } from '../context/LanguageContext'
import MaterialPreview from '../components/MaterialsInfo/MaterialPreview'
import MaterialAuthor from '../components/MaterialsInfo/MaterialAuthor'
import MaterialDescription from '../components/MaterialsInfo/MaterialDescription'
import MaterialReviews from '../components/MaterialsInfo/MaterialReviews'
import PurchaseButton from '../components/PurchaseButton'

import '../App.css'
import './MaterialDetails.css'

function MaterialDetails() {
    
    const { id } = useParams()
    const material = materials.find(
        material => material.id === Number(id)
    )
    const { language, text } = useLanguage()

    if (!material) {
        return (

            <div className='not-found'>

                    <h1>
                        {text.materialNotFound}
                    </h1>

                    <Link
                        to='/'
                        className='back-home-button'
                    >
                        {text.backToHome}
                    </Link>
            </div>
        )
    }


    return (
        <div className='details-container'>
            
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
            
            
            <PurchaseButton material={material} text={text} />
        </div>
    )
}

export default MaterialDetails
