import React from 'react'
import Message from "./Message";


function HW1() {
    const messageData = {
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1024px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
        name: 'Elon Musk',
        message: 'I have an offer for you, call me when you have a time',
        time: '11:00',
    }
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
