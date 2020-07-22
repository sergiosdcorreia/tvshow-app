const Thumbnail = ({ imageUrl, caption }) => {
    return (
        <div className="thumbnail">
            <img src={imageUrl} className="Thumbnail__image" />
            <h4 className="Thumbnail__caption">{caption}</h4>
        </div>
    )
}

export default Thumbnail;