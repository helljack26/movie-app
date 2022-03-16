import { useState } from 'react'
import { useDispatch } from 'react-redux';
import style from './AddToWatchListButton.module.css'
import { toWatchList } from '../../store/filmApi/actions';
import inWatchIcon from '../img/check-circle.svg';
import notInWatchIcon from '../img/plus.svg';

const buttonTypes = {
    inWatch: {
        class: 'inWatch',
        tooltip: 'Remove from Watch list'
    },
    notInWatch: {
        class: 'notInWatch',
        tooltip: 'Add to Watch list'
    }
}

const AddToWatchListButton = ({ name, image, genre, id, buttonType }) => {
    const dispatch = useDispatch();
    const [type, setType] = useState();
    const [tooltipText, setTooltipText] = useState(buttonTypes.notInWatch.tooltip);
    const isStateType = type === undefined ? buttonType : type;

    return isStateType ?
        <button type='button' className={style.addIconBtn}>
            <img src={inWatchIcon} alt={buttonTypes.notInWatch.tooltip}
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
        :
        <button type='button' className={style.addIconBtn}>
            <img src={notInWatchIcon} alt="Add to watch list"
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