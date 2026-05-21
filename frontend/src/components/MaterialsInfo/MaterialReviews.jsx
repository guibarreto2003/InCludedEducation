import './MaterialReview.css'

function MaterialReviews ({ material, language, text }) {

    return (
        <div className="material-reviews">
            <h2>{text.reviews}</h2>

            <div className="reviews-container">
                {material.reviews[language].map((review, index) => (
                
                <div
                    key={index}
                    className="review-card"
                >
                    <p>{review}</p>
                </div>
                
                
                ))}
            </div>
            

        </div>
    )
}
export default MaterialReviews
