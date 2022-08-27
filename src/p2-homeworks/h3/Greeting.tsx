import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input

    return (
        <div className={s.greeting}>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyDown={onEnter}
                   onBlur={setNameCallback}
                   className={inputClass}
            />
            <div className={s.error}>{error}</div>
            <button onClick={addUser}
                    className={s.button}
            >add
            </button>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
