import './Styles/Spotify.css'

interface props {
    name: string,
    popularity: number,
    image?: SpotifyApi.ImageObject[]
}

const Artist: React.FC<props> = ({ name, popularity, image }) => {
    return (
        image && image.length > 0 && <div className="spotify__artist">

            <img src={image[0].url} alt="" />
            <p>{name}</p>
        </div>

    )
}

export default Artist;