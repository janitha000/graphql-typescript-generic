import Spotify from "../Spotify";
import SpotifyLogin from "./Spotify-Login";
import React from 'react'

const code = new URLSearchParams(window.location.search).get('code')

const SpotifyLoginCallback: React.FC = () => {
    console.log(code)
    return (
        code ? <Spotify code={code} /> : <SpotifyLogin />
    )
}

export default SpotifyLoginCallback;
