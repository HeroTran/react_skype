import React from 'react'

export default class CheckBox extends React.Component {
  
 
  
  

 
  
  render() {
    const {value,onCheckValueRadio} = this.props;
    
    
    return (
      <div >
        <input type="radio" name="15" value="15" onChange={onCheckValueRadio} checked={value === 15} /> 15x15<br />
        <input type="radio" name="20" value="20" onChange={onCheckValueRadio} checked={value === 20}/> 20x20
      </div>
    );
  }
}
