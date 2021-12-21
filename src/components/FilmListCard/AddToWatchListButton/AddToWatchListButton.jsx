import { useState } from 'react'
import { useDispatch } from 'react-redux';
import style from './AddToWatchListButton.module.css'
import { toWatchList } from '../../../store/filmApi/types';

const AddToWatchListButton = ({ name, image, genre, id, buttonType }) => {
    const dispatch = useDispatch();
    const [type, setType] = useState(buttonType === true ? 'inWatch' : 'notInWatch');
    const buttonArr = {
        inWatch: {
            url: './img/check-circle.svg',
            class: 'inWatch'
        },
        notInWatch: {
            url: './img/plus.svg',
            class: 'notInWatch'
        }
    }
    switch (type) {
        case 'inWatch':
            return (<>
                <button type='button' className={style.addIconBtn}>
                    <img src={buttonArr.inWatch.url} alt="add to watch list" className={style.addIcon} onClick={() => {
                        dispatch(toWatchList(undefined, undefined, undefined, id))
                        setType('notInWatch')
                    }}
                    />
                </button>
            </>)
        default:
            return <>
                <button type='button' className={style.addIconBtn}>
                    <img src={buttonArr.notInWatch.url} alt="add to watch list" className={style.addIcon} onClick={() => {
                        dispatch(toWatchList(name, image, genre, id))
                        setType('inWatch')
                    }}
                    />
                </button>
            </>
    }
}

export default AddToWatchListButton;