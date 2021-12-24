import { useEffect, useState } from "react"
import { Gif } from "../Gif"
import { getData } from "../../services/getData"
import { Spinner } from "../Spinner"
import './ListGifs.css'

const ListGifs = ({ keyword }) => {

    const [loading, setLoading] = useState(true)

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        getData({ keyword })
            .then(res => {
                setGifs(res)
                setLoading(false)
            })

    }, [keyword])


    return (
        <div className="ListGifs">

            {loading
                ? <Spinner />
                : gifs.map(({ id, title, url }) => (
                    <Gif
                        key={id}
                        id={id}
                        title={title}
                        url={url}
                    />
                ))}
        </div>
    )

}

export { ListGifs }