import React, { Component } from 'react';
import './calc.css';

import Form from '../../components/Form';
import Error from '../../components/Error';
import Result from '../../components/Result';

export default class Calculator extends Component {

   state = {
      salary: null,
      rate: 'annually',
      hoursPerWeek: null,
      errorMessage: ''
   }

   handleInputChange = e => {
      this.setState({
         [e.target.name]: e.target.value,
         errorMessage: ''
      })
   }

   handleFormSubmission = event => {
      event.preventDefault();
      const { salary, hoursPerWeek } = this.state
      if(!salary){
         this.setState({ errorMessage: 'Please insert your salary.' });
      } else if( !hoursPerWeek ) {
         this.setState({ errorMessage: 'Please insert the number of hours a week you work.' });
      } else {
         this.props.getSalaryPerAnnum(this.state);
      }
   }

   render(){
      return(
         <div id='calculator' className='section center'>
            <div className='cont'>
               < Form 
                  handleInputChange = {this.handleInputChange}
                  handleFormSubmission = {this.handleFormSubmission}
                  rate = {this.state.rate}
               />
               { this.state.errorMessage 
                  ? < Error error={this.state.errorMessage} /> 
                  : null 
               }
               < Result 
                  takeHomeIncome={this.props.takeHomeIncome}
                  taxedIncome={this.props.taxedIncome}
                  hoursPerWeek={this.state.hoursPerWeek}
               />
            </div>
         </div>
      )
   }

}