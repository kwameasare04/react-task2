import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    inputText : ""
  }

  setLengthHandler = (event) =>{
    this.setState({inputText: event.target.value});

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
     <p>The length of your text is {this.getLengthHandler()}</p>

    </div>
  );


  }
}



export default App;



/// 1) Create an input field (in app component) with a change listener which outputs the length of the entered text below it(e.g. <p> tag) 
////2) Create a new component (=> ValidationComponent) which recieves the the length as a prop
