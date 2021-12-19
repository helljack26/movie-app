import { useSelector } from 'react-redux';
import style from './FilmDetailsPage.module.css';

import Header from '../Header';
import LoadingPage from '../LoadingPage';

import { translateGenre } from '../Helpers/translateGenre.js';
import { FilmDetailsSubscription } from '../Helpers/filmDetailsSubscription.js';


const FilmDetailsPage = () => {
    const filmDetails = useSelector(state => state.filmApi.filmDetails)
    const loading = useSelector(state => state.filmApi.loading)
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
                        <FilmDetailsSubscription property='Jenres' value={translateGenre(filmDetails.genres.map((item) => item.id))} />
                        <FilmDetailsSubscription property='Production' value={filmDetails.production_companies.map((item) => `"${item.name}" `)} />
                        <FilmDetailsSubscription property='Runtime' value={`${filmDetails.runtime} minutes`} />
                        <FilmDetailsSubscription property='Review' value={filmDetails.overview} />
                    </div>
                </div>
            </>)}
        </>
    )
};

export default FilmDetailsPage;

