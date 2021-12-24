import { Link } from 'wouter'
import './Gif.css'

const Gif = ({ id, title, url }) => {
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`}>
                <h4>{title}</h4>
                <img src={url} alt={title} loading="lazy" />

            </Link>
        </div>
    )
}

export { Gif }

