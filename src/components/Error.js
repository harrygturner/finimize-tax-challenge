import React from 'react';

const Error = props => (
   <div className='error'>
      {props.error ? props.error : null}
   </div>
)

export default Error
