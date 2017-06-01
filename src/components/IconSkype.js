import React from 'react'

export default class IconSkype extends React.Component {
  
 

  render() {
    const {iconSkype, idIcon,onmousedownicon,onmouseupicon,onmousemoveicon,onmouseouticon,onmouseovericon} = this.props;
    return (
      <li key={idIcon} onMouseDown={onmousedownicon}  onMouseUp={onmouseupicon} onMouseOver={onmouseovericon}>
        <img src={iconSkype.image} title={iconSkype.code} alt={"icon"}/>
      </li>
    );
  }
}
