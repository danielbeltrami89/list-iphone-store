
export default function Footer() {

    return(
        <footer>
            <p style={style.footer}>&copy; {new Date().getFullYear()} Guk Store Import</p>
        </footer>
    );

}

const style = {
    footer: {
        color: 'white',
        textAlign: 'center',
    }
}