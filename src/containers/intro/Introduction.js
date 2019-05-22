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
            </div>
         </div>
      )
   }

}