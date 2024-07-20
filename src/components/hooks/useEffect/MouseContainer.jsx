import React, { useState } from 'react'
import HookMouse from './HookMouse'

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)
    return (
    <div className='flex flex-col justify-between items-center'>
        
        <button className='p-3 bg-black text-rose-100 rounded-full' onClick={() => setDisplay(!display)}>Toggle display</button>
        {display && <HookMouse />}
    </div>
    )
}

export default MouseContainer