import { ISpotifyLogin, SpotifyLogin, SpotifyLoginInput, SpotifyLoginRefreshInput, } from "../TypeDefs/SpotifyLogin";
import SpotifyWebAPI from 'spotify-web-api-node'

export const SPOTIFY_LOGIN = {
    type: SpotifyLogin,
    args: {
        input: { type: SpotifyLoginInput }
    },
    resolve: async (_: any, args: any): Promise<ISpotifyLogin> => {
        const { code } = args.input;
        const spotifyAPI = new SpotifyWebAPI({
            redirectUri: 'http://localhost:3000/spotifycallback',
            clientId: '071d2d218882479e965a9c3727fcf74f',
            clientSecret: 'c715e12b8e90462aa14e040761f62a82',
        })

        let data = await spotifyAPI.authorizationCodeGrant(code)
        console.log(data.body)
        return data.body
    }
}

export const SPOTIFY_LOGIN_REFRESH = {
    type: SpotifyLogin,
    args: {
        input: { type: SpotifyLoginRefreshInput }
    },
    resolve: async (_: any, args: any) => {
        const { refresh_token } = args.input;
        const spotifyAPI = new SpotifyWebAPI({
            redirectUri: 'http://localhost:3000/spotifycallback',
            clientId: '071d2d218882479e965a9c3727fcf74f',
            clientSecret: 'c715e12b8e90462aa14e040761f62a82',
            refreshToken: refresh_token
        })
        let data = await spotifyAPI.refreshAccessToken()
        return data.body
    }
}