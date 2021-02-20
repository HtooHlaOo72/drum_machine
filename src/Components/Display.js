import React from 'react';

const Display=props=>{
  return (
    <div id='display' className='rounded bg-dark text-light w-100 py-3 my-3'>{(props.power)?props.dText:'Power Off'}</div>
  );
}

export default Display;