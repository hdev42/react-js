import React from 'react'
import { useState } from 'react'

function HookCounterTree() {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
    <div>
        <form action="">
            <input className='border-black' type="text" value={name.firstName} onChange={ e => setName({...name, firstName: e.target.value })}/>
            <input type="text" value={name.lastName} onChange={ e => setName({...name, lastName: e.target.value })} />
            <h2>Your first name is {name.firstName}</h2>
            <h2>Your first name is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
    )
}

export default HookCounterTree