export const SET_FILM_LIST = 'SET_FILM_LIST';
export const UPDATE_SEARCH_FILM = 'UPDATE_SEARCH_FILM';
export const UPDATE_PAGE_TITLE = 'UPDATE_PAGE_TITLE';
export const SET_LOADING = ' SET_LOADING';

export const setFilmFromApi = ( payload ) =>
{
    return { type: SET_FILM_LIST, payload }
}
export const updateSearchFilm = ( payload ) =>
{
    return { type: UPDATE_SEARCH_FILM, payload }
}
export const updatePageTitle = ( payload ) =>
{
    return { type: UPDATE_PAGE_TITLE, payload }
}
export const setLoading = ( payload ) =>
{
    return { type: SET_LOADING, payload }
}

export const getFilmListFromApi = ( reload = false ) => async ( dispatch, getState ) =>
{
    const state = getState();
    const searchFilm = state.filmApi.searchFilm;
    const filmList = state.filmApi.filmList;
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
    let url
    if ( !searchFilm )
    {
        url = urlArray.popular
        dispatch( updatePageTitle( 'Popular films' ) )
    } else
    {
        url = urlArray.search
        dispatch( updatePageTitle( `Search results for "${searchFilm}"` ) )
    }
    await fetch( url )
        .then( ( response ) => response.json() )
        .then( ( data ) =>
        {
            console.log( data.results.length );
            return ( !data.errors ? dispatch( setFilmFromApi( data.results ) ) : null,
                data.results.length === 0 ?
                    ( dispatch( updatePageTitle( `Nothing was found for "${searchFilm}"` ) ), dispatch( setFilmFromApi( filmList ) ) ) : null
            )
        } )
    dispatch( updateSearchFilm( '' ) )
    setTimeout( () => dispatch( setLoading( false ) ), 800 )
}

