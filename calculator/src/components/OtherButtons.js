import { useState } from "react";

export default function OtherButtons({
    other,
    setPrevNum,
    display,
    setDisplay,
    setMathAction,    
}){

    const [highlight, setHighlight] = useState("otherButtons");
    
    const action = () => {
        if(display==="React Calculator"){
        }
        else{
            if(other==="+"){
                setPrevNum(display);
                setDisplay(" ");
                setMathAction(other);
                setHighlight("highlight")
            }
        }
    }
    
    return(
        <button className={highlight} value={other} onClick={action}>
            {other}
        </button>
    )
}