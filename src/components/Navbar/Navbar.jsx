import QueryInput from '../QueryInput';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { getFilmListFromApi } from '../../store/filmApi/actions';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ({ active }) => {
    const filmTitle = useSelector(state => state.filmApi.filmPageTitle)
    const activePage = filmTitle.includes('Search results for') || filmTitle.includes('Nothing was found for') ? 'Finding films' : active.active
    const dispatch = useDispatch()
    switch (activePage) {
        case 'popular':
            return (
                <div id='navbar' className={style.navbar}>
                    <div className={style.navbarBlock}>
                        <Link id='popular' to="/movie-app" className={`${style.navbarLink} ${style.active}`}>Popular</Link>
                        <Link id='watch' to="/watch-list" className={style.navbarLink}>Watch list</Link>
                    </div>
                    <QueryInput />
                </div>
            )
        case 'watch':
            return (
                <div id='navbar' className={style.navbar}>
                    <div className={style.navbarBlock}>
                        <Link id='popular' to="/movie-app" className={style.navbarLink} onClick={() => dispatch(getFilmListFromApi(true))}>Popular</Link>
                        <Link id='watch' to="/watch-list" className={`${style.navbarLink} ${style.active}`}>Watch list</Link>
                    </div>
                    <div className={style.emptyInput}>
                    </div>
                </div>
            )
        case 'Finding films':
            return (
                <div id='navbar' className={style.navbar}>
                    <div className={style.navbarBlock}>
                        <Link id='popular' to="/movie-app" className={style.navbarLink}
                            onClick={() => dispatch(getFilmListFromApi(true))}>Popular</Link>
                        <Link id='watch' to="/watch-list" className={style.navbarLink} >Watch list</Link>
                    </div>
                    <QueryInput />
                </div>
            )
        default:
            return <div id='navbar' className={style.navbar}>
                <div className={style.navbarBlock}>
                    <Link id='popular' to="/movie-app" className={style.navbarLink}
                        onClick={() => dispatch(getFilmListFromApi(true))}>Popular</Link>
                    <Link id='watch' to="/watch-list" className={style.navbarLink}>Watch list</Link>
                </div>
                <div className={style.emptyInput}>
                </div>
            </div>
    }
}

export default Navbar