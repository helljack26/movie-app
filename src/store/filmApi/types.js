// import FilmNotFound from '../../components/FilmNotFound';
export const SET_FILM_LIST = 'SET_FILM_LIST';
export const UPDATE_SEARCH_FILM = 'UPDATE_SEARCH_FILM';
export const SET_LOADING = ' SET_LOADING';

export const setPopularFilmList = ( payload ) =>
{
    return { type: SET_FILM_LIST, payload }
}
export const updateSearchFilm = ( payload ) =>
{
    return { type: UPDATE_SEARCH_FILM, payload }
}
export const setLoading = ( payload ) =>
{
    return { type: SET_LOADING, payload }
}

export const getFilmListFromApi = ( reload = false ) => async ( dispatch, getState ) =>
{
    console.log( reload );
    const state = getState();
    const searchFilm = state.filmApi.searchFilm;
    if ( searchFilm !== '' )
    {
        dispatch( setLoading( true ) )
    }
    if ( reload === true )
    {
        dispatch( setLoading( true ) )
    }

    const urlArray = {
        popular: 'https://api.themoviedb.org/3/trending/movie/day?api_key=4d0c68776909a3f926088d7ddf14c097',
        search: `https://api.themoviedb.org/3/search/movie?api_key=4d0c68776909a3f926088d7ddf14c097&query=${searchFilm}`
    }
    let url = !searchFilm ? urlArray.popular : urlArray.search;

    await fetch( `${url}` )
        .then( ( response ) => response.json() )
        .then( ( data ) =>
        {
            console.log( data.results );
            return !data.errors ? dispatch( setPopularFilmList( data.results ) ) : data
        } )
    dispatch( updateSearchFilm( '' ) )
    setTimeout( () => dispatch( setLoading( false ) ), 800 )
}

