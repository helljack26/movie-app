export const SET_FILM_LIST = 'SET_FILM_LIST';
export const UPDATE_PAGE_TITLE = 'UPDATE_PAGE_TITLE';
export const UPDATE_SEARCH_FILM = 'UPDATE_SEARCH_FILM';
export const SET_FILM_DETAILS = 'SET_FILM_DETAILS';
export const SET_WATCH_LIST = 'SET_WATCH_LIST';
export const SET_LOADING = ' SET_LOADING';

export const setFilmFromApi = (payload) => {
    return { type: SET_FILM_LIST, payload }
}
export const updatePageTitle = (payload) => {
    return { type: UPDATE_PAGE_TITLE, payload }
}
export const updateSearchFilm = (payload) => {
    return { type: UPDATE_SEARCH_FILM, payload }
}
export const setFilmDetails = (payload) => {
    return { type: SET_FILM_DETAILS, payload }
}
export const setWatchList = (payload) => {
    return { type: SET_WATCH_LIST, payload }
}
export const setLoading = (payload) => {
    return { type: SET_LOADING, payload }
}

export const getFilmListFromApi = (reload = false) => async (dispatch, getState) => {
    const state = getState();
    const searchFilm = state.filmApi.searchFilm;
    const filmList = state.filmApi.filmList;
    const watchList = state.filmApi.watchList;
    // Spinner on
    if (searchFilm !== '') {
        dispatch(setLoading(true))
    }
    if (reload === true) {
        dispatch(setLoading(true))
    }
    const urlArray = {
        popular: 'https://api.themoviedb.org/3/trending/movie/day?api_key=4d0c68776909a3f926088d7ddf14c097',
        search: `https://api.themoviedb.org/3/search/movie?api_key=4d0c68776909a3f926088d7ddf14c097&query=${searchFilm}`
    }
    let url
    if (!searchFilm) {
        url = urlArray.popular
        dispatch(updatePageTitle('Popular films'))
    } else {
        url = urlArray.search
        dispatch(updatePageTitle(`Search results for "${searchFilm}"`))
    }
    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // !data.errors ? dispatch(setFilmFromApi(data.results)) : null,
            const modifiedData = !data.errors ? checkInWatchList(data.results, watchList) : null;
            return (dispatch(setFilmFromApi(modifiedData)),
                modifiedData.length === 0 ? (dispatch(updatePageTitle(`Nothing was found for "${searchFilm}"`)),
                    dispatch(setFilmFromApi(filmList)))
                    : null
            )
        })
    dispatch(updateSearchFilm(''))
    // Spinner off
    setTimeout(() => dispatch(setLoading(false)), 800)
}

export const checkInWatchList = (results, watchList) => {
    // Here must firstly get localStorage, parse it to object and set in watchlist 

    // let modifiedData = results.map((item) => {
    //     // const { title, name, poster_path, genre_ids, id } = item;
    //     // const arr = JSON.parse(watchList);
    //     // console.log(arr);
    //     // const check = arr.map((item) => {
    //     //     return console.log(item);
    //     // })
    //     // return console.log(title, name, poster_path, genre_ids, id);
    //     return
    // })

    return results
}
export const toWatchList = (title, image, genre, id) => async (dispatch, getState) => {
    const state = getState();
    const watchList = state.filmApi.watchList;

    let actionType
    if (title === undefined && image === undefined && genre === undefined) {
        actionType = 'remove'
    } else {
        actionType = 'add'
        const newInWatchItem = {
            name: title,
            poster_path: image,
            genre_ids: genre,
            id: id,
            inWatch: true
        }
        watchList.push(newInWatchItem)
    }
    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }
    function deleteUniqueFromList(arr, key) {
        return arr.filter((item) => {
            return item.id !== key;
        });
    }
    const cleanWatchList = actionType !== 'add' ? deleteUniqueFromList(watchList, id) : getUniqueListBy(watchList, 'id');
    return dispatch(setWatchList(cleanWatchList))
}

export const getFilmDetailsFromApi = (id) => async (dispatch) => {
    // Spinner
    dispatch(setLoading(true))
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4d0c68776909a3f926088d7ddf14c097`;
    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return dispatch(setFilmDetails(data))
        })
    setTimeout(() => dispatch(setLoading(false)), 800)
}

