
import { useState } from "react";

export default function ButtonPad({setDisplay, display}){
    
    const [clear, setClear] = useState("AC");
    const [prevNum, setPrevNum] = useState();
    const [secret, setSecret] = useState();

    const [plus, setPlus] = useState("otherButton");
    const [minus, setMinus] = useState("otherButton");
    const [multiply, setMultiply] = useState("otherButton");
    const [division, setDivision] = useState("otherButton");

    const changeDisplay=(e)=>{
        console.log(e.target.value);
        if(e.target.value==="undefined"){}
        else{
            if(display==="React Calculator"){
                if(e.target.value==="."){
                    setDisplay("0.");
                    setClear("C");
                }
                else{
                setDisplay(parseFloat(e.target.value));
                setClear("C");
            };
            }
            else if(display==="0."|| e.target.value==="."){}
            else{
                let blam = e.target.value;
                let newBlam = blam.toString();
                setDisplay(parseFloat(display.toString()+newBlam));
            }
        }};



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
            <div className="otherButtonPad" onClick={(e)=>console.log(e.target.value)}>
                <button className={plus}value="+">+</button>
                <button className={minus}value="-">-</button>
                <button className={multiply}value={"X"}>X</button>
                <button className={division}value={"÷"}>÷</button>
                <button className="otherButton"value={"%"}>%</button>
            </div>
            <button id="equal">=</button>
            <button id="AC">{clear}</button>
        </div>
    )
}