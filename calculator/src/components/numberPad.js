import NumberButtons from "./numberButton";

export default function NumberPad(){
    
    const numbers = [1,2,3,4,5,6,7,8,9,0];

    const buttons = numbers.map((num)=>{
        return(
            <NumberButtons num={num} />
        )
    })

    return(
        <div className="numberPad">
            {buttons}
        </div>
    )
}