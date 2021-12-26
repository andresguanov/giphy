import { Gif } from '../Gif'
import './ListGifs.css'

const ListGifs = ({ gifs }) => {

    return <div className="ListGifs">
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>


}

export { ListGifs }