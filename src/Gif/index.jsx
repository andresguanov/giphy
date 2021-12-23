const Gif = ({ id, title, url }) => {
    return (
        <div className="Gif">
            <div>
                <h4>{title}</h4>
                <small>{id}</small>

            </div>
            <img src={url} alt={title} loading="lazy" />
        </div>
    )
}

export { Gif }

