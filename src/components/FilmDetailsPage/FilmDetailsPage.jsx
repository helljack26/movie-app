import { useSelector } from 'react-redux';
import style from './FilmDetailsPage.module.css';
import Header from '../Header';
import LoadingPage from '../LoadingPage';
import { translateGenre } from '../Helpers/translateGenre.js';
import DetailsAddToWatchListButton from '../DetailsAddToWatchListButton';

const FilmDetailsSubscription = function ({ property, value }) {
    return (
        <div className={style.detailItem}>
            <p className={style.detailProperty}>{property}: </p>
            <p>{value}</p>
        </div>
    )
}

const FilmDetailsPage = () => {
    const filmDetails = useSelector(state => state.filmApi.filmDetails)
    const loading = useSelector(state => state.filmApi.loading)
    function checkInLocalStorage(id) {
        const localStorageWatchListJson = JSON.parse(window.localStorage.getItem('watchList'));
        const filmFromLocalStorage = localStorageWatchListJson !== null ? localStorageWatchListJson.find(film => film.id === id) : false
        const buttonType = Boolean(filmFromLocalStorage) ? false : true
        console.log(buttonType);
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
                <div className={style.filmDetailsMain}>
                    <div className={style.header}>
                        <div className={style.headerBlock}>
                            <h1 className={style.filmName}>{filmDetails.title}</h1>
                            <h2>{filmDetails.release_date.slice(0, 4)}</h2>
                        </div>
                        <DetailsAddToWatchListButton name={filmDetails.title} image={filmDetails.poster_path} genre={genreForState} id={filmDetails.id} buttonType={checkInLocalStorage(filmDetails.id)} />
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
                        </div>
                    </div>
                </div>
            </>)}
        </>
    )
};

export default FilmDetailsPage;

