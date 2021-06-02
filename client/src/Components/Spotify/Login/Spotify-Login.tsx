import '../Styles/SpotifyLogin.css'
import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=071d2d218882479e965a9c3727fcf74f&response_type=code&redirect_uri=http://localhost:3000/spotifycallback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const SpotifyLogin: React.FC = () => {
    return (
        <div className="sptifyL">
            <a href={AUTH_URL}>Login With Spotify</a>
        </div>
    )
}

export default SpotifyLogin;
