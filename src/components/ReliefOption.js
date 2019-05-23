import React from 'react';

const ReliefOption = props => (
   <div className='option'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      { props.relief && props.relief > 0 
         ? <p>Amount your income will be relieved is <span className='bold'>£{props.relief}</span>.</p>
         : null
      }
   </div>
)

export default ReliefOption;