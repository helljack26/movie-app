
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import style from './AddToWatchListButton.module.css'
import { toWatchList } from '../../store/filmApi/types';

const buttonTypeArr = {
    inWatch: {
        type:  'inWatch',
        url: './img/check-circle.svg',
        class: 'inWatch',
        tooltip: 'Remove from Watch list'
    },
    notInWatch: {
        type: 'notInWatch',
        url: './img/plus.svg',
        class: 'notInWatch',
        tooltip:'Add to Watch list'
    },
    detailsInWatch: {
        type:'detailsInWatch',
        text: 'Delete from watch list',
        class: 'detailsInWatch'
    },
    detailsNotInWatch: {
        type: 'detailsNotInWatch',
        text: 'Add to watch list',
        class: 'notInWatch'
    }
}

const AddToWatchListButton = ({ name, image, genre, id, buttonType }) => {
    const dispatch = useDispatch();
    const [type, setType] = useState();
    const [tooltipText, setTooltipText] = useState();
    switch (type === undefined ? buttonType : type) {
        case 'inWatch':
        case true:
            return (
                <>
                    <button type='button' className={style.addIconBtn}>
                        <img src={buttonTypeArr.inWatch.url} alt={buttonTypeArr.notInWatch.tooltip} className={style.inWatch}
                            onClick={() => {
                                dispatch(toWatchList(undefined, undefined, undefined, id))
                                setType(buttonTypeArr.notInWatch.type)
                                setTooltipText(buttonTypeArr.notInWatch.tooltip)
                            }} />
                        <div className={style.tooltip}>
                            {/* <p>Remove from Watch list</p> */}
                            <p>{tooltipText}</p>
                        </div>
                    </button>
                </>)
        case 'detailsInWatch':
            return (
                <>
                    <button type='button' className={`${style.detailsBtn} ${style.detailsInWatch}`} onClick={() => {
                        dispatch(toWatchList(undefined, undefined, undefined, id))
                        setType(buttonTypeArr.detailsNotInWatch.type)
                    }}>
                        <span> {buttonTypeArr.detailsInWatch.text}</span>
                    </button>
                </>)
        case 'detailsNotInWatch':
            return (<>
                <button type='button' className={`${style.detailsBtn} ${style.detailsNotInWatch}`} onClick={() => {
                    dispatch(toWatchList(name, image, genre, id))
                    setType(buttonTypeArr.detailsInWatch.type)
                }}>
                    {buttonTypeArr.detailsNotInWatch.text}
                </button>
            </>)
        default:
            return <>
                <button type='button' className={style.addIconBtn}>
                    <img src={buttonTypeArr.notInWatch.url} alt="add to watch list" className={`${style.addIcon} ${style.notInWatch}`} onClick={() => {
                        dispatch(toWatchList(name, image, genre, id))
                        setType('inWatch')
                        setTooltipText(buttonTypeArr.inWatch.tooltip)
                    }}
                    />
                    <div className={style.tooltip}>
                    <p>{tooltipText}</p>
                    </div>
                </button>
            </>
    }
}

export default AddToWatchListButton;