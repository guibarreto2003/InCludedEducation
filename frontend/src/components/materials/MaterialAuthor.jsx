function MaterialAuthor ({ material }) {

    return (
        <div className="material-author">
            <h2>Material Author</h2>

            <div className="author-container">
                <p className="author-name">
                    {material.author.name}
                </p>
                
                <p className="author-role">
                    {material.author.role}
                </p>
            </div>                       
        </div>
    )
}
export default MaterialAuthor