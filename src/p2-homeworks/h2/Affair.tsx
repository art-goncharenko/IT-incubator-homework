import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    return (
        <div>
            <div className={style.affairStyle}>
                 <div className={style.affairStyle}>{props.affair.name}</div>
                <div className={style.affairStyle1}>{props.affair.priority}</div>
            </div>
            <div className={style.affairStyle}>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>


    )
}

export default Affair