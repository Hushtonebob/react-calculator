import NumberButtons from "./numberButton";

export default function ButtonPad({setDisplay, display}){
    
    const numbers = [1,2,3,4,5,6,7,8,9,0,".","="];

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

    return(
        <div className="buttonPad">
            {buttons}
        </div>
    )
}