import { useState } from 'react'
import { useDispatch } from 'react-redux';
import style from './AddToWatchListButton.module.css'
import { toWatchList } from '../../store/filmApi/actions';

const buttonTypes = {
    inWatch: {
        url: './img/check-circle.svg',
        class: 'inWatch',
        tooltip: 'Remove from Watch list'
    },
    notInWatch: {
        url: './img/plus.svg',
        class: 'notInWatch',
        tooltip: 'Add to Watch list'
    }
}

const AddToWatchListButton = ({ name, image, genre, id, buttonType }) => {
    const dispatch = useDispatch();
    const [type, setType] = useState();
    const [tooltipText, setTooltipText] = useState(buttonTypes.notInWatch.tooltip);
    const isStateType = type === undefined ? buttonType : type;

    return isStateType ? <button type='button' className={style.addIconBtn}>
        <img src={buttonTypes.inWatch.url} alt={buttonTypes.notInWatch.tooltip}
            className={style.inWatch}
            onClick={() => {
                dispatch(toWatchList(undefined, undefined, undefined, id))
                setType(false)
                setTooltipText(buttonTypes.notInWatch.tooltip)
            }} />
        <div className={`${style.tooltip} ${style.tooltipLeft}`}>
            <p>{buttonType === true ? buttonTypes.inWatch.tooltip : tooltipText}</p>
        </div>
    </button>
        : <button type='button' className={style.addIconBtn}>
            <img src={buttonTypes.notInWatch.url} alt="Add to watch list"
                className={`${style.addIcon} ${style.notInWatch}`}
                onClick={() => {
                    dispatch(toWatchList(name, image, genre, id))
                    setType(true)
                    setTooltipText(buttonTypes.inWatch.tooltip)
                }} />
            <div className={style.tooltip}>
                <p>{tooltipText}</p>
            </div>
        </button>
}

export default AddToWatchListButton;