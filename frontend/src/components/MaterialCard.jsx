function MaterialCard(props) {

    return (
        <div className="card">
            <h3>{props.grade}</h3>
            <p>{props.subject}</p>
        </div>
    )
}

export default MaterialCard