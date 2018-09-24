import React, { Component} from 'react'; 
import './styles/calculator.css'; 

export default class Calculator extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      calcValue : ''
    }
  }

  handleUserInput(e) {
    const val = e.target.value; 
    var expression = this.state.calcValue;
    if (expression === '0') {
      expression = ''; 
    }
    switch(val) {
      case 'C': 
        expression = ''; 
        break; 
      case '+/-': 
        expression =eval(expression) *-1; 
        break; 
      default: 
      expression = this.state.calcValue + val; 
    } 
    this.setState({calcValue: expression}); 
  }

  calculateValue(e) {
    if (isNaN(this.state.calcValue[this.state.calcValue.length-1])) {
      return; 
    }
    const res = eval(this.state.calcValue); 
    this.setState({calcValue: res}); 
  }

  render() {
    return (
      <div className="calc-container">
        <input id="calc-input" defaultValue={this.state.calcValue}></input>
        <div>
          <button value="C" className="calc-main" onClick={(e) => this.handleUserInput(e)}>C</button>
          <button value="+/-" className="calc-main" onClick={(e) => this.handleUserInput(e)}>±</button>
          <button value="%" className="calc-main" onClick={(e) => this.handleUserInput(e)}>%</button>
          <button value="/" className="calc-right" onClick={(e) => this.handleUserInput(e)}>/</button>
        </div>
        <div>
          <button value="7" className="calc-main" onClick={(e) => this.handleUserInput(e)}>7</button>
          <button value="8" className="calc-main" onClick={(e) => this.handleUserInput(e)}>8</button>
          <button value="9" className="calc-main" onClick={(e) => this.handleUserInput(e)}>9</button>
          <button value="*" className="calc-right" onClick={(e) => this.handleUserInput(e)}>*</button>
        </div>
        <div>
          <button value="4" className="calc-main" onClick={(e) => this.handleUserInput(e)}>4</button>
          <button value="5" className="calc-main" onClick={(e) => this.handleUserInput(e)}>5</button>
          <button value="6" className="calc-main" onClick={(e) => this.handleUserInput(e)}>6</button>
          <button value="-" className="calc-right" onClick={(e) => this.handleUserInput(e)}>-</button>
        </div>
        <div>
          <button value="1" className="calc-main" onClick={(e) => this.handleUserInput(e)}>1</button>
          <button value="2" className="calc-main" onClick={(e) => this.handleUserInput(e)}>2</button>
          <button value="3" className="calc-main" onClick={(e) => this.handleUserInput(e)}>3</button>
          <button value="+" className="calc-right" onClick={(e) => this.handleUserInput(e)}>+</button>
        </div>
        <div>
          <button value="0" className="calc-main" onClick={(e) => this.handleUserInput(e)}>0</button>
          <button value="" className="calc-main" onClick={(e) => this.handleUserInput(e)}> </button>
          <button value="." className="calc-main" onClick={(e) => this.handleUserInput(e)}>.</button>
          <button value="=" className="calc-right" onClick={(e) => this.calculateValue(e)}>=</button>
        </div>
      </div>
    ); 
  }

}