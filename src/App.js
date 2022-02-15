import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import ValidationComponet from './ValidationComponent';
import CharComponent from './CharComponent';


class App extends Component {

  state = {
  
    inputText : "", 
    inputArray : []
    
  }

  setLengthHandler = (event) =>{
    let charArray =  this.state.inputText.split('');
    this.setState({inputText: event.target.value});
    this.setState({inputArray: charArray});

  }

  getCharComponentsHandler = () =>{

    let array = this.state.inputText.split('');

    array.map((char, index) => {

      return <CharComponent
      index={index}
      char={char}
      ></CharComponent>
    })



  }


  deleteCharComponentHandler = (index)=>{
  this.state.splice(index,1)

  }

  setInputArray = () =>{

    let newArray = this.state.inputText.split('');
    this.setState(this.state.inputArray = newArray)

  }



  checkLenghtHandler = ()=>{
    if(this.state.inputText.split('').length < 5){
      return(
      <div>
          <p>text too short!</p>
      </div>
       
      )
    }

    else if(this.state.inputText.split('').length > 30){
      return(
        <div>
        <p>Text too long!</p>
        </div>
      )
    }
  }


  getLengthHandler = () =>{
    let value = this.state.inputText;

    let valueArray = value.split('');

    return valueArray.length;
  }

  render(){

    const style = {
      display: 'inline-block',
      padding: '16px',
      textallign: 'center',
      margin: '16px',
      border: '1px solid black'
    };

  let charCom = null;

  if(this.state.inputText.split('').length > 0){

    charCom = (
      
      <div> 
        {this.state.inputArray.map((char, index) => {
          return <CharComponent
          index={index + 1}
          // charIndex={index + 1}
          click={()=> {this.deleteCharComponentHandler(index)}}
          char={char}
          >
          </CharComponent>
        


        })
        }
        

      </div>

    )

  }
   

  return (
    <div className="App">
     <input type="text" 
     onChange={this.setLengthHandler}
     value={this.state.inputText}
     
     />
     <ValidationComponet value={this.getLengthHandler()}  
     check={this.checkLenghtHandler()}></ValidationComponet>
     <p>The length of your text is {this.getLengthHandler()}</p>
     
     {charCom}

    </div>
  );
  }
}



export default App;




/// 1) Create an input field (in app component) with a change listener which outputs the length of the entered text below it(e.g. <p> tag) 
////2) Create a new component (=> ValidationComponent) which recieves the the length as a prop
////3) Inside the ValidationComponet, either output "Text too Short" or "Text too long" depending on the text length (e.g. take 5 as min length)
////4) Create another component(=> CharComponent) and style it as an inline box (=> display:inline-block, padding: 16px, text-allign: center, margin: 16px, border: 1px solid black)
////5) Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the intial input field) as a prop.
////6) When you click a CharComponent it should be removed from the entered text.