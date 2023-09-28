

export default function ACEqual({setDisplay, display}){
        
    const clear = () => {
        setDisplay("React Calculator");
    }

    return(
        <div>
            <button id="eqaul">=</button>
            <button id="AC" onClick={clear}>AC</button>
        </div>
    )
}