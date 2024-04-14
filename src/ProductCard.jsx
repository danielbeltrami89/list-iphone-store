import Circle from './Circle';
import React, { useState } from 'react';

export default function ProductCard(props) {
    const primaryPrice = props.prices[0].price;
    const [priceByCapacity, setPriceByCapacity] = useState(primaryPrice);

    const initialSelected = Array(5).fill(false); 
    initialSelected[0] = true;
    const [selected, setSelected] = useState(initialSelected);

    const colorsSplited = props.colors.split('; '); 
    const hexs = colorsSplited.map((color, index) => 
        <Circle 
            key={index} 
            color={color}
        />
    )

    const handlePress = (newValue,index) => {
        const newSelected = initialSelected.map((_, i) => i === index);
        setSelected(newSelected);
        setPriceByCapacity(newValue)
    };

    const imageName = props.image;
    const imagePath = "/images/";
    const src = imagePath + imageName;

    const productName = props.name;
    const capacity = props.prices[selected.findIndex(value => value === true)].capacity;

    const linkWhats = "https://api.whatsapp.com/send?phone=+5511982214215&text=";
    const message = "Olá, tudo bem? Gostaria de comprar o produto ";
    const whatsapp = linkWhats + message + productName + " - Lacrado - " + capacity + "GB.";

    return(
        <div style={style.card}>
            <div style={style.container}>
                <img style={style.image} src={src}/>
            </div>
            
            <h2 style={style.textH2}>{props.name} - Lacrado</h2>

            <div style={style.container}>
                {hexs}
            </div>

            <div style={style.labelContainer}>
                {props.prices.map((item,index) => (
                    <p key={index} 
                        onClick={() => handlePress(item.price,index)} 
                        style={{
                            color: '#362046',
                            backgroundColor: 'white',
                            borderRadius: '40px',
                            textAlign: 'center',
                            display: 'inline-block',
                            padding: '4px 12px',
                            marginBlock: '4px',
                            fontSize: '0.9rem',
                        
                            border: selected[index] ? '1px solid red' : '1px solid white',
                            cursor: 'pointer',
                        }
                    }>
                          {item.capacity} GB
                    </p>
                ))}
            </div>

            <h2 style={style.textH3}>R$ {priceByCapacity},00</h2>
            <p>{props.status}</p>
            <a style={style.linkButton} href={whatsapp} target="_blank">
                <button style={style.button}>COMPRAR</button>
            </a>
        </div>
    );
    
}

const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
      },

    image: {
        maxWidth: '60%',
        height: 'auto',
        marginTop: '-80px',
        filter: 'drop-shadow(5px 10px 15px rgba(0, 0, 0, 0.61))',
        display: 'inline-block',
    },

    card: {
        flex: '1 0 calc(33.333% - 20px)', // 33.333% para permitir três por linha em telas grandes
        boxSizing: 'border-box',
        margin: '10px',
        marginTop: '80px',
        border: '1px solid black',
        backgroundColor: '#D2C2DA',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px rgba(63, 63, 63, 0.1)',
        padding: '20px',
        maxWidth: '450px'
      },
      '@media screen and (max-width: 1024px)': {
        card: {
            flex: '1 0 calc(50% - 20px)' // 50% para permitir dois por linha em telas médias
        }
      },
      '@media screen and (max-width: 768px)': {
        card: {
            flex: '1 0 calc(100% - 20px)' // 100% para permitir apenas um por linha em dispositivos móveis
        }
      },

      textH2: {
        fontWeight: 'normal',
        textAlign: 'center',
        marginBlock: '8px',
      },

      textH3: {
        textAlign: 'center',
        marginBlock: '8px',
      },

      labelContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      },

    button: {
        textDecoration: 'none',
        backgroundColor: '#362046',
        color: 'white',
        minWidth: '90%',
        display: 'block',
        margin: '0 auto',
        padding: '10px',
        borderRadius: '10px',
    },

    linkButton: {
        textDecoration: 'none',
    },
}