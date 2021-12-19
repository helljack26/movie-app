import style from '../FilmDetailsPage/FilmDetailsPage.module.css';

export function FilmDetailsSubscription({ property, value }) {
    return (
        <>
            <div className={style.detailItem}>
                <p className={style.detailProperty}>{property}: </p>
                <p>{value}</p>
            </div>
        </>
    )
}