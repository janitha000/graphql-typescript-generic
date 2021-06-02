import './Styles/Spotify.css'
import React from 'react'

interface props {
    name: string,
    popularity: number,
    image?: SpotifyApi.ImageObject[]
}

const Artist: React.FC<props> = ({ name, popularity, image }) => {
    if (!image || image.length === 0) return null
    return (
        <div className="spotify__artist">

            <img src={image[0].url} alt="" />
            <p>{name}</p>
        </div>

    )
}

export default Artist;