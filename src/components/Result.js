import React from 'react';

const Result = props => {
   const { taxedIncome, takeHomeIncome, hoursPerWeek } = props;
   const grossPay = taxedIncome + takeHomeIncome;
   return(
      <div id='result'>
         <div className='primary center'>
            Your total income tax payable is <span className='bold'>£{taxedIncome.toFixed(2)}</span> for the financial year 2019/20.
         </div>
         <div className='table'>
            <table>
               <tbody>
                  <tr>
                     <th></th>
                     <th>annual</th>
                     <th>monthly</th>
                     <th>weekly</th>
                     <th>hourly</th>
                  </tr>
                  <tr>
                     <th className='col1'>Gross Pay</th>
                     <td>£{grossPay.toFixed(2)}</td>
                     <td>£{(grossPay / 12).toFixed(2)}</td>
                     <td>£{(grossPay / 52).toFixed(2)}</td>
                     <td>£{(grossPay / (52 * hoursPerWeek)).toFixed(2)}</td>
                  </tr>
                  <tr>
                     <th className='col1'>Income Tax</th>
                     <td>£{taxedIncome.toFixed(2)}</td>
                     <td>£{(taxedIncome / 12).toFixed(2)}</td>
                     <td>£{(taxedIncome / 52).toFixed(2)}</td>
                     <td>£{(taxedIncome / (52 * hoursPerWeek)).toFixed(2)}</td>
                  </tr>
                  <tr>
                     <th className='col1'>Net Pay</th>
                     <td>£{takeHomeIncome.toFixed(2)}</td>
                     <td>£{(takeHomeIncome / 12).toFixed(2)}</td>
                     <td>£{(takeHomeIncome / 52).toFixed(2)}</td>
                     <td>£{(takeHomeIncome / (52 * hoursPerWeek)).toFixed(2)}</td>
                  </tr>
               </tbody>
            </table>
            Gross pay is your pay before tax, and Net pay is what actually makes it into your bank account after Income Tax.
         </div>
         <div className='btn' onClick={e => props.revealReliefInfo(e)}>
            <button>PLEASE RELIEVE ME!</button>
         </div>
      </div>
   )
}

export default Result