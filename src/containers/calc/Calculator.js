import React, { Component } from 'react';
import './calc.css';

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
      const hourQuestionEl = document.querySelector('#hours');
      if(e.target.value === 'hourly'){
         hourQuestionEl.classList.remove('hidden') 
      } else if(e.target.name === 'rate' && !hourQuestionEl.classList.contains('hidden')) {
         hourQuestionEl.classList.add('hidden')
      }
   }

   handleFormSubmission = event => {
      event.preventDefault();
      const { salary, rate, hoursPerWeek } = this.state
      if(!salary){
         this.setState({ errorMessage: 'Please insert your salary.' });
      } else if( rate === 'hourly' && !hoursPerWeek ) {
         this.setState({ errorMessage: 'Please insert the number of hours a week you work.' });
      } else {
         this.props.getSalaryPerAnnum(this.state);
      }
   }

   render(){
      return(
         <div id='calculator' className='section center'>
            <div className='cont'>
               <form onSubmit={this.handleFormSubmission} > 
                  <div className='question'>
                     How much are you paid? 
                     <span className='salary'>
                        £ 
                        <input 
                           type='number' 
                           name='salary' 
                           onChange={this.handleInputChange}
                        />
                     </span>
                     <select name='rate' onChange={this.handleInputChange} value={this.state.rate}>
                        <option value='hourly'>hourly</option>
                        <option value='weekly'>weekly</option>
                        <option value='annually'>annually</option>
                     </select>
                  </div>
                  <div id='hours' className='question hidden'>
                     How many hours a week do you work?
                        <input 
                           type='number' 
                           name='hoursPerWeek'
                           onChange={this.handleInputChange}
                        />
                  </div>
                  <input type='submit' value='WORK IT OUT' />
               </form>
               <div className='error'>
                  { this.state.errorMessage ? this.state.errorMessage : null }
               </div>
            </div>
         </div>
      )
   }

}