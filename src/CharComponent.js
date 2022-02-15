import react from "react";

const CharComponent = (props)=> {

    const style_sheet = {
        display: 'inline-block',
        padding: '16px',
        textallign: 'center',
        margin: '16px',
        border: '1px solid black'
      };
return (

<div style={style_sheet} 
onClick={props.click}
index={props.index}
charIndex={props.charIndex}
>

    <p>Character {props.index} is {props.char}</p>

</div>

)}

export default CharComponent;

////4) Create another component(=> CharComponent) and style it as an inline box (=> display:inline-block, padding: 16px, text-allign: center, margin: 16px, border: 1px solid black)