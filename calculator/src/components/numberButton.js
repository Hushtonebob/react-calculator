export default function NumberButton({
    num, setDisplay, display
}){

const change = (e)=>{
    console.log(e.target.value);
    if(display==="React Calculator"){
        let blam = e.target.value;
        let newBlam = blam.toString();
        setDisplay(newBlam);
    }
    else{
        let blam = e.target.value;
        let newBlam = blam.toString();
        setDisplay(display+newBlam);
    }
}

    return(
        <button className="numberButton" value={num} onClick={change}>
            {num}
        </button>
    )
}