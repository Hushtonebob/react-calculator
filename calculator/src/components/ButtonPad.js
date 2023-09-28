import ACEqual from "./ACEqual";
import OtherButtons from "./OtherButtons";
import NumberButtons from "./numberButton";
import { useState } from "react";

export default function ButtonPad({setDisplay, display}){
    
    const numbers = [1,2,3,4,5,6,7,8,9,0,"."];
    const mathFunctions = ["+", "-","*","/","%"];
    const [clear, setClear] = useState("AC");
    const [prevNum, setPrevNum] = useState("");
    const [mathAction, setMathAction] = useState("");

    const buttons = numbers.map((num)=>{
        return(
            <NumberButtons
            key={num} 
            num={num} 
            setDisplay={setDisplay}
            display={display}
            setClear={setClear}
            />
        )
    });

    const moreButtons = mathFunctions.map((other)=>{
        return(
        <OtherButtons
        other={other}
        display={display}
        setDisplay={setDisplay}
        setPrevNum={setPrevNum}
        setMathAction={setMathAction}
        />
    )});

    return(
        <div>
            <div className="buttonPad">
                {buttons}
            </div>
            <div className="otherButtonPad">
                {moreButtons}
            </div>
            <div className="ACEqual">
                <ACEqual 
                key={"3"}
                setDisplay={setDisplay}
                display={display}
                AcC={clear}
                setClear={setClear}
                />
            </div>
        </div>
    )
}