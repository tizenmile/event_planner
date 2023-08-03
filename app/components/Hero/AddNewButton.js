'use client'
import style from './hero.module.css'
import Image from 'next/image'
import plus from '../../../public/plus.svg'


const AddNewButton = ({toggle}) => {
    return (
        <div>
            <button onClick={() => toggle()} className={style.addButton}><Image src={plus} alt="add new"/></button>
        </div>
    )
}

export default AddNewButton