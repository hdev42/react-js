import { useState } from "react";

function LearnUseState() {

    const [count, setCount] = useState(0)

    const Add = () => setCount(count + 1)
    const Sub = () => setCount(count - 1)
    const Reset = () => setCount(count * 0)

    const IncrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevoisStateCount => prevoisStateCount + 1)
        }
    }

    return ( 
        <div className="p-[70px] bg-red-400 flex justify-center items-center flex-col">
            <div className="btn">
            <button onClick={Add} className="p-2 bg-neutral-900 text-white mx-4 rounded-full">Increment</button>
            <button onClick={Sub} className="p-2 bg-neutral-900 text-white mx-4 rounded-full">Decrement</button>
            <button onClick={Reset} className="p-2 bg-neutral-900 text-white mx-4 rounded-full">Reset</button>
            <button onClick={IncrementFive} className="p-2 bg-neutral-900 text-white mx-4 rounded-full">+5</button>
            </div>
            <div className="text-center ">
                <h1 className="text-[55px] my-5">{count}</h1>
            </div>
        </div>
     );
}

export default LearnUseState;