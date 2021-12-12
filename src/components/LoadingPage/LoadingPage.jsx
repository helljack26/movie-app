import style from './LoadingPage.module.css'

const LoadingPage = () =>
{
    return (
        <>
            <div className={style.spinnerBlock}>
                <div className={style.spinner}></div>
            </div>
        </>
    )
}

export default LoadingPage;