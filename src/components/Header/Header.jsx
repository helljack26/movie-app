import style from './Header.module.css';
import QueryInput from '../QueryInput';
import { Link } from 'react-router-dom';

const Header = ( active ) =>
{
    // Add active button to navbar
    function Navbar( { active } )
    {
        switch ( active.active )
        {
            case 'popular':
                return <>
                    <div id='navbar' className={style.navbar}>
                        <Link id='popular' to="/" className={`${style.popular} ${style.active}`}>Popular</Link>
                        <Link id='watch' to="/watch-list" className={style.watch}>Watch list</Link>
                    </div>
                    <QueryInput />
                </>
            case 'watch':
                return <>
                    <div id='navbar' className={style.navbar}>
                        <Link id='popular' to="/" className={style.popular}>Popular</Link>
                        <Link id='watch' to="/watch-list" className={`${style.watch} ${style.active}`}>Watch list</Link>
                    </div>
                    <div className={style.emptyInput}>
                    </div>
                </>
            default:
                return <>
                    <div id='navbar' className={style.navbar}>
                        <Link id='popular' to="/" className={style.popular}>Popular</Link>
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