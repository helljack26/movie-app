// import { useDispatch } from 'react-redux';
export const SET_FILM_LIST = 'SET_FILM_LIST';
export const UPDATE_SEARCH_FILM = 'UPDATE_SEARCH_FILM';

export const setPopularFilmList = ( payload ) =>
{
    return { type: SET_FILM_LIST, payload }
}

export const getPopularFilmList = () => ( dispatch ) =>
{
    const getDataFromApi = async () =>
    {
        await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=4d0c68776909a3f926088d7ddf14c097`,
        ).then( ( response ) => response.json() )
            .then( ( data ) => dispatch( setPopularFilmList( data.results ) ) )
    }
    return getDataFromApi()
}