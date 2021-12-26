import { useEffect, useState } from "react"
import { getData } from '../services/getData'


export const useGifs = ({ keyword } = { keyword: null }) => {


    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || "gifs"


    useEffect(() => {

        setLoading(true)

        getData({ keyword: keywordToUse })
            .then(res => {
                setGifs(res)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })

    }, [keyword])


    return { loading, gifs }
}