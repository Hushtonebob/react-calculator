
import { useState } from "react";

export default function ButtonPad({setDisplay, display}){
    
    const [clear, setClear] = useState("AC");
    const [mathWord, setMathWord] = useState();
    const [prevNum, setPrevNum] = useState();
    const [plus, setPlus] = useState("otherButton");

    const changeDisplay=(e)=>{
        console.log(e.target.value);
        if(display==="React Calculator"){
            let blam = e.target.value;
            let newBlam = blam.toString();
            setDisplay(newBlam);
            setClear("C");
        }
        else{
            let blam = e.target.value;
            let newBlam = blam.toString();
            setDisplay(display+newBlam);}}

    const clearPress=()=>{
        setDisplay("React Calculator");
        setClear("AC");
        setPlus("otherButton");
    };

    const plusButton=(e)=>{
        if(display==="React Calculator"){
        }else{
            setPlus("highlight");
            setPrevNum(display);
            setDisplay('');
            setMathWord(e.target.value);  
        }}

        const solve=()=>{
            if(mathWord==='unidentified'){
            }
            //Addition
            else if(mathWord==="+"){
                if(display===''){
                    setDisplay(prevNum);
                    setPlus('otherButton');
                }else{                
                    setDisplay(parseFloat(display)+parseFloat(prevNum));
                    setPlus("otherButton");
                }
            }
        }

    return(
        <div>
            <div className="buttonPad" onClick={changeDisplay}>
                <button className="numberButton" value={1}>1</button>
                <button className="numberButton" value={2}>2</button>
                <button className="numberButton" value={3}>3</button>
                <button className="numberButton" value={4}>4</button>
                <button className="numberButton" value={5}>5</button>
                <button className="numberButton" value={6}>6</button>
                <button className="numberButton" value={7}>7</button>
                <button className="numberButton" value={8}>8</button>
                <button className="numberButton" value={9}>9</button>
                <button className="numberButton" value={0}>0</button>
                <button className="numberButton" value={"."}>.</button>
            </div>
            <div className="otherButtonPad">
                <button className={plus} value={"+"} onClick={plusButton}>+</button>
                <button className={""}value={"-"}>-</button>
                <button className="otherButton"value={"X"}>X</button>
                <button className="otherButton"value={"÷"}>÷</button>
                <button className="otherButton"value={"%"}>%</button>
            </div>
            <button id="equal" onClick={solve}>=</button>
            <button id="AC" onClick={clearPress}>{clear}</button>
        </div>
    )
}