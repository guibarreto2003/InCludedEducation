function MaterialReviews ({ material }) {

    return (
        <div className="material-reviews">
            <h2>Reviews</h2>

            <div className="reviews-conteiner">
                {material.reviews.map((review, index) => (
                
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