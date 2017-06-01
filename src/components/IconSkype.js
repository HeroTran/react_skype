import React from 'react'

export default class IconSkype extends React.Component {
  
 

  render() {
    const {iconSkype, idIcon,onmousedownicon,onmouseupicon,onmouseovericon} = this.props;
    return (
      <li key={idIcon} onMouseDown={onmousedownicon} onMouseOver={onmouseovericon} onMouseUp={onmouseupicon} 
     
      >
        <img src={iconSkype.image} title={iconSkype.code} alt={"icon"}/>
      </li>
    );
  }
}
