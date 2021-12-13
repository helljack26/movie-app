import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import LoadingPage from '../LoadingPage';
import { translateGenre } from '../Helpers/translateGenre.js';
import style from './FilmDetailsPage.module.css';

const FilmDetailsSubscription = ( { property, value } ) =>
{
    return (
        <>
            <div className={style.detailItem}>
                <p className={style.detailProperty}>{property}: </p>
                <p>{value}</p>
            </div>
        </>
    )
}

const FilmDetailsPage = () =>
{
    const { id } = useParams();
    const [details, setDetails] = useState( null );

    useEffect( () =>
    {
        const getFilmDetails = async () =>
        {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=4d0c68776909a3f926088d7ddf14c097`,
            );
            const data = await response.json();
            console.log( data );
            setDetails( data );
        };
        getFilmDetails();
    }, [id] );

    return (
        <>
            {
                details ? (
                    <>
                        <Header />
                        <div className={style.header}>
                            <h1>{details.title}</h1>
                            <h2>{details.release_date.slice( 0, 4 )}</h2>
                        </div>
                        <div className={style.main}>
                            {/* Poster */}
                            <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={`Постер к фильму ${details.title}`} className={style.poster} />
                            {/* Book detail */}
                            <div className={style.detailBlock}>
                                <FilmDetailsSubscription property='Jenres' value={translateGenre( details.genres.map( ( item ) => item.id ) )} />
                                <FilmDetailsSubscription property='Production' value={details.production_companies.map( ( item ) => `"${item.name}" ` )} />
                                <FilmDetailsSubscription property='Runtime' value={`${details.runtime} minutes`} />
                                <FilmDetailsSubscription property='Review' value={details.overview} />
                            </div>
                        </div>
                    </>
                ) : (
                        <LoadingPage />
                    )}
        </>
    );

};

export default FilmDetailsPage;

