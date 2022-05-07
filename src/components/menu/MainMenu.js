

export const MainMenu = ({ setSource }) => {

    return (
        <div className="mainMenu">
            <h1>¿Que deseas ver?</h1>
            <ul className="mainMenuList">
                <li 
                    className="mainMenuItem"
                    onClick={() => { setSource('apod') }}
                >
                    <p>Imagen del día</p>
                </li>
                <li 
                    className="mainMenuItem"
                    onClick={() => { setSource('Imagenes policromaticas') }}
                >
                    <p>Imagenes policromaticas de la tierra</p>
                </li>
            </ul>
        </div>
    )
}
