import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    inputText : [
      {lengthOfInput : 0}
    ]
  }

  countLength = (event) =>{
    let array = {...event.target.value};

    let lengthOfText = array.forEach(el => {
      let count = 0;
      count++;

      return count
    })
    let newLength = {lengthOfInput : lengthOfText}
    
    this.setState({inputText:newLength})
  }


  render(){
  return (
    <div className="App">
     <input OnChange={(event) => this.countLength}></input>
     <p>{this.state.inputText.lengthOfInput}</p>
    </div>
  );

  }
}

export default App;



/// 1) Create an input field (in app component) with a change listener which outputs the length of the entered text below it(e.g. <p> tag) 