import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (user: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('Name is required')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = e.currentTarget.value.trim()
        if (trimmedName) {
            setName(trimmedName)
            error && setError('')
        } else {
            name && setName('')
            setError('Name is required')
        }
    }
    const addUser = () => {
        if (name === '') {
            setError('Name is required')
        }else {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName('')
        }
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
            setName('')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer