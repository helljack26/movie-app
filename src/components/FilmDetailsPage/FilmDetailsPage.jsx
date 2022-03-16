import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"
import { useEffect } from 'react';

import style from './FilmDetailsPage.module.css';
import Header from '../Header';
import LoadingPage from '../LoadingPage';
import DetailsAddToWatchListButton from '../DetailsAddToWatchListButton';
import { translateGenre } from '../Helpers/translateGenre.js';

import { setLoading, setFilmDetails } from '../../store/filmApi/actions';

const FilmDetailsSubscription = function ({ property, value }) {
    return (
        <div className={style.detailItem}>
            <p className={style.detailProperty}>{property}: </p>
            <p>{value}</p>
        </div>
    )
}
const checkInLocalStorage = (id) => {
    const localStorageWatchList = JSON.parse(window.localStorage.getItem('watchList'));
    const filmFromLocalStorage = localStorageWatchList !== null ? localStorageWatchList.find(film => film.id === id) : false
    return Boolean(filmFromLocalStorage) ? false : true
}

const FilmDetailsPage = () => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(setLoading(true))
        const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=4d0c68776909a3f926088d7ddf14c097`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                return (
                    dispatch(setFilmDetails(data)),
                    setTimeout(() => dispatch(setLoading(false)), 700)
                )
            })
    }, [dispatch, params.id]);

    const filmDetails = useSelector(state => state.filmApi.filmDetails);
    const loading = useSelector(state => state.filmApi.loading);

    // For button add to state
    const isGenre = filmDetails.genres !== undefined && filmDetails.genres !== null && filmDetails.genres !== '';
    const genreForState = isGenre ? filmDetails.genres.map((item) => item.id) : null;

    const genres = isGenre ? translateGenre(filmDetails.genres.map((item) => item.id)) : null
    console.log(filmDetails);
    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : <>
                    <Header />
                    <div className={style.filmDetailsMain}>
                        <div className={style.header}>
                            <div className={style.headerBlock}>
                                <h1 className={style.filmName}>{filmDetails.title}</h1>
                                {/* <h2>{filmDetails.release_date.slice(0, 4)}</h2> */}
                            </div>
                            <DetailsAddToWatchListButton name={filmDetails.title} image={filmDetails.poster_path}
                                genre={genreForState} id={filmDetails.id} buttonType={checkInLocalStorage(filmDetails.id)} />
                        </div>
                        <div className={style.main}>
                            {/* Poster */}
                            <img src={`https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`}
                                alt={`Постер к фильму ${filmDetails.title}`} className={style.poster} />
                            {/* Film detail */}
                            <div className={style.detailBlock}>
                                <FilmDetailsSubscription property='Jenres' value={genres} />
                                <FilmDetailsSubscription property='Production' value={filmDetails.production_companies.map((item) => `"${item.name}" `)} />
                                <FilmDetailsSubscription property='Runtime' value={`${filmDetails.runtime} minutes`} />
                                <FilmDetailsSubscription property='Review' value={filmDetails.overview} />
                            </div>
                        </div>
                    </div>

                </>}
        </>
    )
};

export default FilmDetailsPage;

