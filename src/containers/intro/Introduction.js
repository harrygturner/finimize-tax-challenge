import React, { Component } from 'react';
import './intro.css'

import Quotes from '../Quotes';

export default class Introduction extends Component {

   render() {
      return (
         <div id='intro' className='section center'>
            < Quotes />
            <div className='cont'>
               <div className='header'>
                  <h1>INCOME TAX CALCULATOR</h1>
                  <h3>Are you paying too much income tax?</h3>
               </div>
               <div className='content'>
                  Confused by your income tax and National Insurance? Our calculator will not only give you an indication of what you should be paying based on your annual salary for the financial year 2019/20 but it will also work out how much you could be <span className='bold'>overpaying</span>!
                  <br /><br />
                  - Are you contrinbuting to a pension scheme or paying off your student loan? 
                  <br />
                  - Are you self-employed?
                  <br /> 
                  - Are you entitled to tax free allowances?
                  <br /> 
                  - Are you married or in a civil partnership? 
                  <br /><br />
                  <span className='bold'>All these factors and more can offer you some much needed tax relief.</span>
                  <br /><br />
                  Do not worry, we will not be making you fill out a full tax form, just follow the arrows, input your salary and let us do the magic.
               </div>
            </div>
         </div>
      )
   }

}