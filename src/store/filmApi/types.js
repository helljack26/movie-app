import FilmNotFound from '../../components/FilmNotFound';
export const SET_FILM_LIST = 'SET_FILM_LIST';
export const UPDATE_SEARCH_FILM = 'UPDATE_SEARCH_FILM';

export const setPopularFilmList = ( payload ) =>
{
    return { type: SET_FILM_LIST, payload }
}
export const updateSearchFilm = ( payload ) =>
{
    return { type: UPDATE_SEARCH_FILM, payload }
}
// Initial render popular films
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

// Search by input value
export const getSearchList = () => ( dispatch, getState ) =>
{
    const state = getState();
    const searchFilm = state.filmApi.searchFilm;
    try
    {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=4d0c68776909a3f926088d7ddf14c097&query=${searchFilm}`,
        ).then( ( response ) => response.json() )
            .then( ( data ) =>
            {
                console.log( data );
                return !data.errors ? dispatch( setPopularFilmList( data.results ) ) : data
            } )
    } catch ( error )
    {
        console.log( error );
        console.error( 'Ошибка:', error );
    }
}