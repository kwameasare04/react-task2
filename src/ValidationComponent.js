import react from "react";

const ValidationComponet = (props) =>{
return (
    <div>
     
        <p>{props.check}</p>
        <p>The length of your text is {props.charLength}</p>


    </div>

    )}

export default ValidationComponet;


////2) Create a new component (=> ValidationComponent) which recieves the the length as a prop
////3) Inside the ValidationComponet, either output "Text too Short" or "Text too long" depending on the text length (e.g. take 5 as min length)