import { useState } from 'react'
import { useDispatch } from 'react-redux';
import style from './DetailsAddToWatchListButton.module.css'
import { toWatchList } from '../../store/filmApi/actions';

const buttonTypes = {
    detailsInWatch: {
        type: 'detailsInWatch',
        text: <span>Delete from <br /> watch list</span>
    },
    detailsNotInWatch: {
        type: 'detailsNotInWatch',
        text: <span>Add to<br /> watch list</span>
    }
}

const DetailsAddToWatchListButton = ({ name, image, genre, id, buttonType }) => {
    const dispatch = useDispatch();
    const [type, setType] = useState();
    const stateType = type === undefined ? buttonType : type;

    return stateType ?
        <button type='button' className={`${style.detailsBtn} ${style.detailsNotInWatch}`}
            onClick={() => {
                dispatch(toWatchList(name, image, genre, id))
                setType(false)
            }}>
            {buttonTypes.detailsNotInWatch.text}
        </button>
        :
        <button type='button' className={`${style.detailsBtn} ${style.detailsInWatch}`}
            onClick={() => {
                dispatch(toWatchList(undefined, undefined, undefined, id))
                setType(true)
            }}>
            {buttonTypes.detailsInWatch.text}
        </button>
}

export default DetailsAddToWatchListButton;