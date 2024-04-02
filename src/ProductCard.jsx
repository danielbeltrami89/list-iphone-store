import Circle from './Circle';

export default function ProductCard(props) {

    const colors = props.colors.map((color, index) => 
        <Circle 
            key={index} 
            color={color}
        />
    )

    return(
        <div style={style.card}>
            <div style={style.container}>
                <img style={style.image} src={props.image}/>
            </div>
            
            <h2 style={style.textH2}>{props.name}</h2>

            <div style={style.container}>
                {colors}
            </div>

            <div style={style.container}>
                <p style={style.label}>{props.capacity}</p>
                <p style={style.label}>Vitrine</p>
            </div>

            <h2 style={style.textH3}>{props.price}</h2>
            <p>{props.status}</p>
            <a href="https://api.whatsapp.com/send?phone=+5511982214215&text=Olá,%20tudo%20bem?" target="_blank">
                <button style={style.button}>Comprar</button>
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
        padding: '20px'
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
        justifyContent: 'space-between'
      },

      label: {
        color: '#362046',
        backgroundColor: 'white',
        borderRadius: '40px',
        textAlign: 'center',
        display: 'inline-block',
        padding: '4px 12px',
        marginRight: '12px',
        marginBlock: '4px',
        fontSize: '0.9rem',
    },

    button: {
        backgroundColor: '#362046',
        color: 'white',
        minWidth: '90%',
        display: 'block',
        margin: '0 auto',
        padding: '10px',
        borderRadius: '10px',
    }
      
}