import { useState } from "react"
import {
    addToLibrary,
    isInLibrary
} from '../utils/libraryStorage'

import './PurchaseButton.css'

function PurchaseButton({ material, text }) {
    
    const [showPopup, setShowPopup] = useState(false)

    const [added, setAdded] = useState(
    isInLibrary(material.id)
)

    function handlePurchase() {
        
        if (added) return
        addToLibrary(material)
        setAdded(true)
        setShowPopup(true)

        setTimeout(() => {
            setShowPopup(false)
        }, 2500)
    }

    return (
        
        <div className="purchase-container">
            
            {showPopup && (
            <div className="purchase-popup">
                {text.materialAddedToLibrary}
            </div>
            )}
            
            <button
                className="purchase-button"
                onClick={handlePurchase}
            >
                {added
                    ? text.addedToLibrary
                    : text.acquireMaterial
                }
            </button>

        

        </div>
    )



}

export default PurchaseButton
