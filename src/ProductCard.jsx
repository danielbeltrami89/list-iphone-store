
function ProductCard(props) {
    return(
        <div className="card">
            <img className="card-image" src={props.image}></img>
            <h2>{props.name}</h2>
            <div>
                <h4 className="texto-h4">{props.capacity}</h4>
                <h4 className="texto-h4">{props.color}</h4>
            </div>
            <h3>{props.price}</h3>
            <p>{props.status}</p>
            <a href="https://api.whatsapp.com/send?phone=+5511982214215&text=Olá,%20tudo%20bem?" target="_blank">
                <button>Comprar</button>
            </a>
        </div>
    );
    
}

export default ProductCard