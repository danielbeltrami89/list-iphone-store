import ip15Imag from './assets/ip-15.png'

function ProductCard() {

    return(
        <div className="productCard">
            <img className="card-image" src={ip15Imag}></img>
            <h2 className="texto-h2">256GB</h2>
            <h3>R$ 2.500,00</h3>
            <p>Disponível</p>
        </div>
    );

}

export default ProductCard