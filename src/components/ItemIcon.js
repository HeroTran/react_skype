import React from 'react'

export default class ItemIcon extends React.Component {
  

  
onClickCheckIcon = e => { 
    console.log(e.target);
  }
  

  render() {
    const {icon, idIcon ,onClickCheckIcon} = this.props
    return (
      <li key={idIcon} onClick={onClickCheckIcon}>
        <img src={icon.image} data-code={icon.code} title={icon.code} alt={"skype icon"} />
      </li>
    );
  }
}
