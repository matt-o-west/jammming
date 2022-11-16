import React from 'react'

let token: string = ''
const client_id: string = '59fee7bd01504b5faead9f4da53bd898'
const redirect_uri: string = 'http://localhost:5173/'

const Spotify = {
    getAccessToken() {
        let token = window.localStorage.getItem('token')

        if (token) {

            return token
        } else {
            //check for access token match
            const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
            const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
            const refreshToken = window.location.href.match(/refresh_token=([^&]*)/)

            if (accessTokenMatch && expiresInMatch) {
                let token = accessTokenMatch[1]
                const expiresIn = Number(expiresInMatch[1])
                window.setTimeout(() => token = '', expiresIn * 1000)
                window.history.pushState('Access Token', null, '/')
                window.localStorage.setItem('token', token)

                return token
            } else {
                const accessURL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`
                window.location.href = accessURL
            }
        }
    },

    async search(term: string) {
        const accessToken = this.getAccessToken()

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (!data.tracks) {
                    return []
                }
                return data.tracks.items.map(track => (
                    {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }))
            })
    },

    async savePlaylist(name: string, trackUris: string[]) {
        if (!name || !trackUris.length) {
            return
        }

        const accessToken = this.getAccessToken()
        const headers = { Authorization: `Bearer ${accessToken}` }
        let userId: string

        return fetch('https://api.spotify.com/v1/me', { headers: headers })
            .then(response => response.json())
            .then(jsonResponse => {
                userId = jsonResponse.id
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ name: name })
                })
                    .then(response => response.json())
                    .then(jsonResponse => {
                        const playlistId = jsonResponse.id
                        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                            headers: headers,
                            method: 'POST',
                            body: JSON.stringify({ uris: trackUris })
                        })
                    })
            })

    }
}


export default Spotify