function MaterialCard(props) {

    return (
        <div className="card">
            <img 
            src={props.image} 
            alt={props.subject} 
            className="card-image"
            />
            
            <h3>{props.grade}</h3>
            <p>{props.subject}</p>
        </div>
    )
}

export default MaterialCard