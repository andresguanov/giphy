import { useLocation } from "wouter"
import { ListGifs } from "@/components/ListGifs"
import { Spinner } from "@/components/Spinner"
import { useGifs } from "@/hooks/useGifs"
import { LazyTrending } from "@/components/Categories"


export const Home = () => {

    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        pushLocation(`/search/${evt.currentTarget.search.value}`)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    id="search"
                    type="text"
                    placeholder="Search a gif here..."
                />
            </form>
            <h3 className="App-title">Home title</h3>
            <div className="App-content App-content__lastSearch">
                <h3 className="App-title">
                    Última búsqueda
                </h3>
                {loading
                    ? <Spinner />
                    : <ListGifs gifs={gifs} />
                }

            </div>
            <LazyTrending />
        </>
    )
}