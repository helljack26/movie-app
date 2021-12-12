import { Link } from 'react-router-dom';
import style from './FilmListCard.module.css';
import { translateGenre } from '../Helpers/translateGenre.js';

const FilmListCard = ( { name, image, genre, id } ) =>
{
    // Translate api code genres to russian definition 
    const genreArr = translateGenre( genre );
    return (
        <>
            <div className={style.cardBlock}>
                <Link to={`/${id}`} className={style.FilmListCard}>
                    {/* Poster */}
                    <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={`Постер к фильму ${name}`} />
                    {/* Description block */}
                    <div className={style.filmDescription}>
                        {/* Film name */}
                        <h3>{name}</h3>
                        {/* Genres list */}
                        <div className={style.genre} >Жанр: {genreArr}</div>
                    </div>
                </Link>
                <button type='button'><img src="./img/plus.svg" alt="add to watch list" className={style.addIcon} /></button>
            </div>
        </>
    );
};

export default FilmListCard;
