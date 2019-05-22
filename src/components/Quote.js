import React from 'react';

const Quote = props => {
   return (
      <div id='quote' style={{ 'top': props.top, 'left': props.left }}>
         <div className='content'>
            "{props.content}" - <span>{props.author}</span>
         </div>
      </div>
   )
}

export default Quote;