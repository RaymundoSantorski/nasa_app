

export const MainMenu = ({ setSource }) => {

    return (
        <div className="mainMenu">
            <h1>¿Que deseas ver?</h1>
            <ul className="mainMenuList">
                <li 
                    className="mainMenuItem"
                    onClick={() => { setSource('apod') }}
                >
                    <a>Imagen del día</a>
                </li>
                <li 
                    className="mainMenuItem"
                    onClick={() => { setSource('Imagenes policromaticas') }}
                >
                    <a>Imagenes policromaticas de la tierra</a>
                </li>
            </ul>
        </div>
    )
}
