import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import ValidationComponet from './ValidationComponent';

class App extends Component {

  state = {
  
    inputText : ""
    
  }

  setLengthHandler = (event) =>{
    this.setState({inputText: event.target.value});

  }

  checkLenghtHandler = ()=>{
    if(this.state.inputText.split('').length < 5){
      return(
        <p>Text too short</p>
      )
    }

    else if(this.state.inputText.split('').length > 30){
      return(
        <p>Text too long</p>
      )
    }
  }

  getLengthHandler = () =>{
    let value = this.state.inputText;

    let valueArray = value.split('');

    return valueArray.length;
  }

  render(){

  return (
    <div className="App">
     <input type="text" 
     onChange={this.setLengthHandler}
     value={this.state.inputText}
     />
     <ValidationComponet value={this.getLengthHandler()} check={this.checkLenghtHandler()}></ValidationComponet>
     <p>The length of your text is {this.getLengthHandler()}</p>

    </div>
  );


  }
}



export default App;



/// 1) Create an input field (in app component) with a change listener which outputs the length of the entered text below it(e.g. <p> tag) 
////2) Create a new component (=> ValidationComponent) which recieves the the length as a prop
////3) Inside the ValidationComponet, either output "Text too Short" or "Text too long" depending on the text length (e.g. take 5 as min length)