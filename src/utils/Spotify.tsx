import React from 'react'

const token: string = ''
const client_id: string = '59fee7bd01504b5faead9f4da53bd898'
const redirect_uri: string = 'http://localhost:3000/'

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
                window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`
            }
        }
    },

    search(term: string) {
        fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`)
            .then(response => response.json())
            .then(data => {
                if (!data.tracks) {
                    return []
                }
                return data.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }))
            })
    }
}


export default Spotify