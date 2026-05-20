function MaterialPreview ({ material }) {

    return (
        <div className="material-preview">
            <h1>{material.title}</h1>

            {material.image ? (
                <img
                    src={material.image}
                    alt={material.title}
                />
            ) : (
                <p>Image unavailable</p>
            )}
        </div>
    )










}
export default MaterialPreview