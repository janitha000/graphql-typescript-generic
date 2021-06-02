import { useEffect, useState } from "react";
import Artist from "./Artists";
import SpotifyLogin from "./Login/Spotify-Login";
import UseSpotifyClient from "./SpotifyClient";
import './Styles/Spotify.css'
import React from 'react'

interface props {
    code: string
}

const Spotify: React.FC<props> = ({ code }) => {
    const { serachByArtist, access_token } = UseSpotifyClient({ code })
    const [searchText, setSearchText] = useState<string>('')
    const [artists, setArtists] = useState<SpotifyApi.ArtistObjectFull[] | undefined>([])

    let cancel = false;

    useEffect(() => {
        if (cancel) return;

        async function searchByArtists() {
            let artists = await serachByArtist(searchText)
            setArtists(artists)
        }

        const getArtistsWithDelay = setTimeout(() => {
            searchByArtists()
        }, 1000)


        return () => {
            cancel = true;
            clearTimeout(getArtistsWithDelay)
        }
    }, [searchText, access_token])

    if (!access_token) return <SpotifyLogin />
    return (
        <div className="spotify">
            <input type="text" placeholder="Search by Artist" onChange={(e) => setSearchText(e.target.value)} />
            <div className="spotify__artist-container">
                {artists && artists.map(item => (
                    <Artist name={item.name} popularity={item.popularity} image={item.images} />
                ))}
            </div>

        </div>
    )
}

export default Spotify;