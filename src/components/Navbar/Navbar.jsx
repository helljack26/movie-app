import QueryInput from '../QueryInput';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { getFilmListFromApi } from '../../store/filmApi/types';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ({ active }) => {
    const filmTitle = useSelector(state => state.filmApi.filmPageTitle)
    const activePage = filmTitle.includes('Search results for') || filmTitle.includes('Nothing was found for') ? 'Finding films' : active.active
    const dispatch = useDispatch()
    switch (activePage) {
        case 'popular':
            return (<>
                <div id='navbar' className={style.navbar}>
                    <Link id='popular' to="" className={`${style.navbarLink} ${style.active}`}>Popular</Link>
                    <Link id='watch' to="/watch-list" className={style.navbarLink}>Watch list</Link>
                </div>
                <QueryInput />
            </>)
        case 'watch':
            return (
                <>
                    <div id='navbar' className={style.navbar}>
                        <Link id='popular' to="/" className={style.navbarLink} onClick={() => dispatch(getFilmListFromApi(true))}>Popular</Link>
                        <Link id='watch' to="/watch-list" className={`${style.navbarLink} ${style.active}`}>Watch list</Link>
                    </div>
                    <div className={style.emptyInput}>
                    </div>
                </>
            )
        case 'Finding films':
            return (
                <>
                    <div id='navbar' className={style.navbar}>
                        <Link id='popular' to="/" className={style.navbarLink}
                            onClick={() => dispatch(getFilmListFromApi(true))}>Popular</Link>
                        <Link id='watch' to="/watch-list" className={style.navbarLink} >Watch list</Link>
                    </div>
                    <QueryInput />
                </>
            )
        default:
            return <>
                <div id='navbar' className={style.navbar}>
                    <Link id='popular' to="/" className={style.navbarLink}
                        onClick={() => dispatch(getFilmListFromApi(true))}>Popular</Link>
                    <Link id='watch' to="/watch-list" className={style.navbarLink}>Watch list</Link>
                </div>
                <div className={style.emptyInput}>
                </div>
            </>
    }
}


export default Navbar