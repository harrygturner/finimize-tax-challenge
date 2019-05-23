import React from 'react';

const Introduction = props => {

   return (
      <div id='nav' className='center'>
         <div className='icon' onMouseEnter={props.animateScrollArrow}>
            <i className="fas fa-angle-double-down"></i>
         </div>
      </div>
   )

}

export default Introduction;