import { useEffect, useState } from "react";
import graphqlClient from "../../../Services/GraphQLClient";

interface props {
    code: string
}

const UseSpotifyAuth = ({ code }: props) => {
    const [access_token, setAccssToken] = useState('')
    const [refresh_token, setRefreshToken] = useState('')
    const [expiry_time, setExpiryTime] = useState(0)

    const query = `
    mutation spotifyLogin($input: SpotifyLoginInput!){
        spotifyLogin(input : $input){
          access_token,
          refresh_token,
          expires_in
        }
    }
    `

    const refresh_query = `
    mutation spotigyLoginRefresh($input: SpotifyLoginRefreshInput!){
        spotigyLoginRefresh(input : $input){
          access_token,
          expires_in
        }
    }
    `

    const getAuth = async () => {
        const input = { code }
        let { data: spotifyLogin } = await graphqlClient(query, { input })
        if (spotifyLogin.spotifyLogin) {
            const { spotifyLogin: { access_token, refresh_token, expires_in } } = spotifyLogin
            setAccssToken(access_token)
            setExpiryTime(expires_in)
            setRefreshToken(refresh_token)
            window.history.pushState({}, '', '/spotify')
        }

    }

    const refreshAuth = async () => {
        if (refresh_token) {
            const input = { refresh_token }
            let { data: spotigyLoginRefresh } = await graphqlClient(refresh_query, { input })
            if (spotigyLoginRefresh.spotigyLoginRefresh) {
                const { spotigyLoginRefresh: { access_token, expiry_time } } = spotigyLoginRefresh
                setAccssToken(access_token)
                setExpiryTime(expiry_time)
            }
        }

    }

    useEffect(() => {
        getAuth();
    }, [code])

    useEffect(() => {
        const refresh_timeout = setTimeout(() => {
            refreshAuth()
            return () => clearTimeout(refresh_timeout)
        }, (expiry_time - 60) * 1000)
    }, [expiry_time, refresh_token])

    return { access_token, refersh_token: refresh_token, expiry_time }

}

export default UseSpotifyAuth;
