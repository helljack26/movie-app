import { Link } from 'react-router-dom';
import style from './FilmListCard.module.css';
import { translateGenre } from '../Helpers/translateGenre.js';

const FilmListCard = ( { name, image, genre, id } ) =>
{
    // Translate api code genres to russian definition 
    const genreArr = translateGenre( genre );
    // If havent poster return nothing
    return image !== null ? (
        <>
            <div className={style.cardBlock}>
                <Link to={`/${id}`} className={style.FilmListCard}>
                    {/* Poster */}
                    <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={`Постер к фильму ${name}`} />
                    {/* Description block */}
                    <div className={style.filmDescription}>
                        {/* Film name */}
                        <p className={style.filmName}>{name}</p>
                        {/* Genres list */}
                        <div className={style.genre} ><p>Genre: {genreArr}</p></div>
                    </div>
                </Link>
                <button type='button'><img src="./img/plus.svg" alt="add to watch list" className={style.addIcon} /></button>
            </div>
        </>
    ) : null
};

export default FilmListCard;
