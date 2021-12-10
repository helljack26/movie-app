import style from './Header.module.css';
import QueryInput from '../QueryInput';
import { Link } from 'react-router-dom';

const Header = () =>
{
    return (
        <>
            <header className={style.header}>
                <Link to="/watch-list">Watch list</Link>
                <Link to="/"><h1>Movie api</h1></Link>
                {/* <QueryInput onChange={( value ) => setGender( value )} /> */}
                <QueryInput />
            </header>
        </>
    )
}

export default Header;