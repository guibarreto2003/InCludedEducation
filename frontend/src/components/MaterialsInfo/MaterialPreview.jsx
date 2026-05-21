import './MaterialPreview.css'

function MaterialPreview ({ material, language, text }) {

    return (
        <div className="material-preview">
            <h1>{material.title[language]}</h1>

            {material.image ? (
                <img
                    src={material.image}
                    alt={material.title[language]}
                />
            ) : (
                <p>{text.imageUnavailable}</p>
            )}
        </div>
    )










}
export default MaterialPreview
