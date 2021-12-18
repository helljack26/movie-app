import { useSelector } from 'react-redux';
import FilmListCard from '../FilmListCard';
import style from './FilmList.module.css';

const FilmList = () =>
{
    const filmList = useSelector( state => state.filmApi.filmList )

    return (
        <>
            <main>
                <div className={style.popularHeader}>
                    <h2>Popular<br />films</h2>
                </div>
                {filmList.map( ( { title, name, poster_path, genre_ids, id } ) =>
                {
                    return (
                        <FilmListCard key={id} id={id} name={title !== undefined ? title : name} image={poster_path} genre={genre_ids} />
                    );
                } )}
            </main>
        </>
    )
}

export default FilmList;