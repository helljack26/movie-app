import { useSelector } from 'react-redux';
import style from './FilmDetailsPage.module.css';

import Header from '../Header';
import LoadingPage from '../LoadingPage';

import { translateGenre } from '../Helpers/translateGenre.js';
import { FilmDetailsSubscription } from '../Helpers/filmDetailsSubscription.js';
import AddToWatchListButton from '../AddToWatchListButton';


const FilmDetailsPage = () => {
    const filmDetails = useSelector(state => state.filmApi.filmDetails)
    const loading = useSelector(state => state.filmApi.loading)
    const localStorageWatchList = window.localStorage.getItem('watchList')
    const localStorageWatchListJson = JSON.parse(localStorageWatchList);
    function checkInLocalStorage(id) {
        const filmFromLocalStorage = localStorageWatchListJson.find(film => film.id === id)
        const buttonType = Boolean(filmFromLocalStorage) === true ? 'detailsInWatch' : 'detailsNotInWatch'
        return buttonType
    }
    // For render page 
    const genreArr = filmDetails.genres !== undefined ? translateGenre(filmDetails.genres.map((item) => item.id)) : null
    // For button add to state
    const genreForState = filmDetails.genres !== undefined ? filmDetails.genres.map((item) => item.id) : null
    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (<>
                <Header />
                <div className={style.header}>
                    <h1>{filmDetails.title}</h1>
                    <h2>{filmDetails.release_date.slice(0, 4)}</h2>
                </div>
                <div className={style.main}>
                    {/* Poster */}
                    <img src={`https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`} alt={`Постер к фильму ${filmDetails.title}`} className={style.poster} />
                    {/* Film detail */}
                    <div className={style.detailBlock}>
                        <FilmDetailsSubscription property='Jenres' value={genreArr} />
                        <FilmDetailsSubscription property='Production' value={filmDetails.production_companies.map((item) => `"${item.name}" `)} />
                        <FilmDetailsSubscription property='Runtime' value={`${filmDetails.runtime} minutes`} />
                        <FilmDetailsSubscription property='Review' value={filmDetails.overview} />
                        <AddToWatchListButton name={filmDetails.title} image={filmDetails.poster_path} genre={genreForState} id={filmDetails.id} buttonType={checkInLocalStorage(filmDetails.id)} />
                    </div>
                </div>
            </>)}
        </>
    )
};

export default FilmDetailsPage;

