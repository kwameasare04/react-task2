import react from "react";

const ValidationComponet = (props) =>{
    let lengthMessage = <p>text too short</p>;

    if(props.textlength > 5){
        lengthMessage =  <p>text long enough</p>;
    }

return (
    <div>
        {/* {props.textlength < 5 ? lengthMessage : <p>Text long enough </p>} */}
        {lengthMessage}
        <p>{props.check}</p>
        <p>The length of your text is {props.charlength}</p>


    </div>

    )}

export default ValidationComponet;


////2) Create a new component (=> ValidationComponent) which recieves the the length as a prop
////3) Inside the ValidationComponet, either output "Text too Short" or "Text too long" depending on the text length (e.g. take 5 as min length)