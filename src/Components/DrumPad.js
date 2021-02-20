import React from 'react';
import {keyCodes} from './padList';
import Clip from './Clip';
class DrumPad extends React.Component{
  state={padBackground:'cyan',padType:'Heater Kit'};
  componentDidMount(){
    document.addEventListener('keydown',this.padKeyDown);
  }
  padClick=()=>{
    if(this.props.power){
      this.setState({padBackground:'red'});
      this.props.updateDisplay(this.props.padText);
      setTimeout(()=>{this.setState({padBackground:'cyan'})},50);
      this.props.playClip(this.props.text);
    }
    
  }
  padKeyDown=(e)=>{
    
    if(keyCodes.indexOf(e.keyCode)!== -1 && this.props.power){
      if(this.props.text===String.fromCharCode(e.keyCode)){
        this.padClick();
      }
    }
  }
  render(){
    const {padBackground}=this.state;
    return (
      <div className='col-4'>
          <div className='shadow p-3  bg-body rounded mx-auto my-3 w-50 text-center drum-pad'
          id={this.props.padText}  
          style={{backgroundColor:padBackground}} 
          
          onClick={()=>{this.padClick()}}
          
          >
        {this.props.text}
        
        <Clip id={this.props.text} src={this.props.clipUrl} />
      </div>
      </div>
      
    )
  }
  
}
export default DrumPad;