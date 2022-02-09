import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    inputText : [
      {lengthOfInput : 0}
    ]
  }

  setLengthHandler = (event) =>{
    let targetValue = event.target.value;
    
    let targetValueArray = targetValue.split('');

    let lengthOfText = targetValueArray.length + 1;

    let newLength = [...this.state.inputText];

    newLength.splice(0,1);
    newLength[0] = lengthOfText;
    
    this.setState({inputText:newLength})
  }

  render(){

  let textLength = (
  <div>
    {this.state.inputText.map(el => {
      <p name={el.lengthOfInput}> {this.props.name}</p>
    })
    }


  </div>
  )


  return (
    <div className="App">
     <input onChange={(event) => this.setLengthHandler(event)}></input>
     {textLength}
    </div>
  );


  }
}



export default App;



/// 1) Create an input field (in app component) with a change listener which outputs the length of the entered text below it(e.g. <p> tag) 