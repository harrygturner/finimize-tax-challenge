import React from 'react';

const Form = props => (
   <form onSubmit={props.handleFormSubmission} >
      <div className='question'>
         How much are you paid?
            <span className='salary'>
            £
            <input
               type='number'
               name='salary'
               onChange={props.handleInputChange}
            />
         </span>
         <select name='rate' onChange={props.handleInputChange} value={props.rate}>
            <option value='hourly'>hourly</option>
            <option value='weekly'>weekly</option>
            <option value='annually'>annually</option>
         </select>
      </div>
      <div id='hours' className='question'>
         How many hours a week do you work?
         <input
            type='number'
            name='hoursPerWeek'
            onChange={props.handleInputChange}
         />
      </div>
      <input type='submit' value='WORK IT OUT' />
   </form>
)

export default Form