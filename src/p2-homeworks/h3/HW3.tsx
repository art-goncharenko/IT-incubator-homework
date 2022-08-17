import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.css'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}


// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        const newUser = {_id: v1(), name}
        const newUsers = [newUser, ...users]
        setUsers(newUsers)
    }

    return (
        <div className={s.HW3}>
            <hr/>
           <div className={s.homeworkTitle}>homeworks 3</div>
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3