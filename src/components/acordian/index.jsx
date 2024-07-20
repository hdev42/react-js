import { useState } from "react";
import data from "./data";
import './style.css';

function Accorian() {

    const [selected , setSelected] = useState(null)
    const [enableMultiSelection , setenableMultiSelection] = useState(false)
    const [multiple , setMultiple] = useState([])

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIOCI = cpyMultiple.indexOf(getCurrentId)

        console.log(findIOCI);
        if(findIOCI === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIOCI , 1)
        setMultiple(cpyMultiple) 
    }

    console.log(selected, multiple);
    
    return ( 
        <div className="wrapper">
            <button onClick={
                () => setenableMultiSelection(!enableMultiSelection)
            }>Enable Multiselection</button>
            <div className="accorian">
                {
                    data && data.length > 0 ? 
                    
                    data.map( dataItem => <div className="item">
                        <div onClick={enableMultiSelection 
                            ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? 
                            multiple.indexOf(dataItem.id) !== -1 && (
                            <div className="content">{dataItem.answer}</div> 
                            )
                            :
                            selected === dataItem.id && (
                            <div className="content">{dataItem.answer}</div> )

                        }
                        
                    </div>  )
                    :

                     <div>No data present </div>
                } 
            </div>
        </div>
     );
}

export default Accorian;