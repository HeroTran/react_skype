import React from 'react'

export default class IconSkype extends React.Component {
  
  constructor(props){
    super(props);
  }


  render() {
    const {iconSkype, idIcon,onmousedownicon,onmouseupicon,onmouseovericon} = this.props;
    return (
      <li key={idIcon} onMouseDown={onmousedownicon} onMouseOver={onmouseovericon} onMouseUp={onmouseupicon} 
     
      >
        <img src={this.props.iconSkype.image} title={this.props.iconSkype.code} />
      </li>
    );
  }
}
