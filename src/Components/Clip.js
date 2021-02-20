import React from 'react';


class Clip extends React.Component{
  
  render(){
    return (
      <audio className='clip' id={`${this.props.id}`} src={`${this.props.src}`} />
    );
  }
}
export default Clip;