function MaterialDescription({ material }) {

    return (
        <div className="material-description">
            <h2>Material Description</h2>
            
            <div className="description-container">
                <p className="description">
                    {material.description}
                </p>
            </div>
        </div>
    )
}
export default MaterialDescription