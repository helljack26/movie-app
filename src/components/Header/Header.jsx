import style from './Header.module.css';
import QueryInput from '../QueryInput';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmListFromApi } from '../../store/filmApi/types';
const Header = ( active ) =>
{
    const filmTitle = useSelector( state => state.filmApi.filmPageTitle )
    // Add active button to navbar and input only on popular page
    function Navbar( { active } )
    {
        const activePage = filmTitle.includes( 'Search results for' ) || filmTitle.includes( 'Nothing was found for' ) ? 'Finding films' : active.active
        const dispatch = useDispatch()
        switch ( activePage )
        {
            case 'popular':
                return <>
                    <div id='navbar' className={style.navbar}>
                        <Link id='popular' to="/" className={`${style.popular} ${style.active}`
                        }>Popular</Link>
                        <Link id='watch' to="/watch-list" className={style.watch}>Watch list</Link>
                    </div>
                    <QueryInput />
                </>
            case 'watch':
                return <>
                    <div id='navbar' className={style.navbar}>
                        <Link id='popular' to="/" className={style.popular}
                            onClick={() => dispatch( getFilmListFromApi( true ) )
                            }>Popular</Link>
                        <Link id='watch' to="/watch-list" className={`${style.watch} ${style.active}`}>Watch list</Link>
                    </div>
                    <div className={style.emptyInput}>
                    </div>
                </>
            case 'Finding films':
                return <>
                    <div id='navbar' className={style.navbar}>
                        <Link id='popular' to="/" className={style.popular}
                            onClick={() => dispatch( getFilmListFromApi( true ) )
                            }>Popular</Link>
                        <Link id='watch' to="/watch-list" className={style.watch} >Watch list</Link>
                    </div>
                    <QueryInput />
                </>
            default:
                return <>
                    <div id='navbar' className={style.navbar}>
                        <Link id='popular' to="/" className={style.popular}
                            onClick={() => dispatch( getFilmListFromApi( true ) )
                            }>Popular</Link>
                        <Link id='watch' to="/watch-list" className={style.watch}>Watch list</Link>
                    </div>
                    <div className={style.emptyInput}>
                    </div>
                </>;
        }
    }
    return (
        <>
            <header className={style.header}>
                <h1 className={style.logo}>Movie api</h1>
                <Navbar active={active} />
            </header>
        </>
    )
}

export default Header;