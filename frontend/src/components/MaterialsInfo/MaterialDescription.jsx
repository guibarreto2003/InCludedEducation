import './MaterialDescription.css'

function MaterialDescription({ material, language, text }) {

    return (
        <div className="material-description">
            <h2>{text.materialDescription}</h2>
            
            <div className="description-container">
                <p className="description">
                    {material.description[language]}
                </p>
            </div>
        </div>
    )
}
export default MaterialDescription
