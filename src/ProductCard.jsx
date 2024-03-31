
function ProductCard(props) {
    return(
        <div className="productCard">
            <img className="card-image" src={props.image}></img>
            <h2>{props.name}</h2>
            <h2 className="texto-h2">{props.capacity}</h2>
            <h3>{props.price}</h3>
            <p>{props.status}</p>
        </div>
    );
    
}

export default ProductCard