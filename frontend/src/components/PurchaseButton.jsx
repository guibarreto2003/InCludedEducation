import { useState } from "react"

function PurchaseButton() {
    
    const [showPopup, setShowPopup] = useState(false)

    function handlePurchase() {
        setShowPopup(true)

        setTimeout(() => {
            setShowPopup(false)
        }, 2500)
    }

    return (
        <div className="purchase-container">
            <button
                className="purchase-button"
                onClick={handlePurchase}
            >
                Acquire Material
            </button>

        {showPopup && (
            <div className="purchase-popup">
                Material added to library
            </div>
        )}

        </div>
    )



}

export default PurchaseButton