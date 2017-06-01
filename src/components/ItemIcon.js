import React from 'react'
import classnames from 'classnames'

export default class ItemIcon extends React.Component {
  

  
onClickCheckIcon = e => { 
    console.log(e.target);
  }
  

  render() {
    const {icon, idIcon ,onClickCheckIcon} = this.props
    return (
      <li key={idIcon} onClick={onClickCheckIcon}>
        <img src={this.props.icon.image} data-code={this.props.icon.code} title={this.props.icon.code} />
      </li>
    );
  }
}
