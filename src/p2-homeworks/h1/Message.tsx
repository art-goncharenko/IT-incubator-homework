import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: any
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={style.item}>
                <img src={props.avatar} alt='avatar'></img>
                <div className={style.angle}></div>
                <div className={style.content}>
                    <div className={style.name}>
                        {props.name}
                    </div>
                    <div className={style.message}>
                        {props.message}
                    </div>
                    <div className={style.time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
