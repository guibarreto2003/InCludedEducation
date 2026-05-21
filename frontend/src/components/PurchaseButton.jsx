import { useState } from "react"
import './PurchaseButton.css'

function PurchaseButton({ text }) {
    
    const [showPopup, setShowPopup] = useState(false)

    function handlePurchase() {
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
                {text.acquireMaterial}
            </button>

        

        </div>
    )



}

export default PurchaseButton
