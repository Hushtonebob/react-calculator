
import { useState } from "react";

export default function ButtonPad({setDisplay, display}){
    
    const [clear, setClear] = useState("AC");


    const changeDisplay=(e)=>{
        console.log(e.target.value);
        if(e.target.value===undefined){}
        else{
            if(e.target.value==="."){
                if(display==="React Calculator"){
                    setDisplay("0"+e.target.value);
                }
                else if(display.includes(".")){
                    console.log("Path works")
                }
                else{
                    setDisplay(display+e.target.value);
                }
 
            }
        else if(display==="React Calculator"){
            setDisplay(e.target.value);
        }
        else{
            setDisplay(display + e.target.value);
            console.log(display)
        }
    };
}

    return(
        <div>
            <div className="buttonPad" onClick={changeDisplay}>
                <button id="numberButton" value={1}>1</button>
                <button id="numberButton" value={2}>2</button>
                <button id="numberButton" value={3}>3</button>
                <button id="numberButton" value={4}>4</button>
                <button id="numberButton" value={5}>5</button>
                <button id="numberButton" value={6}>6</button>
                <button id="numberButton" value={7}>7</button>
                <button id="numberButton" value={8}>8</button>
                <button id="numberButton" value={9}>9</button>
                <button id="numberButton" value={0}>0</button>
                <button id="numberButton" value={"."}>.</button>
            </div>
            <div className="otherButtonPad" onClick={(e)=>console.log(e.target.value)}>
                <button id="numberButton" value="+">+</button>
                <button id="numberButton" value="-">-</button>
                <button id="numberButton" value={"X"}>X</button>
                <button id="numberButton" value={"÷"}>÷</button>
                <button id="numberButton" value={"%"}>%</button>
            </div>
            <button id="equal">=</button>
            <button id="AC">{clear}</button>
        </div>
    )
}