import React from 'react'

export default class IconSkype extends React.Component {
  
 

  render() {
    

    const {iconSkype, idIcon,onmousedownicon,onmouseupicon,onmouseovericon} = this.props;
    var divImage = {
      backgroundImage: "url(" + iconSkype.image + ")",
      width: "40px",
      height: "40px",
      backgroundSize: "contain",
      title:iconSkype.code
    };
    return (
      <li style={divImage} key={idIcon} onMouseDown={onmousedownicon}  onMouseUp={onmouseupicon} onMouseOver={onmouseovericon}>
      </li>
    );
  }
}
