import { createContext, useContext } from 'react';

const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
    const value = {
        getAccessToken() {
        // ...
        },
        search(term) {
        // ...
        },
        savePlaylist(name, trackUris) {
        // ...
        },
    };
    
    return (
        <SpotifyContext.Provider value={value}>
        {children}
        </SpotifyContext.Provider>
    );
    };


export const useSpotify = () => useContext(SpotifyContext);

export const useProvideSpotify = () => {
    const getAccessToken = () => {
    // ...
    };
    const search = (term) => {
    // ...
    };
    const savePlaylist = (name, trackUris) => {
    // ...
    };
    
    return {
        getAccessToken,
        search,
        savePlaylist,
    };
    
}