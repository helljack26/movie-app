import { useSelector } from 'react-redux';
import FilmListCard from '../FilmListCard';
import style from '../FilmList/FilmList.module.css'

const FilmWatchList = ({ watchList }) => {
    const filmTitle = useSelector(state => state.filmApi.filmPageTitle)
    console.log(watchList.length);
    switch (watchList.length) {
        case 0:
            return (
                <>
                    <div className={style.popularHeader}>
                        <h2>{filmTitle} is empty</h2>
                    </div>
                </>
            )
        default:
            return (<>
                <div className={style.popularHeader}>
                    <h2>{filmTitle}</h2>
                </div>
                <main>
                    <div className={style.filmListBlock}>
                        {watchList.map(({ name, poster_path, genre_ids, id, inWatch }) => {
                            return (
                                <FilmListCard key={id} id={id} name={name} image={poster_path} genre={genre_ids} buttonType={inWatch} />
                            );
                        })}
                    </div>
                </main>
            </>
            )
    }
}

export default FilmWatchList;