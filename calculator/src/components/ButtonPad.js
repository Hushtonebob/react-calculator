import ACEqual from "./Equal";
import OtherButtons from "./OtherButtons";
import NumberButtons from "./numberButton";

export default function ButtonPad({setDisplay, display}){
    
    const numbers = [1,2,3,4,5,6,7,8,9,0,"."];
    const mathFunctions = ["+", "-","*","/","%"];

    const buttons = numbers.map((num)=>{
        return(
            <NumberButtons
            key={num} 
            num={num} 
            setDisplay={setDisplay}
            display={display}
            />
        )
    })

    const moreButtons = mathFunctions.map((other)=>{
        return(
        <OtherButtons
        other={other} />
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
                <ACEqual />
            </div>
        </div>
    )
}