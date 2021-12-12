import style from './Header.module.css';
import QueryInput from '../QueryInput';
import { Link } from 'react-router-dom';

const Header = () =>
{
    return (
        <>
            <header className={style.header}>
                <h1 className={style.logo}>Movie api</h1>
                <div id='navbar' className={style.navbar}>
                    <Link to="/" className={style.popular}>Popular</Link>
                    <Link to="/watch-list" className={style.watch}>Watch list</Link>
                </div>
                {/* <QueryInput onChange={( value ) => setGender( value )} /> */}
                <QueryInput />
            </header>
        </>
    )
}

export default Header;