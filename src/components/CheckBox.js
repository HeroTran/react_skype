import React from 'react'
// import classnames from 'classnames'

export default class CheckBox extends React.Component {
  
  constructor(props){
    super(props);
    
  }
  
  

 
  
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
