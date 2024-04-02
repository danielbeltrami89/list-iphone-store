
export default function Header() {

    return (
        <header style={headerTop}>
            <div>
                <div style={headerContainer}>
                    <div style={imageContainer}>
                        <img style={logoImg} src='/images/logo.png' />
                    </div>
                </div>
            </div>
        </header>
    );

}

const headerContainer = {
    position: "absolute",
    left: "0px",
    right: "0px",
    padding: "10px 2em",
    background: "#D2C2DA",
    boxShadow: "5px 5px 5px rgba(63, 63, 63, 0.1)",
}

const headerTop = {
    position: 'fixed',
    /* raise z-index to cover */
    zIndex: 1,

    /* 100% - .header-wrap can be a percentage - 
       also covers full width when zoomed */
    width: '100%',
}

const logoImg = {
    maxWidth: '100%',
    maxHeight: '100%',
}

const imageContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70px'
}