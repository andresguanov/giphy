import { getTrendingTerms } from "@/services/getTrendingTermsService"
import { useEffect, useState } from "react"
import { Link } from "wouter"
import './Categorys.css'

export const Categorys = () => {

    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTerms().then(setTrends)
    }, [trends])

    return <div className="Categorys">
        <h2>Tendencias</h2>
        <div className=" Categorys-trend">

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

