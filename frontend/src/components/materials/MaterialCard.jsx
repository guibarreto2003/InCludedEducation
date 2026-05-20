import { Link } from "react-router-dom"

function MaterialCard(props) {

    return (
        <Link to={`/material/${props.id}`} className="card-link">
            <div className="card">
                <img 
                src={props.image} 
                alt={props.subject} 
                className="card-image"
                />
            
                <h3>{props.grade}</h3>
                <p>{props.subject}</p>
            </div>
        </Link>
    )
}

export default MaterialCard