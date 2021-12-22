import { useState } from 'react'
import { useDispatch } from 'react-redux';
import style from './AddToWatchListButton.module.css'
import { toWatchList } from '../../store/filmApi/types';

const buttonTypeArr = {
    inWatch: {
        url: './img/check-circle.svg',
        class: 'inWatch'
    },
    notInWatch: {
        url: './img/plus.svg',
        class: 'notInWatch'
    },
    detailsInWatch: {
        text: 'Delete from watch list',
        class: 'detailsInWatch'
    },
    detailsNotInWatch: {
        text: 'Add to watch list',
        class: 'notInWatch'
    }
}

const AddToWatchListButton = ({ name, image, genre, id, buttonType = undefined }) => {
    const dispatch = useDispatch();
    let [type, setType] = useState();

    // console.log(buttonType);
    // console.log(type);
    switch (type === undefined ? buttonType : type) {
        case 'inWatch':
        case true:
            return (
                <>
                    <button type='button' className={style.addIconBtn}>
                        <img src={buttonTypeArr.inWatch.url} alt="add to watch list" className={style.addIcon} onClick={() => {
                            dispatch(toWatchList(undefined, undefined, undefined, id))
                            setType('notInWatch')
                        }}
                        />
                    </button>
                </>)
        case 'notInWatch':
        case false:
            return <>
                <button type='button' className={style.addIconBtn}>
                    <img src={buttonTypeArr.notInWatch.url} alt="add to watch list" className={style.addIcon} onClick={() => {
                        dispatch(toWatchList(name, image, genre, id))
                        setType('inWatch')
                    }}
                    />
                </button>
            </>
        case 'detailsInWatch':
            return (
                <>
                    <button type='button' className={style.detailAddIconBtn} onClick={() => {
                        dispatch(toWatchList(undefined, undefined, undefined, id))
                        setType('detailsNotInWatch')
                    }}>
                        <span> {buttonTypeArr.detailsInWatch.text}</span>
                    </button>
                </>)
        case 'detailsNotInWatch':
            return (<>
                <button type='button' className={style.detailAddIconBtn} onClick={() => {
                    dispatch(toWatchList(name, image, genre, id))
                    setType('detailsInWatch')
                }}>
                    {buttonTypeArr.detailsNotInWatch.text}
                </button>
            </>)

        default:
            return <>
                <button type='button' className={style.addIconBtn}>
                    <img src={buttonTypeArr.notInWatch.url} alt="add to watch list" className={style.addIcon} onClick={() => {
                        dispatch(toWatchList(name, image, genre, id))
                        setType('inWatch')
                    }}
                    />
                </button>
            </>
    }
}

export default AddToWatchListButton;