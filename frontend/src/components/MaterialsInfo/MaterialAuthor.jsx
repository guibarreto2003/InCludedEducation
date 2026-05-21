import './MaterialAuthor.css'

function MaterialAuthor ({ material, language, text }) {

    return (
        <div className="material-author">
            <h2>{text.materialAuthor}</h2>

            <div className="author-container">
                <p className="author-name">
                    {material.author.name}
                </p>
                
                <p className="author-role">
                    {material.author.role[language]}
                </p>
            </div>                       
        </div>
    )
}
export default MaterialAuthor
