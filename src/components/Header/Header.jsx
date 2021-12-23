import style from './Header.module.css';
import Navbar from '../Navbar';

const Header = (active) => {
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