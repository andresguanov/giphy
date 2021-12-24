import { Link } from "wouter"

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia"]

export const Home = () => {

    return (
        <>
            <h3 className="App-title">Hola</h3>
            <ul>
                {
                    POPULAR_GIFS.map(popularGif => (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`} >
                                Gifs de {popularGif}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}