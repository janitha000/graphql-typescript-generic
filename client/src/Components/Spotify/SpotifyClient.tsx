
import { useMemo } from 'react'
import spotifyClient from 'spotify-web-api-node'
import UseSpotifyAuth from './Login/UseSpotifyAuth'
import React from 'react'

interface props {
    code: string
}



const UseSpotifyClient = ({ code }: props) => {
    const { access_token, refersh_token, expiry_time } = UseSpotifyAuth({ code })
    const SpotifyClient = useMemo(() => {
        return new spotifyClient({
            clientId: '071d2d218882479e965a9c3727fcf74f',
            accessToken: access_token
        })
    }, [access_token])

    const serachByArtist = async (search: string) => {
        if (access_token && search !== '') {
            let { body: { artists } } = await SpotifyClient.searchArtists(search)
            artists?.items.map((item) => (
                item.name, item.popularity, item.images[0]
            ))

            return artists?.items
        }

    }


    return { SpotifyClient, access_token, serachByArtist };
}

export default UseSpotifyClient;