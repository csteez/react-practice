import React, { Component } from 'react';

export default class CCForm extends Component {
  constructor(props){
    super(props); 
      this.state = {
        cardNumber: '', 
        name: '', 
        ccv: '', 
        expirationMonth: '', 
        expirationYear: '', 
        formErrors: {cardNumber: '', name: '', ccv: '', expirationMonth: '', expirationYear: '' }, 
        cardNumberValid: false, 
        nameValid: false, 
        ccvValid: false, 
        expirationMonthValid: false, 
        expirationYearValid: false
      }
    }
    handleUserInput(e){
      const name = e.target.name; 
      const value = e.target.value; 
      this.setState({[name]: value}, () => { this.validateField(name, value) }); 
    }
    
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors; 
      let cardNumberValid = this.state.cardNumberValid; 
      let nameValid = this.state.nameValid; 
      let ccvValid = this.state.ccvValid; 
      let expirationMonthValid = this.state.expirationMonthValid; 
      let expirationYearValid = this.state.expirationYearValid; 
  
      switch(fieldName) {
        case 'cardNumber': 
          cardNumberValid = !isNaN(value); 
          fieldValidationErrors.cardNumber = cardNumberValid? '': 'is invalid'; 
          break; 
        case 'name': 
          nameValid = value && value.length > 0; 
          fieldValidationErrors.name = nameValid ? '': 'is invalid'; 
          break; 
        case 'ccv': 
          ccvValid = !isNaN(value); 
          fieldValidationErrors.ccv = ccvValid ? '': 'is invalid'
          break; 
        case 'expirationMonth': 
          expirationMonthValid = value && value.length > 0; 
          fieldValidationErrors.expirationMonth = expirationMonthValid ? '': 'is invalid'; 
          break; 
        case 'expirationYear': 
          expirationYearValid = !isNaN(value); 
          fieldValidationErrors.expirationYear = expirationYearValid ? '': 'is invalid'; 
          break; 
         default: 
           break;
      }
      
      this.setState({
        formsErrors: fieldValidationErrors, 
        cardNumberValid: cardNumberValid, 
        nameValid: nameValid, 
        ccvValid: ccvValid, 
        expirationMonthValid: expirationMonthValid, 
        expirationYearValid: expirationYearValid
        }, this.validateForm); 
        console.log(this.state); 
    }
    
    validateForm() {
      this.setState({formValid: this.state.cardNumberValid 
      && this.state.nameValid && this.state.ccvValid && this.state.expirationMonthValid && this.state.expirationYearValid }); 
    }
    
    render() {
      return (
        <div>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors}/>
        </div>
          <div className="form-group">
            <label>CARD NUMBER</label>
            <input id="card-number" name="cardNumber" placeholder="1234-4567-8910" onChange={(event) => this.handleUserInput(event)}
   value={this.state.cardNumber}></input>
            <label>CCV</label>
            <input id="ccv" name="ccv" placeholder="123" onChange={(event) => this.handleUserInput(event)}
  ></input>    
          </div>
  
          <div className="form-group">
            <label>CARD HOLDER NAME</label>
            <input id="card-name" onChange={(event) => this.handleUserInput(event)}
   name="name" placeholder="Dude Bro"></input>  
          </div>
          <div className="form-group">
            <label>EXPIRATION DATE</label>
            <input id="exp-month" onChange={(event) => this.handleUserInput(event)}
   name="expirationMonth" placeholder="December"></input>
            <input id="exp-year" onChange={(event) => this.handleUserInput(event)}
   name="expirationYear"  placeholder="2018"></input>    
          </div>
          <button type="button" id="submit-btn" disabled={!this.state.formValid} >PAY ME</button>
        </div>
      );
    }
  }
  
  const FormErrors = ({formErrors}) =>
    <div className="formErrors">
      {Object.keys(formErrors).map((fieldName, i) => {
          if(formErrors[fieldName].length > 0) {
            return (<p key={i}>{fieldName} {formErrors[fieldName]}</p>)
          } else {
            return ''; 
          }
        })
      }
    </div>