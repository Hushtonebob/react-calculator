

export default function ACEqual({
    setDisplay,
    display, 
    AcC, 
    setClear
}){
        
    const clear = () => {
        if(display === "React Calculator"){
        }
        else{
        setClear("AC");
        setDisplay("React Calculator");
        }
    }

    return(
        <div>
            <button id="eqaul">=</button>
            <button id="AC" onClick={clear}>{AcC}</button>
        </div>
    )
}