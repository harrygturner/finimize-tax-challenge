import React, { Component } from 'react';
import './mask.css';

import ReliefOption from '../../components/ReliefOption';

export default class RelieveMe extends Component {

   calculateJerseyIncome = () => {
      const { grossPay } = this.props
      if(grossPay <= 14900){
         return grossPay;
      } else {
         const taxOption1 = grossPay * 0.2;
         const taxOption2 = (grossPay - 14900) * 0.26;
         return taxOption1 > taxOption2 ? grossPay - taxOption2 : grossPay - taxOption1;
      }
   }

   calculateMarriageSaving = () => {
      if (this.props.grossPay > 115000 && this.props.grossPay <= 45000){
         return 250;
      }
   }

   render() {
      return (
         <div id='relief' className='invisible' onClick={e => this.props.handleExitClick(e)}>
            <div className='mask'></div>
            <div className='content'>
               <div className='center'>
                  Nobody enjoys paying taxes, especially income tax. So here are a few ways you can get some much needed relief: 
               </div>
               < ReliefOption 
                  title='Get Married!'
                  description='If one partner is earning below the basic rate (£11,500) and the other is paying the basic rate of income tax then they can transfer £1,250 of their personal allowance to their spouse or civil partner.'
                  relief={this.calculateMarriageSaving()}
               />
               < ReliefOption 
                  title='Start adding to your pension'
                  description='Up until a maximum contribution of £40,000 (annual allowance), you will not need to pay any tax on the amount you contribute towards your pension each year.'
               />
               < ReliefOption 
                  title='Move to Jersey!'
                  description='Maximum personal tax rate in Jersey is 20%, with an exemption threshold of £14,900 for single people and £23,950 for married couples.'
                  relief={this.calculateJerseyIncome() - this.props.takeHomeIncome}
               />
               < ReliefOption 
                  title='Be more charitable'
                  description='Those who earn more than the £45,000 higher-rate threshold might be able to cut their tax bills using tax relief on charitable giving, with the benefit split between the charity and the taxpayer. Charities and community amateur sports clubs can use “gift aid” to claim an extra 25p for every £1 given by taxpayers. A higher-rate taxpayer could then use their tax return to claim back another 25p.'
               />
            </div>
         </div>
      )
   }
}

