import { useState } from 'react'
import { useDispatch } from 'react-redux';
import style from './AddToWatchListButton.module.css'
import './AddToWatchListButton.module.css'
import { addingToWatchList } from '../../../store/filmApi/types';

const AddToWatchListButton = ({ name, image, genre, id }) => {
    const dispatch = useDispatch();
    const [type, setType] = useState();

    const tooltip = (target) => {
        const tooltip = document.createElement('p')
        tooltip.innerText = 'Add To watch list';
        tooltip.classList.add('tooltip')
        if (target.childNodes.length > 1) {

            target.childNodes[1].remove()
        } else {
            // console.log(target.childNodes[0]);
            return target.prepend(tooltip)

        }
    }
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
                <button type='button' className={style.addIconBtn}
                    onClick={() => (setType('notInWatch'))}>
                    <img src={buttonArr.inWatch.url}
                        onMouseEnter={(event) => {
                            return console.log(event.target);
                        }}
                        alt="add to watch list" className={style.addIcon} />
                </button>
            </>)

        default:
            return <> <button type='button' className={style.addIconBtn}
                onClick={() => {
                    dispatch(addingToWatchList(name, image, genre, id))
                    setType('inWatch')
                }}


            >
                <img src={buttonArr.notInWatch.url} alt="add to watch list"
                    onMouseEnter={(event) => tooltip(event.target)}
                    // onMouseLeave={(event) => tooltip(event.target.parentElement)}
                    className={style.addIcon} />
            </button>
            </>
    }
}

export default AddToWatchListButton;