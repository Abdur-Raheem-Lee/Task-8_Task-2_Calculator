// These are my imports to get information from the components, CSS file and node modules
import React from 'react';
import * as math from 'mathjs';
import './App.css';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { ClearButton } from './Components/ClearButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    // When the page loads the input is already set to be empty so that calculations are not wrong
    this.state = {
      input: ""
    };
  }
  // When this funciton is called it "appends" the character of the button which called it 
  equation = val => {
    this.setState({input: this.state.input + val});
  };

  // When this function is called by the "=" button this function gets the information from the input field and does the necessary maths
  answer = () => {
    this.setState({input: math.evaluate(this.state.input)})
  }

  render(){
    return (
      <div className="App">
        <div className="calc-wrapper">
          {/* Displays all the information based on the buttons the user clicked on */}
          <Input input={this.state.input}></Input>
          <div className="row">
            {/* When any of the buttons is clicked the "equation" function is called */}
            <Button click={this.equation}>7</Button>
            <Button click={this.equation}>8</Button>
            <Button click={this.equation}>9</Button>
            <Button click={this.equation}>/</Button>
          </div>
          <div className="row">
            <Button click={this.equation}>4</Button>
            <Button click={this.equation}>5</Button>
            <Button click={this.equation}>6</Button>
            <Button click={this.equation}>*</Button>
          </div>
          <div className="row">
            <Button click={this.equation}>1</Button>
            <Button click={this.equation}>2</Button>
            <Button click={this.equation}>3</Button>
            <Button click={this.equation}>+</Button>
          </div>
          <div className="row">
            <Button click={this.equation}>.</Button>
            <Button click={this.equation}>0</Button>
            {/* Calls the "answer" function when clicked */}
            <Button click={() => this.answer()}>=</Button>
            <Button click={this.equation}>-</Button>
          </div>
          <div className="row">
            {/* When this button is clicked the input field is cleared */}
            <ClearButton clear={() => this.setState({input: ""})}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;