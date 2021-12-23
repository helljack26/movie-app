import { useSelector } from 'react-redux';
import FilmListCard from '../FilmListCard';
import style from './FilmList.module.css';


const FilmList = ({ filmList }) => {
    const filmTitle = useSelector(state => state.filmApi.filmPageTitle)

    return (
        filmList ? <>
            <div className={style.popularHeader}>
                <h2>{filmTitle.includes('Nothing was found') ? (<span>{filmTitle}<br /><br />Previous results</span>) : filmTitle}</h2>
            </div>
            <main>
                <div className={style.filmListBlock}>
                    {filmList.map(({ name, poster_path, genre_ids, id, inWatch }) => {
                        return (
                            <FilmListCard key={id} id={id} name={name} image={poster_path} genre={genre_ids} buttonType={inWatch} />
                        );
                    })}
                </div>
            </main>
        </> : null
    )
}

export default FilmList;