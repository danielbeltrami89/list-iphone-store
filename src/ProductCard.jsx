
function ProductCard(props) {
    return(
        <div className="productCard">
            <img className="card-image" src={props.image}></img>
            <h2>{props.name}</h2>
            <div>
                <h4 className="texto-h4">{props.capacity}</h4>
                <h4 className="texto-h4">{props.color}</h4>
            </div>
            <h3>{props.price}</h3>
            <p>{props.status}</p>
        </div>
    );
    
}

export default ProductCard