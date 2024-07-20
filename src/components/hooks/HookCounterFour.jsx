import React from 'react'
import { useState } from 'react'

const HookCounterFour = () => {

    const [items, setitems] = useState([])

    const addItem = () => {
        setitems([...items, {
            id: items.lenght,
            value: Math.floor(Math.random() * 10) + 1
        
        }])
    }
    return (
    <div>
        <button onClick={addItem}>Add a number </button>
        <ul>
            {items.map(item => (
              <li key={item.id}>{item.value}</li>  
            ))}
        </ul>
    </div>
    )
}

export default HookCounterFour