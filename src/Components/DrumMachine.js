import React from 'react';
import {bankOne,bankTwo} from './padList';
import DrumPad from './DrumPad';
import Display from './Display';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';


class DrumMachine extends React.Component{
  state={padBg:'cyan',displayText:'Press to play drum!',power:true,type:true};
  componentDidMount(){
    document.addEventListener('keydown',this.handleKeyDown)
  }
  
  // handleKeyDown=(e)=>{
  //   if(keyCodes.indexOf(e.keyCode)!== -1 && this.state.power){
  //     ///console.log('contain',String(e.keyCode));
  //     //this.playClip(String(e.keyCode));
  //     //this.changeBackground();
      
  //   }
  // }
  playClip=(id)=>{
    const aud=document.getElementById(id);
    //console.log(id,'Play Sound')
    if(aud !== null){
      //console.log(aud)
      aud.currentTime=0;
      aud.play();
    }else{
      console.log(aud,typeof aud)
    }
    
  }
  
  updateDisplay=(text)=>{
    this.setState({...this.state,displayText:text});
  }
  render(){
    
    return (
      <div className='container' id='drum-machine'>
        <h2 className='shadow my-2'>Drum Machine</h2>
        <div className='shadow border border-4 border-info' id='drum_container'>
        <div className='row'>
          <div className='col-6'>
          <h4>POWER</h4>
          <BootstrapSwitchButton 
          className='toggle_switch'
          checked={this.state.power} 
          size='lg' 
          onstyle='warning'
          offstyle='danger'
          //style={toggle_style}
          onChange={(checked) => {
            //console.log(this.state.power, 'power')
            this.setState({ power: checked })
        }}
          />
          </div>
          <div className='col-6'>
          <h4>Type</h4>
          <BootstrapSwitchButton 
          className='toggle_switch'
          checked={this.state.type} 
          size='lg' 
          onstyle='warning'
          offstyle='dark'
          onlabel='🥁'
          offlabel='🎹'
          //style={toggle_style}
          onChange={(checked) => {
            //console.log(this.state.type, 'type')
            this.setState({ type: checked })
        }}
          />
          </div>
          
          
        </div>
        <Display dText={this.state.displayText} power={this.state.power}/>
        {
          (this.state.type)?
          <div className='row justify-content-center'>
            {
              bankOne.map(data=>(
                <DrumPad 
                key={data.keyTrigger} 
                text={data.keyTrigger} 
                clipUrl={data.url}  
                padText={data.id}
                padBg={this.state.padBg}
                //onClick={this.changeBackground}
                updateDisplay={this.updateDisplay}
                power={this.state.power}
                playClip={this.playClip}
                />
              ))
            }
        </div>
        :
        <div className='row justify-content-center'>
          {
            bankTwo.map(data=>(
              <DrumPad 
              key={data.keyTrigger} 
              text={data.keyTrigger} 
              clipUrl={data.url}  
              padText={data.id}
              padBg={this.state.padBg}
              //onClick={this.changeBackground}
              updateDisplay={this.updateDisplay}
              power={this.state.power}
              playClip={this.playClip}
              />
            ))
          }
        </div>
        }
        </div>
        <div className='fixed-bottom'>Created By Htoo Hla Oo</div>
      </div>
    )
  }
  
}
export default DrumMachine;