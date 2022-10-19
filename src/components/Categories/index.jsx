import { getTrendingTerms } from "@/services/getTrendingTermsService"
import { useEffect, useRef, useState } from "react"
import { Link } from "wouter"
import './Categories.css'

const Categories = () => {

    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTerms().then(setTrends)
    }, [])

    return <div className="Categories">
        <h2>Tendencias</h2>
        <div className=" Categories-trend">

            {
                trends.map(trend => (
                    <Link
                        key={trend}
                        to={`/search/${trend}`}
                    >Gif de {trend}
                    </Link>
                )
                )
            }
        </div>
    </div >
}

export const LazyTrending = () => {

    const [show, setShow] = useState(false)
    const divRef = useRef(null)


    useEffect(function () {

        const observer = new IntersectionObserver((entries, observer) => {
            console.log({ entries })
            const el = entries[0]
            if (el.isIntersecting) {

                setShow(true)
                observer.disconnect()
            }

        }, {
            rootMargin: '100px 0px'
        })


        console.log({ observer })
        observer.observe(divRef.current)

        return () => observer.disconnect()


    }, [])

    return <div ref={divRef}>
        {show && <Categories />}
    </div>
}

