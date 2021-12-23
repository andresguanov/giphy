import { useEffect, useState } from "react"
import { Gif } from "../Gif"
import { getData } from "../services/getData"

const ListGifs = ({ keyword = "ecuador" }) => {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getData({ keyword })
            .then(res => setGifs(res))
    }, [keyword])


    return gifs.map(({ id, title, url }) => (
        <Gif
            id={id}
            title={title}
            url={url}
        />
    ))

}

export { ListGifs }