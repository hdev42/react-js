import { useRef, useState } from 'react'


function Calculator() {
    
    const inputRef = useRef(null)
    const resultRef = useRef(null)
    const [result, setResult] = useState(0)

    const plus = (e) => {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value))
    }
    const minus = (e) => {
        e.preventDefault();
        setResult((result) => result- Number(inputRef.current.value))
    }
    const times = (e) => {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value))
    }
    const divide = (e) => {
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value))
    }

    const resetInput = (e) => {
        e.preventDefault()
        inputRef.current.value = 0
    }
    const resetResult = (e) => {
        e.preventDefault()
        setResult((preVal) => preVal * 0)
    }
  return (
    <div>

        <h1>Simplest working Calculator</h1>

        <form action="">
            <p ref={resultRef}>{result}</p>
            <input
                pattern='[0-9]'
                ref={inputRef} 
                type="number"
                placeholder='Type a number '
            />
            <br />
            <button onClick={plus}>add</button>
            <br />
            <button onClick={minus}>minus</button>
            <br />
            <button onClick={times}>times</button>
            <br />
            <button onClick={divide}>divide</button>
            <br />
            <button onClick={resetInput}>reset input</button>
            <br />
            <button onClick={resetResult}>reset result</button>
            
        </form>

    </div>
  )
}

export default Calculator