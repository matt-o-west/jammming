import React from 'react'

const token: string = ''

const Spotify = {
    getAccessToken() {
        if (token) {
            return token
        } else {
            const accessToken = window.location.href.match(/access_token=([^&]*)/)
            const expiresIn = window.location.href.match(/expires_in=([^&]*)/)
            if (accessToken && expiresIn) {
                window.setTimeout(() => accessToken = '', expiresIn * 1000)
                window.history.pushState('Access Token', null, '/')
                return accessToken
            } else {
                window.location.href = 'https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=http://localhost:3000/'
            }
        }
    }
}


export default Spotify