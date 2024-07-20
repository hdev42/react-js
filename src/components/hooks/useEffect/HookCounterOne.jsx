import React, {useState, useEffect} from 'react'


const HookCounterOneEffect = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("useEffect - updating the title ");    
        document.title = `You Clicked ${count} times `
    }, [count])
    
    return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value) }/>
        <button type="button" onClick={() => setCount(count + 1)}>Click {count} times</button> 
    </div>
    )
}

export default HookCounterOneEffect